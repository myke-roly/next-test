const mongosse = require('mongoose');
require('dotenv').config({ path: '.env' });

const connectDB = async () => {
  await mongosse.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log('Data base connect!!');
}
module.exports = connectDB;