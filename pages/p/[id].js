import fetch from 'isomorphic-unfetch';
import Layout from '../../components/MyLayout';
import Movies from '../../components/Movies';

const Post = ({ show }) => {
  return (
    <Layout>
      <Movies show={show} />
    </Layout>
  );
};

Post.getInitialProps = async context => {
  const { id } = context.query;
  const res = await fetch(`https://api.tvmaze.com/shows/${id}`);
  const show = await res.json();

  return { show };
};

export default Post;
