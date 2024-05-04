const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Job {
    id: ID!
    jobType: String!
    date: String!
    clientName: String!
    clientContact: String
    details: String
  }

  type Query {
    jobs: [Job]
    job(id: ID!): Job
  }

  type Mutation {
    addJob(jobType: String!, date: String!, clientName: String!, clientContact: String, details: String): Job
    updateJob(id: ID!, jobType: String, date: String, clientName: String, clientContact: String, details: String): Job
  }
`;

module.exports = typeDefs;
