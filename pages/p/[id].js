import fetch from 'isomorphic-unfetch';
import Layout from '../../components/MyLayout';

const Post = ({ show }) => {
  return (
    <Layout>
      <h2>{show.name}</h2>
      <section>
        <p>{show.summary.replace(/<[/]?[pg]>/g, '')}</p>
        {show.image ? <img src={show.image.medium} /> : null}
      </section>

      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: 2fr 1fr;
        }
        img {border-radius: 1rem}

        p {
          padding: 2rem;
          line-height: 1.3rem;
          font-size: 14px;
        }

      `}</style>
    </Layout>
  );
};

Post.getInitialProps = async context => {
  console.log(Post.getInitialProps);
  console.log(context);
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
