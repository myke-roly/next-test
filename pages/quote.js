import { useState, useEffect } from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import axios from 'axios';
import fetch from 'isomorphic-unfetch';

function Quotes({ list }) {
  const [loaging, setLoading] = useState(true);

  const getUser = () => {
    if (Object.entries(list).length === 0) {
      return;
    }
    setLoading(false);
  };
  return (
    <>
      <Head>
        <title>quotes</title>
        <meta name="description" content="this is a quote route" />
      </Head>
      <Layout>
        <main className="quote">
          {loaging ? (
            <>
              <p>Loading...</p>
              <button onClick={getUser}>Get data</button>
            </>
          ) : (
            <>
              <p>{list.user.name}</p>
              <p>{list.user.email}</p>
              <button onClick={() => setLoading(true)}>X</button>
            </>
          )}
        </main>

        <style jsx>{`
          main {
            margin-top: 1rem;
            margin: 1rem;
            color: #fff;
          }
          button {
            padding: 0.7rem 1rem;
            border-radius: 5px;
            margin: 0.5rem 0;
            background: black;
            border: none;
            color: white;
          }
        `}</style>
      </Layout>
    </>
  );
}

export async function getServerSideProps() {
  const response = await fetch(process.env.URL + `/api/getApi`);
  const list = await response.json();

  return { props: { list } };
}

export default Quotes;
