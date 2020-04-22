import Layout from '../components/MyLayout';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';
import { useState, useEffect } from 'react';

const CustomServer = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    msg: ''
  });

  const [ data, setData ] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      const url = `${process.env.URL}/auth`;
      const response = await fetch('/auth');
      const users = await response.json();
      if(response.status === 200) setData(users);
    }

    getUsers();

    if (state.msg) {
      setTimeout(() => {
        setState({ msg: ''});
      }, 3000);
    }
  }, [state.msg]);

  const fetchData = async () => {
    const { name, email } = state;
    if(!state.name || !state.email ) return;
    const response = await axios.post('/auth', { name, email });
    setState({ msg: response.data.message});
  };

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    setState({ name: '', email: ''});
  }


  function handleChange(e) {
    setState({...state, [e.target.name]: e.target.value });
  }

  return (
    <>
      <Head>
        <title>Custom server</title>
        <meta name="description" content="this is a tv route" />
      </Head>
      <Layout>
          <main>
            <form onSubmit={handleSubmit}>
              <h2>User List</h2>  
              {state.msg && <p>{state.msg}</p>}
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                value={state.name}
                onChange={handleChange}
                placeholder="No ingresar datos validos ahre!!"
              />
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
              <button type="submit">Save data</button>
            </form>
            <table border="1">
              <thead>
                <tr>
                  <th>USERS</th>
                  <th>@</th>
                </tr>
              </thead>
              <tbody>
                {data && data.map((user) => (
                  <tr key={user._id}>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </main>
          <style jsx>
            {`
              main {
                display: flex;
                font-family: sans-serif;
              }
              @media (max-width: 720px) {
                main {
                  flex-direction: column;
                }
              }
              h2 {
                color: #555; 
                margin-bottom: 1rem;
              }
              table,
              form {
                width: 100%;
                margin: 2rem auto;
                background: #000;
                padding: 2rem;
                border: none;
                border-radius: 5px;
              }
              thead {
                background: #222;
                color: #fff;
              }
              tbody {
                background: #dedede;
                color: #333;
              }
              th,
              td {
                border-radius: 2px;
                padding: 0.5rem 1rem;
                border: none;
                box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
              }
              form {
                width: 100%;
                margin: 2rem auto;
                background: #dedede;
                padding: 2rem;
              }
              input {
                width: 100%;
                padding: 0.7rem 1rem;
                border: none;
                border-radius: 5px;
                margin: 0.5rem 0;
              }
              p {
                color: green;
                text-transform: uppercase;
                font-size: 1rem;
                margin: .5rem;
                text-align: center;
              }
              button {
                padding: 0.7rem 1rem;
                background: black;
                border: none;
                color: white;
              }
            `}
          </style>
      </Layout>
    </>
  );
};

// CustomServer.getInitialProps = async (ctx) => {
//   const url = `${process.env.URL}/auth`;
//   const response = await fetch(url);
//   const data = await response.json();

//   return { data };
// };

export default CustomServer;
