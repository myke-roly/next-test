import { useState, useEffect } from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import axios from 'axios';

export default function Api() {
  const [list, setList] = useState({});

  useEffect(() => {
    const getUser = async () => {
      const response = await axios.get(`/api/getApi`);
      setList(response.data);
      console.log(response.data);
    };
    getUser();
  }, []);

  const [state, setState] = useState({name: ''});

  const fetchPost = async (d) => {
    const response = await axios.post('/api/randomQuote', d);
    console.log(response);
  };

  const getuser = (e) => {
    e.preventDefault();
    fetchPost(state);
  };

  return (
    <>
      <Head>
        <title>quotes</title>
        <meta name="description" content="this is a quote route" />
      </Head>
      <Layout>
        <main className="quote">
          <h3>User List</h3>
          <ul>
            {list && (
              <li>{list.name} - {list.email}</li>
            )}
          </ul>
        </main>

        <form onSubmit={getuser}>
          <input
            type="text"
            value={state.name}
            onChange={(e) => setState({ name: e.target.value})}
          />
          <input className="btn" type="submit" value="enviar" />
        </form>

        <style jsx>{`
          main {
            margin-top: 1rem;
            margin: 1rem;
            color: #fff;
          }
          li {
            margin: 1rem;
          }
          input {
            padding: 0.7rem 1rem;
            border: none;
            border-radius: 5px;
            margin: 0.5rem 0;
          }
          .btn {
            margin-left: .5em;
            background: black;
            border: none;
            color: white;
          }
        `}</style>
      </Layout>
    </>
  );
}
