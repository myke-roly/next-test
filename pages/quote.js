import { useState, useEffect } from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import axios from 'axios';

export default function Api() {
  const [list, setList] = useState({});

  const getUser = async () => {
    const response = await axios.get(`/api/getApi`);
    setList(response.data);
  }

  return (
    <>
      <Head>
        <title>quotes</title>
        <meta name="description" content="this is a quote route" />
      </Head>
      <Layout>
        <main className="quote">
          <h3>Welcome {list && <><p>{list.name}</p><p>{list.email}</p></>}</h3>
          <button onClick={() => getUser()}>Get data</button>
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
