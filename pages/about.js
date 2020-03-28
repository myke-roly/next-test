import Router from 'next/router';
import Layout from '../components/MyLayout';

function About() {
  return (
    <Layout>
      {/* <a onClick={() => Router.push('/')}> */}
      <a onClick={() => Router.replace('/')}> {/** remplazamos la ruta y no se carga en history */}
        go to home
      </a>
    </Layout>
  );
}

export default About;
