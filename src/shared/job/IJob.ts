export enum JobType {
  Unemployed,
  Bus,
  Judge,
  Lawyer,
  Reporter,
  Trucker,
  Tow,
  Garbage,
  Vineyard,
  Hotdog,
  Police,
  Ambulance,
  RealEstate,
  Taxi,
  CarDealer,
  Mechanic,
  Mechanic2,
  Mechanic3,
  Beeker,
  Bennys,
}

export enum JobLabel {
  Unemployed = "Civilian",
  Bus = "Bus Driver",
  Judge = "Judge",
  Lawyer = "Lawyer",
  Reporter = "Reporter",
  Trucker = "Trucker",
  Tow = "Tow",
  Garbage = "Garbage",
  Vineyard = "Vineyard",
  Hotdog = "Hotdog",
  Police = "Police",
  Ambulance = "Ambulance",
  RealEstate = "Real Estate",
  Taxi = "Taxi",
  CarDealer = "Car Dealer",
  Mechanic = "Mechanic",
  Mechanic2 = "Mechanic 2",
  Mechanic3 = "Mechanic 3",
  Beeker = "Beeker",
  Bennys = "Benny's",
}

export enum GradeLevel {
  Freelancer,
  Recruit,
  Judge,
  Lawyer,
  Novice,
  Experienced,
  Advanced,
  Manager,
  Driver,
  Associate,
  Journalist,
  Collector,
  Picker,
  Sales,
  Officer,
  Sergeant,
  Lieutenant,
  Chief,
  Paramedic,
  Doctor,
  Surgeon,
  HouseSales,
  BusinessSales,
  Broker,
  ShowroomSales,
  Finance,
}

export type JobGrade = { name: GradeLevel; payment: number; isBoss?: boolean; };

export type Job = {
  label: JobLabel;
  type: JobType;
  grades: Record<string, JobGrade>;
  defaultDuty: boolean;
  offDutyPay: boolean;
};

export interface IJob extends Job {}
