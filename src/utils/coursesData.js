const coursesData = [
    {
      "semester": "2021-2022, Semester II",
      "courses": [
        {
          "courseCode": "MCL747",
          "courseName": "Design of Precision Machines",
          "courseDetails": "2-0-2",
          "courseSlot": "Slot B (09:30-11:00 Mon/Thu)"
        },
        {
          "courseCode": "MCP100",
          "courseName": "Engineering Visualisation & Communication",
          "courseDetails": "(0-0-4)",
          "courseSlot": "slot- P (Course coordinator)"
        }
      ]
    },
    {
      "semester": "2021-2022, Semester I",
      "courses": [
        {
          "courseCode": "MCL742",
          "courseName": "Design & Optimization",
          "courseDetails": "3-0-2",
          "courseSlot": "Slot E (10:00-11:00 Tue/Wed/Fri)"
        },
        {
          "courseCode": "MCP100",
          "courseName": "Engineering Visualisation & Communication",
          "courseDetails": "(0-0-4)",
          "courseSlot": "slot- P (Course coordinator)"
        }
      ]
    },
    {
      "semester": "2020-2021, Semester II",
      "courses": [
        {
          "courseCode": "MCL747",
          "courseName": "Design of Precision Machines",
          "courseDetails": "2-0-2",
          "courseSlot": "Slot B (09:30-11:00 Mon/Thu)"
        },
        {
          "courseCode": "MCP100",
          "courseName": "Engineering Visualisation & Communication",
          "courseDetails": "(0-0-4)",
          "courseSlot": "slot- P (with Prof. N.V. Datla)"
        }
      ]
    },
    {
      "semester": "2020-2021, Semester I",
      "courses": [
        {
          "courseCode": "MCP100",
          "courseName": "Engineering Visualisation & Communication",
          "courseDetails": "(0-0-4)",
          "courseSlot": "slot- P (with Prof. N.V. Datla)"
        }
      ]
    },
    {
      "semester": "2019-2020, Semester II",
      "courses": [
        {
          "courseCode": "MCL747",
          "courseName": "Design of Precision Machines",
          "courseDetails": "2-0-2",
          "courseSlot": "Slot F (11:00-12:00 Tue/Thu/Fri)"
        }
      ]
    },
    {
      "semester": "2019-2020, Semester I",
      "courses": [
        {
          "courseCode": "MCL742",
          "courseName": "Design & Optimization",
          "courseDetails": "3-0-2",
          "courseSlot": "Slot E (10:00-11:00 Tue/Wed/Fri)"
        },
        {
          "courseCode": "MCL211",
          "courseName": "Design of Machines",
          "courseDetails": "3-0-2",
          "courseSlot": "Slot C (8:00-9:00 Tue/Wed/Fri) (with Prof. A. Chawla)"
        }
      ]
    },
    {
      "semester": "2018-2019, Semester II",
      "courses": [
        {
          "courseCode": "MCL747",
          "courseName": "Design of Precision Machines",
          "courseDetails": "2-0-2",
          "courseSlot": "Slot F (11:00-12:00 Tue/Thu)"
        },
        {
          "courseCode": "MCL321",
          "courseName": "Automotive Systems",
          "courseDetails": "3-0-2",
          "courseSlot": "(with Prof. S. P. Singh)"
        }
      ]
    },
    {
      "semester": "2018-2019, Semester I",
      "courses": [
        {
          "courseCode": "MCL211",
          "courseName": "Design of Machines",
          "courseDetails": "3-0-2",
          "courseSlot": "Slot C (8:00-8:50 T/W/F)"
        }
      ]
    },
    {
      "semester": "2017-2018, Semester II",
      "courses": [
        {
          "courseCode": "MCL747",
          "courseName": "Design of Precision Machines",
          "courseDetails": "2-0-2",
          "courseSlot": "Slot J (12:00-12:50 M/T/F)"
        }
      ]
    },
    {
      "semester": "2017-2018, Semester I",
      "courses": [
        {
          "courseCode": "MCL211",
          "courseName": "Design of Machines",
          "courseDetails": "3-0-2",
          "courseSlot": "Slot C (8:00-8:50 T/W/F)"
        }
      ]
    },
    {
      "semester": "2016-2017, Semester II",
      "courses": [
        {
          "courseCode": "MCL747",
          "courseName": "Design of Precision Machines",
          "courseDetails": "2-0-2",
          "courseSlot": "Slot J (12:00-12:50 M/T/F)"
        }
      ]
    },
    {
      "semester": "2016-2017, Semester I",
      "courses": [
        {
          "courseCode": "MCL211",
          "courseName": "Design of Machines",
          "courseDetails": "3-0-2",
          "courseSlot": "Slot C (8:00-8:50 T/W/F)"
        }
      ]
    },
    {
      "semester": "2015-2016, Semester II",
      "courses": [
        {
          "courseCode": "MCL747",
          "courseName": "Design of Precision Machines",
          "courseDetails": "2-0-2"
        },
        {
          "courseCode": "MCL321",
          "courseName": "Automotive Systems",
          "courseDetails": "3-0-2"
        }
      ]
    },
    {
      "semester": "2015-2016, Semester I",
      "courses": [
        {
          "courseCode": "MEL837",
          "courseName": "Advance Mechanisms",
          "courseDetails": "3-0-2",
          "courseCoordinator": "Prof. S. Mukherjee"
        },
        {
          "courseCode": "MCL111",
          "courseName": "Kinematics and Dynamics of Machines",
          "courseDetails": "3-1-0",
          "courseCoordinator": "Prof. S. Mukherjee"
        }
      ]
    },
    {
      "semester": "2014-2015, Semester II",
      "courses": [
        {
          "courseCode": "MEL835",
          "courseName": "Special Topics in Design Analysis (Design of Precision Machines)",
          "courseDetails": "3-0-0"
        },
        {
          "courseCode": "MEL312",
          "courseName": "Control Theory and Applications",
          "courseDetails": "3-1-2",
          "courseCoordinator": "Prof. S. P. Singh"
        }
      ]
    },
    {
      "semester": "2014-2015, Semester I",
      "courses": [
        {
          "courseCode": "MEN110",
          "courseName": "Introduction to Mechanical Engineering",
          "courseDetails": "0-0-4",
          "courseSlot": "2 (Group 2)"
        },
        {
          "courseCode": "MEL211",
          "courseName": "Kinematics and Dynamics of Machines",
          "courseDetails": "3-0-2",
          "courseSlot": "4 (Tutorial with Prof. K. Gupta & Prof. S. Mukherjee)"
        },
        {
          "courseCode": "MEL734",
          "courseName": "Instrumentation and Automatic Control Systems",
          "courseDetails": "3-0-2",
          "courseCoordinator": "Prof. J.K. Dutt"
        }
      ]
    }  
];
 export {coursesData};