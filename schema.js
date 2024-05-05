const { gql } = require('apollo-server-express');

const typeDefs = gql`
type Job {
  id: ID!
  jobType: String!
  date: String!
  clientName: String!
  clientContact: String
  details: String
  price: Float!  # Updated to include price
}

type Mutation {
  addJob(
      jobType: String!, 
      date: String!, 
      clientName: String!, 
      clientContact: String, 
      details: String,
      price: Float!  # Ensure price is included in mutations
  ): Job
  updateJob(
      id: ID!, 
      jobType: String, 
      date: String, 
      clientName: String, 
      clientContact: String, 
      details: String,
      price: Float  # Allow updates to the price
  ): Job
}

type Query {
  jobs: [Job]
  job(id: ID!): Job
}

`;

module.exports = typeDefs;
