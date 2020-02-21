const axios = require("axios");

const functions = {
  multiply: (num1, num2) => {
    return num1 * num2;
  },

  add: (num1, num2) => {
    return num1 + num2;
  },

  isNull: () => {
    return null;
  },

  getUser: async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
    return res.data;
  },

  getPost: async () => {
    let res = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
    return res.data;
  }
};

module.exports = functions;
