import React from 'react';

const Movies = ({ show }) => {
  return (
    <>
      <h2>{show.name}</h2>
      <section>
        <p>{show.summary.replace(/<[/]?[pg]>/g, '')}</p>
        {show.image ? <img src={show.image.medium} /> : null}
      </section>

      <style jsx>{`
        section {
          display: grid;
          grid-template-columns: 2fr 1fr;
        }
        img {border-radius: 1rem}

        p {
          padding: 2rem;
          line-height: 1.3rem;
          font-size: 14px;
          color: white;
        }

      `}</style>
    </>
  );
};

export default Movies;
