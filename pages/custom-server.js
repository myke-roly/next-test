import { useState, useEffect } from 'react';
import Layout from '../components/MyLayout';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch';
import axios from 'axios';

const CustomServer = () => {

  const [state, setState] = useState({
    name: '',
    email: '',
    msg: null,
  });

  const [data, setData] = useState([]);

  const getUsers = async () => {
    const response = await fetch(`${process.env.URL}/api/auth`);
    const users = await response.json();
    if (response.status === 200) setData(users);
  };

  useEffect(() => {
    getUsers();

    if (state.msg) {
      setTimeout(() => {
        setState({ msg: '' });
      }, 3000);
    }
  }, [state.msg]);

  const fetchData = async () => {
    const { name, email } = state;
    if (!state.name || !state.email) return;

    const response = await axios.post(`${process.env.URL}/api/auth`, { name, email });
    setState({ msg: response.data.message });
  };

  const deletedUser = async (id) => {
    await axios.delete(`${process.env.URL}/api/auth/${id}`);
    getUsers();
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetchData();
    setState({ name: '', email: '' });
  }

  function handleChange(e) {
    setState({ ...state, [e.target.name]: e.target.value });
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
              {data &&
                data.map((user) => (
                  <tr key={user._id}>
                    <td contentEditable="true">{user.name}</td>
                    <td>{user.email} 
                      <span className="delete" onClick={() => deletedUser(user._id)}>X</span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </main>
        <style jsx>
          {`
            main {
              width: 100%;
              display: grid;
              grid-template-columns: repeat(auto-fill, minmax(370px, 1fr));
              grid-gap: 1rem;
              font-family: sans-serif;
            }
            @media (max-width: 720px) {
              main {
                font-size: 14px;
              }
            }
            h2 {
              color: #555;
              margin-bottom: 1rem;
            }
            table {
              grid-column-end: span 1.5;
            }
            table,
            form {
              width: 100%;
              margin: 2rem auto;
              background: #dedede;
              padding: 1rem;
              border: none;
              border-radius: 5px;
              box-shadow: 0 0 7px rgba(0, 0, 0, 0.3);
            }
            thead {
              background: #000;
              color: #fff;
            }
            tbody {
              background: #efefef;
              color: #333;
            }
            th,
            td {
              padding: 0.7rem 1rem;
              border: 2px solid #dedede;
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
              margin: 0.5rem;
              text-align: center;
            }
            button {
              padding: 0.7rem 1rem;
              background: black;
              border: none;
              color: white;
            }
            .delete {
              float: right;
              color: #C01D3A;
              cursor: pointer;
              font-weight: bold;
            }
          `}
        </style>
      </Layout>
    </>
  );
};

export default CustomServer;
