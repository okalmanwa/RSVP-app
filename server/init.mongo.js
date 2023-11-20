// const { Db } = require("mongodb");

use('app');
db.dropDatabase()
db.createCollection('events')
db.events.insertMany([
    {
        "id": 1,
        "name": "New Year's Day",
        "date": "2024-01-01",
        "description": "Celebration of the first day of the year.",
        "headCount":0,

      },
      {
        "id": 2,
        "name": "Good Friday",
        "date": "2024-03-29",
        "description": "Commemoration of the crucifixion of Jesus Christ.",
        "headCount":0,

      },
      {
        "id": 3,
        "name": "Easter Monday",
        "date": "2024-04-01",
        "description": "Marking the resurrection of Jesus Christ.",
        "headCount":0,

      },
      {
        "id": 4,
        "name": "Labour Day",
        "date": "2024-05-01",
        "description": "A day to honor workers and their contributions.",
        "headCount":0,

      },
      {
        "id": 5,
        "name": "Madaraka Day",
        "date": "2024-06-01",
        "description": "Commemoration of the day Kenya attained internal self-rule.",
        "headCount":0,

      },
      {
        "id": 6,
        "name": "Mashujaa Day",
        "date": "2024-10-20",
        "description": "Honoring all those who contributed towards the struggle for Kenya's independence.",
        "headCount":0,

      },
      {
        "id": 7,
        "name": "Jamhuri Day",
        "date": "2024-12-12",
        "description": "Celebration of Kenya becoming a republic in 1964.",
        "headCount":0,

      },
      {
        "id": 8,
        "name": "Christmas Day",
        "date": "2024-12-25",
        "description": "Celebration of the birth of Jesus Christ.",
        "headCount":0,

      },
      {
        "id": 9,
        "name": "Boxing Day",
        "date": "2024-12-26",
        "description": "A day to spend with family and friends and for charity.",
        "headCount":0,

      },
      {
        "id": 10,
        "name": "Huduma Day",
        "date": "2024-10-10",
        "description": "Observed as Huduma Day for community service.",
        "headCount":0,

      }

])
