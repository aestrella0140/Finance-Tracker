const { GraphQLError } = require("graphql");
const jwt = require("jsonwebtoken");

const secret = "imBatMan";
const expiration = "2hr";

module.exports ={
    AuthenticationError: new GraphQLError("Couldnt authentiucate user")
}