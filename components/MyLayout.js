import Header from './Header';

const Layout = props => {
  return (
    <>
      <Header />
      <div className="container">{props.children}</div>

      <style jsx>{`
        .container {
          width: 90%;
          padding: 1rem;
          margin: 0 auto;
        }
      `}</style>
    </>
  );
};

export default Layout;
