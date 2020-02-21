import Layout from '../components/MyLayout';
import Link from 'next/link';
import fetch from 'isomorphic-unfetch';

const Tv = ({ shows }) => (
  <Layout>
    <h1>Batman Tv show</h1>
    <ul>
      {shows.map(show => (
        <li key={show.id}>
          <Link href="/p/[id]" as={`/p/${show.id}`}>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
    </ul>
    <style jsx>{`
      a {
        color: #99ffcc;
      }
    `}
    </style>
  </Layout>
);

Tv.getInitialProps = async () => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=batman');
  const data = await res.json();
  console.log(data);

  return { shows: data.map(entry => entry.show) };
};

export default Tv;
