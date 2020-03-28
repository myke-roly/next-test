import { useState } from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import Layout from '../components/MyLayout';

const PostLink = ({ id, title }) => (
  <li>
    {/* No tener rutas con el mismo parametro {"foo": "abc", "foo": "456"} /abc?foo=456 */}
    {/* [...params] @campturamos todos las rutas /a/b/c/d... */}
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{title}</a>
    </Link>
  </li>
);

export default () => {
  const [state, setState] = useState([
    { id: 'hello-next', title: 'Hello Next.js' },
    { id: 'learn-next', title: 'Learn Next.js is awesome' },
    { id: 'deploy-next', title: 'Deploy apps with Zeit' }
  ]);

  const [link, setLink] = useState('');

  const addLink = e => {
    e.preventDefault();
    setState([...state, { id: link, title: link }]);
    setLink('');
  };

  const newRoute = () => {
    Router.beforePopState(({ url, as, options }) => {
      // I only want to allow these two routes!
      if (as !== '/' && as !== '/other') {
        // Have SSR render bad routes as a 404.
        window.location.href = as;
        return false;
      }

      return true;
    });
  };

  return (
    <>
      <Head>
        <title>home</title>
        <meta name="description" content="this is the main page..." />
      </Head>
      <Layout>
        <h2 onClick={newRoute}>My Blog</h2>
        <form onSubmit={addLink}>
          <input
            type="text"
            placeholder="value..."
            value={link}
            onChange={e => setLink(e.target.value)}
          />
        </form>
        <ul>
          {state.map(post => (
            <PostLink key={post.id} id={post.id} title={post.title} />
          ))}
        </ul>
        <style jsx global>{`
          h2 {
            font-size: 1.2rem;
            text-transform: uppercase;
          }
        `}</style>
      </Layout>
    </>
  );
}
