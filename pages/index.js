import Link from 'next/link';
import Layout from '../components/MyLayout';

const PostLink = ({id, title}) => (
  <li>
    <Link href="/post/[id]" as={`/post/${id}`}>
      <a>{title}</a>
    </Link>
    <style jsx>{`a {color: #99ffcc;}`}</style>
  </li>
);

export default function Blog() {

  const [state, setState] = React.useState([
    {id: "hello-next", title: "Hello Next.js"},
    {id: "learn-next", title: "Learn Next.js is awesome"},
    {id: "deploy-next", title: "Deploy apps with Zeit"}
  ]);

  return (
    <>
      <Layout>
        <h2>My Blog</h2>
        <ul>
          {state.map(post => (
            <PostLink key={post.id} id={post.id} title={post.title} />
          ))}
        </ul>

        <style jsx>{`
          h2 {
            font-size: 1.2rem;
            text-transform: uppercase;
          }
        `}</style>

        <section className="quote">

        </section>
      </Layout>
    </>
  );
}
