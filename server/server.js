const express = require("express");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@apollo/server/express4");
const path = require("path");
const { authMiddleware } = require('.utils/auth');

const PORT = process.env.PORT || 3001;
const app = express();
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

const startApolloServer = async () => {
    await server.start();

    app.use(express.urlencoded({ extended: false }));
}

app.listen(PORT, (error) => {
if (!error)
    console.log("server is running and app is listening on port" + PORT)
else
console.log("error occurred, server cant start", error);
})