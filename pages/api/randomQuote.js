import allQuotes from '../../quotes.json';
import Cors from 'micro-cors';

const cors = Cors({
  allowMethods: ['GET', 'HEAD'],
});

const handler = (req, res) => {

  const { author } = req.query;
  let quotes = allQuotes;
  
  if(author) {
    quotes = quotes.filter(quote => quote.author.toLowerCase().includes(author.toLowerCase()));
  }

  if(!quotes.length) {
    //enviamos un elemento aleatorio
    quotes = allQuotes.filter(quote => quote.author.toLowerCase() === 'unknown');
  }

  const quote = quotes[Math.floor(Math.random() * quotes.length)];

  res.status(200).json(quote);
};

export default cors(handler);