import {useRouter} from 'next/router';
import useSWR from 'swr';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import axios from 'axios';
import { useState } from 'react';

export default function Api() {
  const newUser = async () => {
    const response = await axios.get(`/api/getApi`);
    const data = await response;

    console.log(data);
  }

  const [state, setState] = useState({
    name: ''
  })

  const fetchPost = async (d) => {
    const response = await axios.post('/api/randomQuote', d);
    console.log(response);
  } 

  const getuser = (e) => {
    e.preventDefault();
    fetchPost(state)
  }

  return (
    <>
    <Head>
      <title>quotes</title>
      <meta name="description" content="this is a quote route" />
    </Head>
    <Layout>
      <main>
          <div className="quote">
            <button onClick={newUser}>new User</button>
          </div>
      </main>

      <form onSubmit={getuser}>
        <input type="text" value={state.name} onChange={(e) => setState({name: e.target.value})} />
        <input type="submit" value="enviar" />
      </form>

      <style jsx>{`
        main {
          margin-top: 1rem;
          padding: 1rem;
          border: 2px solid green;
          color: #fff;
        }
      `}</style>
    </Layout>
    </>
  )
} 