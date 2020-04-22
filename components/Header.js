import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={linkStyle}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/tv"><a>Tv</a></Link></li>
          <li><Link href="/quote"><a>quote-api</a></Link></li>
          <li><Link href="/custom-server"><a>CustomServer</a></Link></li>
        </ul>
      </nav>

      <style jsx>{`
        header {
          padding: 10px;
          margin: 0;
          background: #556;
          color: white;
        }
        li {
          margin-right: 1rem;
        }

        a {
          color: white;
          font-size: .8rem;
          text-decoration: none;
          text-transform: uppercase;
          padding: .5rem 1rem;
        }

        a:hover {
          background: #7b7b7b;
          border-radius: 1rem;
        }
      `}</style>
    </header>
  );
};

const linkStyle = {
  display: 'flex',
  listStyle: 'none'
}

export default Header;