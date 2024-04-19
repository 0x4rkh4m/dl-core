import {IJob, JobType, JobGrade, JobLabel} from "./IJob";

export class Job implements IJob {
    label: JobLabel;
    type: JobType;
    grades: Record<string, JobGrade>;
    defaultDuty: boolean;
    offDutyPay: boolean;

    constructor(job: IJob) {
        this.label = job.label;
        this.type = job.type;
        this.grades = job.grades;
        this.defaultDuty = job.defaultDuty;
        this.offDutyPay = job.offDutyPay;
    }
}