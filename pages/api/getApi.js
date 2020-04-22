import Cors from 'micro-cors';

const cors = Cors({
  allowMethods: ['GET', 'HEAD']
})

const user = {
  name: 'Mike',
  email: 'mike@json.com',
}

const handler = (req, res) => {
    res.status(200).json(user);
};

export default cors(handler)