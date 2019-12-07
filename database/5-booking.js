db = db.getSiblingDB("shootizy");

const NORMAL_SCHEDULE = [
  {
    startTime: "09:00",
    endTime: "10:00",
  },
  {
    startTime: "10:00",
    endTime: "11:00",
  },
  {
    startTime: "11:00",
    endTime: "12:00",
  },
  {
    startTime: "14:00",
    endTime: "15:00",
  },
  {
    startTime: "15:00",
    endTime: "16:00",
  },
  {
    startTime: "16:00",
    endTime: "17:00",
  },
  {
    startTime: "17:00",
    endTime: "18:00",
  },
];

db.workingSchedules.insert([
  {
    // Sunday
    day: 0,
    timetable: NORMAL_SCHEDULE,
  },
  {
    // Monday
    day: 1,
    timetable: NORMAL_SCHEDULE,
  },
  {
    // Tuesday
    day: 2,
    timetable: NORMAL_SCHEDULE,
  },
  {
    // Wednesday
    day: 3,
    timetable: NORMAL_SCHEDULE,
  },
  {
    // Thursday
    day: 4,
    timetable: NORMAL_SCHEDULE,
  },
  {
    // Friday
    day: 5,
    timetable: NORMAL_SCHEDULE,
  },
  {
    // Saturday
    day: 6,
    timetable: [
      {
        startTime: "09:30",
        endTime: "10:30",
      },
      {
        startTime: "10:30",
        endTime: "11:30",
      },
      {
        startTime: "11:30",
        endTime: "12:30",
      },
    ],
  },
]);

// Create index for fast search
db.workingSchedules.createIndex({ day: 1 }, { unique: true });
