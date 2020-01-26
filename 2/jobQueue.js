class JobQueue {
  constructor() {
    this.queue = [];
  }

  addJob(job) {
    let executor = {
      then: async (resolve, reject) => {
        try {
          let result = await job();
          resolve(result);
        } catch (error) {
          reject(error);
        }
      },
      catch: () => {

      }
    };

    this.queue.push({ job:job, executor:executor });
    return executor;
  }

  cancelJob(job) {
    this.queue = this.queue.filter(item => item.job !== job);
  }

  async processAllJobs() {
    let numProcessed = 0;
    for (const item of this.queue) {
      try {
        await new Promise(item.executor.then);
        numProcessed++;
      } catch (error) {
      }
    }
    return numProcessed;
  }
}

function createJobQueue() {
  let queue = new JobQueue();
  return queue;
}

module.exports = { createJobQueue };
