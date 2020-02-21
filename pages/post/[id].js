import { useRouter } from 'next/router';
import Markdown from 'react-markdown';
import Layout from '../../components/MyLayout';

export default () => {
  const router = useRouter();

  return (
    <Layout>
      <h1>{router.query.id}</h1>
      <div className="markdown">
        <Markdown source={`This is a blog post.
Yes. We can have a [link](/link).
learning next.js to make a web site for my brother
### This is a title`}
      />

        <style jsx global>{`
        h1, h3 {
          text-align: center;
          text-transform: uppercase;
          color: #ff00aa;
        }

        .markdown {
          border: 2px solid gray;
          padding: 1rem;
        }

        .markdown a {
          text-decoration: none;
          color: red;
        }

        .markdown a:hover {
          opacity: 0.6;
        }
        `}</style>
      </div>
    </Layout>
  );
};
