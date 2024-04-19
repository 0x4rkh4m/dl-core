import {GradeLevel, JobLabel, JobType} from "./IJob";
import {JobManager} from "./JobManager";

const jobManager = new JobManager();

jobManager.addJob("unemployed", {
    label: JobLabel.Unemployed,
    type: JobType.Unemployed,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Freelancer, payment: 0},
    },
});

jobManager.addJob("bus", {
    label: JobLabel.Bus,
    type: JobType.Bus,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Driver, payment: 50},
    },
});

jobManager.addJob("judge", {
    label: JobLabel.Judge,
    type: JobType.Judge,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Judge, payment: 100},
    },
});

jobManager.addJob("lawyer", {
    label: JobLabel.Lawyer,
    type: JobType.Lawyer,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Lawyer, payment: 50},
    },
});

jobManager.addJob("reporter", {
    label: JobLabel.Reporter,
    type: JobType.Reporter,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Journalist, payment: 50},
    },
});

jobManager.addJob("trucker", {
    label: JobLabel.Trucker,
    type: JobType.Trucker,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Driver, payment: 50},
    },
});

jobManager.addJob("tow", {
    label: JobLabel.Tow,
    type: JobType.Tow,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Picker, payment: 50},
    },
});

jobManager.addJob("garbage", {
    label: JobLabel.Garbage,
    type: JobType.Garbage,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Collector, payment: 50},
    },
});

jobManager.addJob("vineyard", {
    label: JobLabel.Vineyard,
    type: JobType.Vineyard,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Picker, payment: 50},
    },
});

jobManager.addJob("hotdog", {
    label: JobLabel.Hotdog,
    type: JobType.Hotdog,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Sales, payment: 50},
    },
});

jobManager.addJob("police", {
    label: JobLabel.Police,
    type: JobType.Police,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Officer, payment: 50},
        "2": {name: GradeLevel.Sergeant, payment: 75},
        "3": {name: GradeLevel.Lieutenant, payment: 100},
        "4": {name: GradeLevel.Chief, payment: 125, isBoss: true},
    },
});

jobManager.addJob("ambulance", {
    label: JobLabel.Ambulance,
    type: JobType.Ambulance,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Paramedic, payment: 75},
        "2": {name: GradeLevel.Doctor, payment: 100},
        "3": {name: GradeLevel.Surgeon, payment: 125},
        "4": {name: GradeLevel.Chief, payment: 150, isBoss: true},
    },
});

jobManager.addJob("realestate", {
    label: JobLabel.RealEstate,
    type: JobType.RealEstate,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.HouseSales, payment: 75},
        "2": {name: GradeLevel.BusinessSales, payment: 100},
        "3": {name: GradeLevel.Broker, payment: 125},
        "4": {name: GradeLevel.Manager, payment: 150, isBoss: true},
    },
});

jobManager.addJob("taxi", {
    label: JobLabel.Taxi,
    type: JobType.Taxi,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Driver, payment: 75},
        "2": {name: GradeLevel.Associate, payment: 100},
        "3": {name: GradeLevel.Sales, payment: 125},
        "4": {name: GradeLevel.Manager, payment: 150, isBoss: true},
    },
});

jobManager.addJob("cardealer", {
    label: JobLabel.CarDealer,
    type: JobType.CarDealer,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.ShowroomSales, payment: 75},
        "2": {name: GradeLevel.BusinessSales, payment: 100},
        "3": {name: GradeLevel.Finance, payment: 100},
        "4": {name: GradeLevel.Manager, payment: 125, isBoss: true},
    },
});

jobManager.addJob("mechanic", {
    label: JobLabel.Mechanic,
    type: JobType.Mechanic,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Novice, payment: 75},
        "2": {name: GradeLevel.Experienced, payment: 100},
        "3": {name: GradeLevel.Advanced, payment: 125},
        "4": {name: GradeLevel.Manager, payment: 150, isBoss: true},
    },
});

jobManager.addJob("mechanic2", {
    label: JobLabel.Mechanic2,
    type: JobType.Mechanic2,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Novice, payment: 75},
        "2": {name: GradeLevel.Experienced, payment: 100},
        "3": {name: GradeLevel.Advanced, payment: 125},
        "4": {name: GradeLevel.Manager, payment: 150, isBoss: true},
    },
});

jobManager.addJob("mechanic3", {
    label: JobLabel.Mechanic3,
    type: JobType.Mechanic3,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Novice, payment: 75},
        "2": {name: GradeLevel.Experienced, payment: 100},
        "3": {name: GradeLevel.Advanced, payment: 125},
        "4": {name: GradeLevel.Manager, payment: 150, isBoss: true},
    },
});

jobManager.addJob("beeker", {
    label: JobLabel.Beeker,
    type: JobType.Beeker,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Novice, payment: 75},
        "2": {name: GradeLevel.Experienced, payment: 100},
        "3": {name: GradeLevel.Advanced, payment: 125},
        "4": {name: GradeLevel.Manager, payment: 150, isBoss: true},
    },
});

jobManager.addJob("bennys", {
    label: JobLabel.Bennys,
    type: JobType.Bennys,
    defaultDuty: true,
    offDutyPay: false,
    grades: {
        "0": {name: GradeLevel.Recruit, payment: 50},
        "1": {name: GradeLevel.Novice, payment: 75},
        "2": {name: GradeLevel.Experienced, payment: 100},
        "3": {name: GradeLevel.Advanced, payment: 125},
        "4": {name: GradeLevel.Manager, payment: 150, isBoss: true},
    },
});
