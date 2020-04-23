require('dotenv').config();
module.exports = {

  env: {
    MONGO_URL: "mongodb+srv://myke_roly:dwqWCQnNawdxsBVO@cluster0-fhvfq.mongodb.net/test?retryWrites=true&w=majority",
    URL: "http://localhost:3000"
  },

  pageExtensions: ['mdx', 'jsx', 'js', 'ts', 'tsx'],
}