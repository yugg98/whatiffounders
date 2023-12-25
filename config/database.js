const mongoose = require("mongoose");

const connectDatabase = () => {
// 
  mongoose
    .connect('mongodb+srv://whatiffounders:WoQbRTJTbQ7asdfV@whatiffounder.6de9j9y.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((data) => {
      console.log(`Mongodb connected with server: ${data.connection.host}`);
    });
};

module.exports = connectDatabase;