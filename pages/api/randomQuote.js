import allQuotes from '../../quotes.json';
import Cors from 'micro-cors';

const cors = Cors({
  allowMethods: ['POST']
});

const handler = (req, res) => {
  console.log(req.body);
    try {
      res.status(200).json({data: req.body, pararm: req.query});
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'error de servidor'});
    }
};

export default cors(handler);