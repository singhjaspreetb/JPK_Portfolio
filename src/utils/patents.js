const patentsData = [
  {
    "inventors": "Jitendra P. Khatait, Nilanjan Sen, Zafar Anwar, Aaditya C. Iyer, V. Venkateswara Rao, & Sudipto Mukherjee",
    "title": "Rotor Construction for High-Speed Permanent Magnet Rotary Machines",
    "applicationNo": "India Patent Application No. 202111044718",
    "filedDate": "Filed on October 01, 2021",
    "affiliations": "DRDO & IIT Delhi",
    "description": "Latest"
  },
  {
    "inventors": "Jitendra P. Khatait, Rajesh Kumar, Harsh Yadav, & Varan Gupta",
    "title": "Gripper to grasp object by Internal Surface Interaction",
    "applicationNo": "India Patent Application No. 202111038285",
    "filedDate": "Filed on August 24, 2021",
    "description": "Latest"
  },
  {
    "inventors": "Nilanjan Sen, Jitendra P. Khatait, Aaditya C. Iyer, V. Venkateswara Rao, & Sudipto Mukherjee",
    "title": "A Flywheel Assembly With Flexure Elements",
    "applicationNo": "India Patent Application No. 202111038027",
    "filedDate": "Filed on August 23, 2021",
    "affiliations": "DRDO & IIT Delhi",
    "description": "Latest"
  },
  {
    "inventors": "Jitendra P. Khatait, Rajesh Kumar, Varan Gupta, & Shantanav Agarwal",
    "title": "A Platform for Manoeuverability of a Vehicle on Icy Terrain",
    "applicationNo": "India Patent Application No. 202011053883",
    "filedDate": "Filed on December 11, 2020"
  },
  {
    "inventors": "Jitendra P. Khatait, Harsh Yadav, & Rajesh Kumar",
    "title": "Reconfigurable Diameter Wheel",
    "applicationNo": "India Patent Application No. 202011052729",
    "filedDate": "Filed on December 03, 2020"
  },
  {
    "inventors": "Jitendra P. Khatait, & Amanpreet Singh",
    "title": "Remote Centre-of-motion (RCM) Adjusting System and Method of Adjustment thereof for Medical/Surgical Devices",
    "applicationNo": "India Patent Application No. 202011039727",
    "filedDate": "Filed on Sep 14, 2020"
  },
  {
    "inventors": "Jitendra P. Khatait, & Amanpreet Singh",
    "title": "Tension Adjustment Mechanism for Tendon Driven Mechanisms",
    "applicationNo": "India Patent Application No. 202011036132",
    "filedDate": "Filed on August 21, 2020"
  },
  {
    "inventors": "Jitendra P. Khatait, Harsh Yadav, & Rajesh Kumar",
    "title": "Variable Radius Wheel based on Compliant Mechanism",
    "applicationNo": "India Patent Application No. 202011031897",
    "filedDate": "Filed on July 25, 2020"
  },
  {
    "inventors": "Jitendra P. Khatait, Sridhar P., & Supreet S. Bahga",
    "title": "Precision Nano-Imprinting Machine",
    "applicationNo": "India Patent Application No. 202011013189",
    "filedDate": "Filed on March 26, 2020"
  }
];
const patentsGranted = [
  {
    "inventors": "Khatait, J.P., & Gupta, S.",
    "title": "Robotic apparatus/manipulator with two degrees of freedom (RCM point) for carrying out invasive surgery, actuated using capstan drivers.",
    "patentNumber": "India Patent No. 405359",
    "date": "31 August 2022",
    "pdfLink": {
      "linkText": "PDF",
      "target": "_blank",
      "url": "docs/IN405359.pdf"
    },
    "latestLink": {
      "linkText": "Latest",
      "target": "_blank",
      "url": "[Latest]"
    }
  },
  {
    "inventors": "Mukherjee, S., Khatait, J.P., & Sen, N.",
    "title": "A Solar Tracking System.",
    "patentNumber": "U.S. Patent No. 11,114,975",
    "date": "7 Sep. 2021",
    "pdfLink": {
      "linkText": "US11114975B2",
      "target": "_blank",
      "url": "https://patents.google.com/patent/US11114975B2/en"
    },
    "latestLink": {
      "linkText": "PDF",
      "target": "_blank",
      "url": "docs/US11114975.pdf"
    }
  }
];
const patentsApplied = [
  {
    "inventors": "Jitendra P. Khatait, Nilanjan Sen, Zafar Anwar, Aaditya C. Iyer, V. Venkateswara Rao, & Sudipto Mukherjee",
    "title": "Rotor Construction for High-Speed Permanent Magnet Rotary Machines.",
    "applicationNumber": "India Patent Application No. 202111044718",
    "filedDate": "Filed on October 01, 2021",
    "applicants": "DRDO & IIT Delhi",
    "latestLink": {
      "linkText": "Latest",
      "target": "_blank",
      "url": "[Latest]"
    }
  },
  {
    "inventors": "Jitendra P. Khatait, Rajesh Kumar, Harsh Yadav, & Varan Gupta",
    "title": "Gripper to grasp object by Internal Surface Interaction.",
    "applicationNumber": "India Patent Application No. 202111038285",
    "filedDate": "Filed on August 24, 2021",
    "latestLink": {
      "linkText": "Latest",
      "target": "_blank",
      "url": "[Latest]"
    }
  },
  {
    "inventors": "Nilanjan Sen, Jitendra P. Khatait, Aaditya C. Iyer, V. Venkateswara Rao, & Sudipto Mukherjee",
    "title": "A Flywheel Assembly With Flexure Elements.",
    "applicationNumber": "India Patent Application No. 202111038027",
    "filedDate": "Filed on August 23, 2021",
    "applicants": "DRDO & IIT Delhi",
    "latestLink": {
      "linkText": "Latest",
      "target": "_blank",
      "url": "[Latest]"
    }
  },
  {
    "inventors": "Jitendra P. Khatait, Aditya K. Chaurasiya, & Rithul P.",
    "title": "High Speed Flywheel-Shaft Mounting Using Flexure.",
    "applicationNumber": "India Patent Application No. Ref. FT/IDF/05/2020/86",
    "filedDate": "Filed on May, 2020"
  },
  {
    "inventors": "Mukherjee, S., Jitendra P. Khatait, & Dharanivendhan T.",
    "title": "Fully elastic mechanism for 2 axis solar tracking.",
    "applicationNumber": "India Patent Application No. Ref. IDF/06/2018/68",
    "filedDate": "Filed on June, 2018"
  },
  {
    "inventors": "Supreet Singh Bahga, Vivek Bhagwatrao Bandal, & Jitendra P. Khatait",
    "title": "Actively Heated/Cooled Footwear Based on Phase Change Material.",
    "applicationNumber": "India Patent Application No. Ref. IDF/07/2018/88",
    "filedDate": "Filed on July, 2018"
  },
  {
    "inventors": "Jitendra P. Khatait, & Amanpreet Singh",
    "title": "Remote Centre-of-motion (RCM) Adjusting System and Method of Adjustment thereof for Medical/Surgical Devices.",
    "applicationNumber": "India Patent Application No. 202011039727",
    "filedDate": "Filed on Sep 14, 2020"
  },
  {
    "inventors": "Jitendra P. Khatait, Rajesh Kumar, Varan Gupta, & Shantanav Agarwal",
    "title": "A Platform for Manoeuverability of a Vehicle on Icy Terrain.",
    "applicationNumber": "India Patent Application No. 202011053883",
    "filedDate": "Filed on December 11, 2020",
    "publishedDate": "Published on June 17, 2022"
  },
  {
    "inventors": "Jitendra P. Khatait, Harsh Yadav, & Rajesh Kumar",
    "title": "Reconfigurable Diameter Wheel.",
    "applicationNumber": "India Patent Application No. 202011052729",
    "filedDate": "Filed on December 03, 2020",
    "publishedDate": "Published on June 10, 2022"
  },
  {
    "inventors": "Jitendra P. Khatait, & Amanpreet Singh",
    "title": "Tension Adjustment Mechanism for Tendon Driven Mechanisms.",
    "applicationNumber": "India Patent Application No. 202011036132",
    "filedDate": "Filed on August 21, 2020",
    "publishedDate": "Published on Sep 23, 2022"
  },
  {
    "inventors": "Jitendra P. Khatait, Harsh Yadav, & Rajesh Kumar",
    "title": "A Variable Diameter Wheel.",
    "applicationNumber": "India Patent Application No. 202011031897",
    "filedDate": "Filed on July 25, 2020",
    "publishedDate": "Published on Jan 28, 2022"
  },
  {
    "inventors": "Jitendra P. Khatait, Sridhar P., & Supreet S. Bahga",
    "title": "Precision Nano-Imprinting Machine.",
    "applicationNumber": "India Patent Application No. 202011013189",
    "filedDate": "Filed on March 26, 2020",
    "publishedDate": "Published on Oct 01, 2021"
  },
  {
    "inventors": "Jitendra P. Khatait, Rajesh Kumar, Aditya Jain, & Varan Gupta",
    "title": "Actuation Platform.",
    "applicationNumber": "India Patent Application No. 201911024881",
    "filedDate": "Filed on June 22, 2019",
    "publishedDate": "Published on Dec 25, 2020"
  },
  {
    "inventors": "Jitendra P. Khatait, Rajesh Kumar, & Aditya Jain",
    "title": "Optimal Wrench Measuring Device.",
    "applicationNumber": "India Patent Application No. 201911003039",
    "filedDate": "Filed on January 24, 2019",
    "publishedDate": "Published on July 31, 2020",
    "journalNumber": "The Patent Office Journal No. 31/2020 Dated 31/07/2020 28812"
  },
  {
    "inventors": "Mukherjee, S., Khatait, J.P., & Anwar, Z.",
    "title": "Post-Curing Inflation of Tire. Part 2.",
    "applicationNumber": "India Patent Application No. 201811026743",
    "filedDate": "Filed on July 17, 2018",
    "publishedDate": "Published on Jan 24, 2020"
  },
  {
    "inventors": "Mukherjee, S., Khatait, J.P., & Anwar, Z.",
    "title": "Post-Curing Inflation of Tire. Part 1.",
    "applicationNumber": "India Patent Application No. 201811019188",
    "filedDate": "Filed on May 22, 2018",
    "publishedDate": "Published on Nov 29, 2019"
  },
  {
    "inventors": "Mukherjee, S., Khatait, J.P., & Sen, N.",
    "title": "A Solar Tracking System.",
    "applicationNumber": "India Patent Application No. 201811019035",
    "filedDate": "Filed on May 21, 2018",
    "publishedDate": "Published on November 22, 2019",
    "journalNumber": "The Patent Office Journal No. 47/2019 Dated 22/11/2019 55114",
    "internationalApplicationNumber": "PCT/IN2019/050273",
    "internationalFilingDate": "April 03, 2019",
    "publicationNumber": "WO/2019/224834",
    "publicationDate": "November 28, 2019",
    "sourceLink": {
      "linkText": "[US11114975B2]",
      "target": "_blank",
      "url": "https://patents.google.com/patent/US11114975B2/en"
    },
    "pdfLink": {
      "linkText": "[PDF]",
      "target": "_blank",
      "url": "docs/US11114975.pdf"
    }
  },
  {
    "inventors": "Khatait, J.P., & Gupta, S.",
    "title": "Robotic apparatus/manipulator with two degrees of freedom (RCM point) for carrying out invasive surgery, actuated using capstan drivers.",
    "applicationNumber": "India Patent Application No. 201711029199",
    "filedDate": "Filed on August 17, 2017",
    "publishedDate": "Published on July 19, 2019",
    "journalNumber": "The Patent Office Journal No. 29/2019 Dated 19/07/2019 30777",
    "sourceLink": {
      "linkText": "[405359, Granted]",
      "target": "_blank",
      "url": "docs/IN405359.pdf"
    },
    "latestLink": {
      "linkText": "[Latest]",
      "target": "_blank",
      "url": "[Latest]"
    }
  },
  {
    "inventors": "Khatait, J.P., & Gupta, V.",
    "title": "Flexure Based Passive Grippers.",
    "applicationNumber": "India Patent Application No. 201611020355",
    "filedDate": "Filed on June 14, 2016",
    "publishedDate": "Published on February 02, 2018",
    "journalNumber": "The Patent Office Journal No. 07/2018 Dated 16/02/2018 6105"
  }
];

export { patentsData, patentsGranted, patentsApplied };  