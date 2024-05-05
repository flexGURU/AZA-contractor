// resolvers.js
const Job = require('./models/Job');

const resolvers = {
  Query: {
    jobs: async () => {
      return await Job.findAll();
    },
    job: async (_, { id }) => {
      return await Job.findByPk(id);
    }
  },
  Mutation: {
    addJob: async (_, { jobType, date, clientName, clientContact, details, price }) => {
      const job = await Job.create({
        jobType, date, clientName, clientContact, details, price
      });
      return job;
    },
    updateJob: async (_, { id, jobType, date, clientName, clientContact, details, price }) => {
      const job = await Job.findByPk(id);
      if (!job) {
        throw new Error("Job not found");
      }
      await job.update({ jobType, date, clientName, clientContact, details, price });
      return job;
    }
  }
};
//ffsc

module.exports = resolvers;
