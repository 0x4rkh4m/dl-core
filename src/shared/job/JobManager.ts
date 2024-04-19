import { IJob } from "./IJob";
import { Job } from "./Job";

export class JobManager {
  private readonly _jobs: Record<string, Job>;

  constructor() {
    this._jobs = {};
  }

  addJob(id: string, job: IJob) {
    if (!id || !job) {
      throw new Error("Invalid job data");
    }
    this._jobs[id] = new Job(job);
  }

  getJob(id: string): Job | undefined {
    if (!id) {
      throw new Error("Invalid job id");
    }
    return this._jobs[id];
  }
}
