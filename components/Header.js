import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <nav>
        <ul style={linkStyle}>
          <li><Link href="/"><a>Home</a></Link></li>
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
          <li><Link href="/tv"><a>Tv</a></Link></li>
          <li><Link href="/quote"><a>quote-api</a></Link></li>
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
          animation: up 1s ease;
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

        @keyframes up {
          0% {margin-top: -100%;}
          100% {margin-top: 0;}
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