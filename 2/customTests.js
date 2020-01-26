const { expect } = require('chai');
const { createJobQueue } = require('../jobQueue' );

describe('Job Queue / Custom Tests', function() {
  it('has the three required methods: addJob, cancelJob, and processAllJobs', function() {
    const jobQueue = createJobQueue();

    expect(jobQueue).to.have.property('addJob');
    expect(jobQueue.addJob).to.be.a('function');

    expect(jobQueue).to.have.property('cancelJob');
    expect(jobQueue.cancelJob).to.be.a('function');

    expect(jobQueue).to.have.property('processAllJobs');
    expect(jobQueue.processAllJobs).to.be.a('function');
  });

  // You can add your own custom tests here!
});
