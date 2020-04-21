import Layout from '../components/MyLayout';
import Link from 'next/link';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';

const Tv = ({ shows, msg }) => {
  console.log(msg);
  return (
    <>
      <Head>
        <title>tv</title>
        <meta name="description" content="this is a tv route" />
      </Head>
      <Layout>
        <div>
          <h2>Batman Tv show</h2>
          <ul>
            {shows.map((show) => (
              <li key={show.id}>
                <Link href="/p/[id]" as={`/p/${show.id}`}>
                  <a>{show.name}</a>
                </Link>
              </li>
            ))}
          </ul>
          <button>{msg.message}</button>
          <style jsx>
            {`
              a {
                color: #99ffcc;
              }
              button {
                margin-top: 2rem;
                padding: .5rem 1rem;
                background: black;
                border: none;
                color: white;
              }
            `}
          </style>
        </div>
      </Layout>
    </>
  );
};

Tv.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.tvmaze.com/search/shows?q=avengers');
  const data = await res.json();
  const response = await fetch('http://localhost:3000/api/auth');
  const msg = await response.json();

  return { msg, shows: data.map((entry) => entry.show) };
};

export default Tv;
