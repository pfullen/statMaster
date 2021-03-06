# statMaster

-  An Angular app that makes API calls to Sportsradar.com

- UI Bootstrap

 
 # Features

 -

 -



  - Player profile json response   

    {
    "player": {
        "id": "6e1cac5c-b059-4b80-a267-5143b19efb27",
        "status": "A",
        "position": "OF",
        "primary_position": "LF",
        "first_name": "Steven",
        "last_name": "Pearce",
        "jersey_number": "28",
        "preferred_name": "Steve",
        "full_name": "Steve Pearce",
        "mlbam_id": "456665",
        "height": "71",
        "weight": "200",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "South Carolina",
        "high_school": "Lakeland, FL",
        "birthdate": "1983-04-13",
        "birthstate": "FL",
        "birthcountry": "USA",
        "birthcity": "Lakeland",
        "pro_debut": "2007-09-01",
        "updated": "2017-06-25T13:50:36+00:00",
        "team": {
            "name": "Blue Jays",
            "market": "Toronto",
            "abbr": "TOR",
            "id": "1d678440-b4b1-4954-9b39-70afb3ebbcfa"
        },
        "seasons": [{
            "id": "a0d35b04-59fb-465a-8dce-f2c0894e753c",
            "year": 2017,
            "type": "REG",
            "totals": {
                "statistics": {
                    "hitting": {
                        "overall": {
                            "ab": 255,
                            "lob": 105,
                            "rbi": 36,
                            "abhr": 21.25,
                            "abk": 4.554,
                            "bip": 190,
                            "babip": 0.3,
                            "bbk": 0.446,
                            "bbpa": 0.087,
                            "iso": 0.2,
                            "obp": 0.344,
                            "ops": 0.815,
                            "seca": 0.298,
                            "slg": 0.471,
                            "xbh": 26,
                            "pitch_count": 1117,
                            "lob_risp_2out": 18,
                            "team_lob": 45,
                            "ab_risp": 52,
                            "hit_risp": 14,
                            "rbi_2out": 18,
                            "linedrive": 55,
                            "groundball": 84,
                            "popup": 20,
                            "flyball": 43,
                            "ap": 288,
                            "avg": ".271",
                            "gofo": 1.03,
                            "onbase": {
                                "s": 43,
                                "d": 13,
                                "t": 1,
                                "hr": 12,
                                "tb": 120,
                                "bb": 24,
                                "ibb": 1,
                                "hbp": 5,
                                "fc": 8,
                                "roe": 4,
                                "h": 69,
                                "cycle": 0
                            },
                            "runs": {
                                "total": 33
                            },
                            "outcome": {
                                "klook": 159,
                                "kswing": 115,
                                "ktotal": 274,
                                "ball": 376,
                                "iball": 0,
                                "dirtball": 47,
                                "foul": 213
                            },
                            "outs": {
                                "po": 20,
                                "fo": 28,
                                "fidp": 0,
                                "lo": 22,
                                "lidp": 0,
                                "go": 72,
                                "gidp": 9,
                                "klook": 11,
                                "kswing": 45,
                                "ktotal": 56,
                                "sacfly": 3,
                                "sachit": 0
                            },
                            "steal": {
                                "caught": 0,
                                "stolen": 0,
                                "pickoff": 0,
                                "pct": 0.0
                            },
                            "games": {
                                "start": 64,
                                "play": 78,
                                "finish": 12,
                                "complete": 37
                            }
                        }
                    },
                    "fielding": {
                        "overall": {
                            "po": 143,
                            "a": 3,
                            "dp": 1,
                            "tp": 0,
                            "error": 2,
                            "tc": 148,
                            "fpct": 0.986,
                            "c_wp": 0,
                            "pb": 0,
                            "rf": 1.825,
                            "errors": {
                                "throwing": 0,
                                "fielding": 2,
                                "interference": 0,
                                "total": 2
                            },
                            "games": {
                                "start": 69,
                                "play": 80,
                                "finish": 9,
                                "complete": 6
                            }
                        }
                    }
                },
                "splits": {
                    "hitting": {
                        "overall": [{
                            "total": [{
                                "ab": 255,
                                "runs": 33,
                                "s": 43,
                                "d": 13,
                                "t": 1,
                                "hr": 12,
                                "rbi": 36,
                                "bb": 24,
                                "ibb": 1,
                                "hbp": 5,
                                "sb": 0,
                                "cs": 0,
                                "obp": 0.344,
                                "slg": 0.471,
                                "ops": 0.815,
                                "h": 69,
                                "ktotal": 56,
                                "avg": ".271"
                            }]

    
    - Team info response

     "market": "Minnesota",
    "abbr": "MIN",
    "id": "aa34e0ed-f342-4ec6-b774-c79b47b60e2d",
    "venue": {
        "name": "Target Field",
        "market": "Minnesota",
        "capacity": 39021,
        "surface": "grass",
        "address": "353 N 5th Street",
        "city": "Minneapolis",
        "state": "MN",
        "zip": "55403",
        "country": "USA",
        "id": "302f8dcd-eed6-4b83-8609-81548d51e955"
    },
    "league": {
        "alias": "AL",
        "name": "American League",
        "id": "2ea6efe7-2e21-4f29-80a2-0a24ad1f5f85"
    },
    "division": {
        "alias": "C",
        "name": "Central",
        "id": "255fadc6-367e-4238-8ece-d0cddabf7d72"
    },
    "staff": [{
        "full_name": "Neil Allen",
        "first_name": "Neil",
        "last_name": "Allen",
        "position": "Pitching Coach",
        "id": "7fd907d4-f1ff-4520-93ec-a50ce4f42698"
    }, {
        "full_name": "James Rowson",
        "first_name": "James",
        "last_name": "Rowson",
        "position": "Hitting Coach",
        "id": "9626d090-20b6-431e-ad10-1312b7cbe845"
    }, {
        "full_name": "Paul Molitor",
        "first_name": "Paul",
        "last_name": "Molitor",
        "position": "Manager",
        "id": "bad46cf2-acf6-405a-87c9-821973a6a004"
    }],
    "players": [{
        "id": "c3518fb7-6ddf-47e2-be89-53d88e4ea194",
        "status": "A",
        "position": "C",
        "primary_position": "C",
        "first_name": "Jason",
        "last_name": "Castro",
        "preferred_name": "Jason",
        "jersey_number": "21",
        "full_name": "Jason Castro",
        "mlbam_id": "488771",
        "height": "75",
        "weight": "215",
        "throw_hand": "R",
        "bat_hand": "L",
        "college": "Stanford",
        "high_school": "Castro Valley, CA",
        "birthdate": "1987-06-18",
        "birthstate": "CA",
        "birthcountry": "USA",
        "birthcity": "Castro Valley",
        "pro_debut": "2010-06-22",
        "updated": "2017-07-15T15:01:00+00:00",
        "active": true
    }, {
        "id": "a8efa694-2d64-4ad3-bf39-7d4f9006be7f",
        "status": "A",
        "position": "C",
        "primary_position": "C",
        "first_name": "Mitchell",
        "last_name": "Garver",
        "preferred_name": "Mitch",
        "jersey_number": "43",
        "full_name": "Mitch Garver",
        "mlbam_id": "641598",
        "height": "73",
        "weight": "220",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "New Mexico",
        "high_school": "La Cueva",
        "birthdate": "1991-01-15",
        "birthstate": "NM",
        "birthcountry": "USA",
        "birthcity": "Albuquerque",
        "updated": "2017-08-18T17:00:24+00:00",
        "active": true
    }, {
        "id": "879db845-963e-4169-ae9c-4cd80406a322",
        "status": "A",
        "position": "C",
        "primary_position": "C",
        "first_name": "Christopher",
        "last_name": "Gimenez",
        "preferred_name": "Chris",
        "jersey_number": "38",
        "full_name": "Chris Gimenez",
        "mlbam_id": "460269",
        "height": "74",
        "weight": "225",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Nevada - Reno",
        "high_school": "Gilroy, CA",
        "birthdate": "1982-12-27",
        "birthstate": "CA",
        "birthcountry": "USA",
        "birthcity": "Gilroy",
        "pro_debut": "2009-06-03",
        "updated": "2017-04-03T01:57:21+00:00",
        "active": true
    }, {
        "id": "962bf98a-22a3-4958-b296-f569bfd7407f",
        "status": "D10",
        "position": "DH",
        "primary_position": "DH",
        "first_name": "Robert",
        "last_name": "Grossman",
        "preferred_name": "Robbie",
        "jersey_number": "36",
        "full_name": "Robbie Grossman",
        "mlbam_id": "543257",
        "height": "72",
        "weight": "205",
        "throw_hand": "L",
        "bat_hand": "B",
        "high_school": "Cypress-Fairbanks, Cypress, TX",
        "birthdate": "1989-09-16",
        "birthstate": "CA",
        "birthcountry": "USA",
        "birthcity": "San Diego",
        "pro_debut": "2013-04-24",
        "updated": "2017-08-18T17:01:16+00:00",
        "active": false,
        "injuries": [{
            "id": "155c78e9-bb55-4cfd-9463-4a0a07bc4896",
            "comment": "Grossman is expected to miss at least three weeks as he recovers from a fractured thumb, according to Mike Berardino of the St. Paul Pioneer Press.",
            "desc": "Thumb",
            "status": "D10",
            "start_date": "2017-08-18",
            "update_date": "2017-08-18"
        }]
    }, {
        "id": "6f1e10da-dfab-4a07-b378-2bff321757fb",
        "status": "A",
        "position": "IF",
        "primary_position": "SS",
        "first_name": "Ehire",
        "last_name": "Adrianza",
        "preferred_name": "Ehire",
        "jersey_number": "16",
        "full_name": "Ehire Adrianza",
        "mlbam_id": "501303",
        "height": "73",
        "weight": "170",
        "throw_hand": "R",
        "bat_hand": "B",
        "birthdate": "1989-08-21",
        "birthcountry": "VEN",
        "birthcity": "Miranda",
        "pro_debut": "2013-09-08",
        "updated": "2017-07-04T14:01:12+00:00",
        "active": true
    }, {
        "id": "29a80d91-946d-4701-af7d-034850bdef00",
        "status": "A",
        "position": "IF",
        "primary_position": "2B",
        "first_name": "James",
        "last_name": "Dozier",
        "preferred_name": "Brian",
        "jersey_number": "2",
        "full_name": "Brian Dozier",
        "mlbam_id": "572821",
        "height": "71",
        "weight": "200",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Southern Mississippi",
        "high_school": "Itawamba Agricultural, Fulton, MS",
        "birthdate": "1987-05-15",
        "birthstate": "MS",
        "birthcountry": "USA",
        "birthcity": "Tupelo",
        "pro_debut": "2012-05-07",
        "updated": "2017-08-06T21:11:11+00:00",
        "active": true
    }, {
        "id": "178af28f-f5bb-49e1-9770-71d6e39edb63",
        "status": "A",
        "position": "IF",
        "primary_position": "SS",
        "first_name": "Eduardo",
        "last_name": "Escobar",
        "preferred_name": "Eduardo",
        "jersey_number": "5",
        "full_name": "Eduardo Escobar",
        "mlbam_id": "500871",
        "height": "70",
        "weight": "185",
        "throw_hand": "R",
        "bat_hand": "B",
        "birthdate": "1989-01-05",
        "birthcountry": "VEN",
        "birthcity": "Villa de Cura",
        "pro_debut": "2011-09-02",
        "updated": "2016-05-23T17:09:39+00:00",
        "active": true
    }, {
        "id": "31d992e8-1016-484a-b7c3-2b5851442cc5",
        "status": "A",
        "position": "IF",
        "primary_position": "1B",
        "first_name": "Joseph",
        "last_name": "Mauer",
        "preferred_name": "Joe",
        "jersey_number": "7",
        "full_name": "Joe Mauer",
        "mlbam_id": "408045",
        "height": "77",
        "weight": "225",
        "throw_hand": "R",
        "bat_hand": "L",
        "high_school": "Cretin-Derham Hall, St. Paul, MN",
        "birthdate": "1983-04-19",
        "birthstate": "MN",
        "birthcountry": "USA",
        "birthcity": "St. Paul",
        "pro_debut": "2004-04-05",
        "updated": "2017-07-15T20:35:28+00:00",
        "active": true
    }, {
        "id": "079a9121-7c29-4cec-96f7-70d61e6b7d51",
        "status": "A",
        "position": "IF",
        "primary_position": "SS",
        "first_name": "Jorge",
        "last_name": "Polanco",
        "preferred_name": "Jorge",
        "jersey_number": "11",
        "full_name": "Jorge Polanco",
        "mlbam_id": "593871",
        "height": "71",
        "weight": "200",
        "throw_hand": "R",
        "bat_hand": "B",
        "birthdate": "1993-07-05",
        "birthcountry": "DOM",
        "birthcity": "San Pedro de Macoris",
        "pro_debut": "2014-06-26",
        "updated": "2017-06-12T18:16:21+00:00",
        "active": true
    }, {
        "id": "aecc630f-57da-4b23-842b-fd65394e81be",
        "status": "D10",
        "position": "IF",
        "primary_position": "3B",
        "first_name": "Miguel",
        "last_name": "Sano",
        "preferred_name": "Miguel",
        "jersey_number": "22",
        "full_name": "Miguel Sano",
        "mlbam_id": "593934",
        "height": "76",
        "weight": "260",
        "throw_hand": "R",
        "bat_hand": "R",
        "birthdate": "1993-05-11",
        "birthcountry": "DOM",
        "birthcity": "San Pedro de Macoris",
        "pro_debut": "2015-07-02",
        "updated": "2017-08-20T23:09:23+00:00",
        "active": false,
        "injuries": [{
            "id": "1fe5afa7-f4a3-47b9-8271-8409f76395ba",
            "comment": "The Minnesota Twins placed INF Miguel Sano on the 10-day disabled list with a stress reaction in his left shin.",
            "desc": "Shin",
            "status": "D10",
            "start_date": "2017-08-19",
            "update_date": "2017-08-20"
        }]
    }, {
        "id": "2e59e930-4b59-4e09-a9ac-692b96bdc1c5",
        "status": "A",
        "position": "IF",
        "primary_position": "1B",
        "first_name": "Kennys",
        "last_name": "Vargas",
        "preferred_name": "Kennys",
        "jersey_number": "19",
        "full_name": "Kennys Vargas",
        "mlbam_id": "573627",
        "height": "77",
        "weight": "290",
        "throw_hand": "R",
        "bat_hand": "B",
        "high_school": "Luis Hernaiz Verone, Canovanas, PR",
        "birthdate": "1990-08-01",
        "birthcountry": "PRI",
        "birthcity": "Canovanas",
        "pro_debut": "2014-08-01",
        "updated": "2017-08-21T16:38:35+00:00",
        "active": true
    }, {
        "id": "ce6aa54a-7090-46f0-89eb-95618f3ec6ac",
        "status": "MIN",
        "position": "IF",
        "primary_position": "SS",
        "first_name": "Engelb",
        "last_name": "Vielma",
        "preferred_name": "Engelb",
        "jersey_number": "1",
        "full_name": "Engelb Vielma",
        "mlbam_id": "622713",
        "height": "71",
        "weight": "155",
        "throw_hand": "R",
        "bat_hand": "B",
        "birthdate": "1994-06-22",
        "birthcountry": "VEN",
        "birthcity": "Maracaibo",
        "updated": "2017-03-18T17:43:00+00:00",
        "active": false
    }, {
        "id": "f45963f1-0379-45da-9e2b-c6a099910a35",
        "status": "A",
        "position": "OF",
        "primary_position": "CF",
        "first_name": "Byron",
        "last_name": "Buxton",
        "preferred_name": "Byron",
        "jersey_number": "25",
        "full_name": "Byron Buxton",
        "mlbam_id": "621439",
        "height": "74",
        "weight": "190",
        "throw_hand": "R",
        "bat_hand": "R",
        "high_school": "Appling County, Baxley, GA",
        "birthdate": "1993-12-18",
        "birthstate": "GA",
        "birthcountry": "USA",
        "birthcity": "Baxley",
        "pro_debut": "2015-06-14",
        "updated": "2017-08-01T18:39:15+00:00",
        "active": true
    }, {
        "id": "afb7f63c-26e0-4f2e-afe7-0bf242a520f2",
        "status": "MIN",
        "position": "OF",
        "primary_position": "CF",
        "first_name": "Zachary",
        "last_name": "Granite",
        "preferred_name": "Zack",
        "jersey_number": "8",
        "full_name": "Zack Granite",
        "mlbam_id": "643335",
        "height": "73",
        "weight": "175",
        "throw_hand": "L",
        "bat_hand": "L",
        "college": "Seton Hall",
        "high_school": "Tottenville",
        "birthdate": "1992-09-17",
        "birthstate": "NY",
        "birthcountry": "USA",
        "birthcity": "Staten Island",
        "pro_debut": "2017-07-08",
        "updated": "2017-08-05T13:42:31+00:00",
        "active": false
    }, {
        "id": "a16f6afb-dbff-42ad-9621-52b769d2f224",
        "status": "A",
        "position": "OF",
        "primary_position": "RF",
        "first_name": "Maximilian",
        "last_name": "Kepler",
        "preferred_name": "Max",
        "jersey_number": "26",
        "full_name": "Max Kepler",
        "mlbam_id": "596146",
        "height": "76",
        "weight": "205",
        "throw_hand": "L",
        "bat_hand": "L",
        "high_school": "John F. Kennedy School, Berlin, DEU",
        "birthdate": "1993-02-10",
        "birthcountry": "DEU",
        "birthcity": "Berlin",
        "pro_debut": "2015-09-27",
        "updated": "2016-06-29T20:56:51+00:00",
        "active": true
    }, {
        "id": "a0ec0e01-bb80-484e-82a0-ae67c455cb04",
        "status": "MIN",
        "position": "OF",
        "primary_position": "RF",
        "first_name": "Daniel",
        "last_name": "Palka",
        "preferred_name": "Daniel",
        "jersey_number": "73",
        "full_name": "Daniel Palka",
        "mlbam_id": "594953",
        "height": "74",
        "weight": "220",
        "throw_hand": "L",
        "bat_hand": "L",
        "college": "Georgia Tech",
        "high_school": "Greer",
        "birthdate": "1991-10-28",
        "birthstate": "SC",
        "birthcountry": "USA",
        "birthcity": "Greenville",
        "updated": "2017-03-18T17:41:33+00:00",
        "active": false
    }, {
        "id": "4be357dd-add5-4613-937d-6b9a0831d9ee",
        "status": "A",
        "position": "OF",
        "primary_position": "LF",
        "first_name": "Eddie",
        "last_name": "Rosario",
        "preferred_name": "Eddie",
        "jersey_number": "20",
        "full_name": "Eddie Rosario",
        "mlbam_id": "592696",
        "height": "73",
        "weight": "180",
        "throw_hand": "R",
        "bat_hand": "L",
        "high_school": "Rafael Lopez Landron, Guayama, PR",
        "birthdate": "1991-09-28",
        "birthcountry": "PRI",
        "birthcity": "Guayama",
        "pro_debut": "2015-05-06",
        "updated": "2017-06-25T18:39:04+00:00",
        "active": true
    }, {
        "id": "894fea8a-5b90-487c-9a95-8ff25be48b30",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Matthew",
        "last_name": "Belisle",
        "preferred_name": "Matt",
        "jersey_number": "9",
        "full_name": "Matt Belisle",
        "mlbam_id": "279571",
        "height": "76",
        "weight": "225",
        "throw_hand": "R",
        "bat_hand": "R",
        "high_school": "McCallum, Austin, TX",
        "birthdate": "1980-06-06",
        "birthstate": "TX",
        "birthcountry": "USA",
        "birthcity": "Austin",
        "pro_debut": "2003-09-07",
        "updated": "2017-02-08T17:20:45+00:00",
        "active": true
    }, {
        "id": "56da7cb9-5975-46cd-8c63-96fce1245945",
        "status": "A",
        "position": "P",
        "primary_position": "SP",
        "first_name": "José",
        "last_name": "Berrios",
        "preferred_name": "José",
        "jersey_number": "17",
        "full_name": "José Berrios",
        "mlbam_id": "621244",
        "height": "72",
        "weight": "190",
        "throw_hand": "R",
        "bat_hand": "R",
        "high_school": "Papa Juan XXIII (PRI)",
        "birthdate": "1994-05-27",
        "birthcountry": "PRI",
        "birthcity": "Bayamon",
        "pro_debut": "2016-04-27",
        "updated": "2017-05-13T13:34:45+00:00",
        "active": true
    }, {
        "id": "2b7599ff-020b-4614-b8d3-d799ea1b4b36",
        "status": "MIN",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Jeffrey",
        "last_name": "Boshers",
        "preferred_name": "Buddy",
        "jersey_number": "62",
        "full_name": "Buddy Boshers",
        "mlbam_id": "542953",
        "height": "75",
        "weight": "205",
        "throw_hand": "L",
        "bat_hand": "L",
        "college": "Calhoun CC, AL",
        "high_school": "Lee, Huntsville, AL",
        "birthdate": "1988-05-09",
        "birthstate": "AL",
        "birthcountry": "USA",
        "birthcity": "Huntsville",
        "pro_debut": "2013-08-10",
        "updated": "2017-08-17T21:34:10+00:00",
        "active": false
    }, {
        "id": "bb814927-16c6-4a5a-8006-8aecfa9a02e3",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Alan",
        "last_name": "Busenitz",
        "preferred_name": "Alan",
        "jersey_number": "67",
        "full_name": "Alan Busenitz",
        "mlbam_id": "641427",
        "height": "73",
        "weight": "180",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Kennesaw State",
        "high_school": "Athens Christian",
        "birthdate": "1990-08-22",
        "birthstate": "GA",
        "birthcountry": "USA",
        "birthcity": "Watkinsville",
        "pro_debut": "2017-06-17",
        "updated": "2017-07-24T17:07:14+00:00",
        "active": true
    }, {
        "id": "27966a78-ad8b-4fde-80fb-3ccc8958dcc1",
        "status": "MIN",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Jon",
        "last_name": "Chargois",
        "preferred_name": "J.T.",
        "jersey_number": "60",
        "full_name": "J.T. Chargois",
        "mlbam_id": "608638",
        "height": "75",
        "weight": "200",
        "throw_hand": "R",
        "bat_hand": "B",
        "college": "Rice",
        "high_school": "Sulphur",
        "birthdate": "1990-12-03",
        "birthstate": "LA",
        "birthcountry": "USA",
        "birthcity": "Sulphur",
        "pro_debut": "2016-06-11",
        "updated": "2017-03-25T20:35:33+00:00",
        "active": false
    }, {
        "id": "1e4a62ff-7ae0-40b5-8f56-7c4a6d40a705",
        "status": "A",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Bartolo",
        "last_name": "Colón",
        "preferred_name": "Bartolo",
        "jersey_number": "40",
        "full_name": "Bartolo Colón",
        "mlbam_id": "112526",
        "height": "71",
        "weight": "285",
        "throw_hand": "R",
        "bat_hand": "R",
        "birthdate": "1973-05-24",
        "birthcountry": "DOM",
        "birthcity": "Altamira",
        "pro_debut": "1997-04-04",
        "updated": "2017-07-18T19:02:02+00:00",
        "active": true
    }, {
        "id": "97f72e12-2dab-4976-87bf-377f4b3be400",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "John",
        "last_name": "Curtiss",
        "preferred_name": "John",
        "full_name": "John Curtiss",
        "mlbam_id": "595928",
        "height": "76",
        "weight": "200",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Texas",
        "high_school": "Carroll",
        "birthdate": "1993-04-05",
        "birthstate": "TX",
        "birthcountry": "USA",
        "birthcity": "Dallas",
        "updated": "2017-08-23T14:25:48+00:00",
        "active": true
    }, {
        "id": "617bfd58-5d01-4956-9508-54e36be6d4e3",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Tyler",
        "last_name": "Duffey",
        "preferred_name": "Tyler",
        "jersey_number": "56",
        "full_name": "Tyler Duffey",
        "mlbam_id": "608648",
        "height": "75",
        "weight": "220",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Rice",
        "high_school": "Bellaire",
        "birthdate": "1990-12-27",
        "birthstate": "TX",
        "birthcountry": "USA",
        "birthcity": "Houston",
        "pro_debut": "2015-08-05",
        "updated": "2017-04-22T21:10:55+00:00",
        "active": true
    }, {
        "id": "e143561b-27e5-4824-80a2-8b6ed2eb47a7",
        "status": "D10",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Dietrich",
        "last_name": "Enns",
        "preferred_name": "Dietrich",
        "jersey_number": "47",
        "full_name": "Dietrich Enns",
        "mlbam_id": "608650",
        "height": "73",
        "weight": "210",
        "throw_hand": "L",
        "bat_hand": "L",
        "college": "Central Michigan",
        "high_school": "Lincoln-Way East",
        "birthdate": "1991-05-16",
        "birthstate": "IL",
        "birthcountry": "USA",
        "birthcity": "Frankfort",
        "pro_debut": "2017-08-10",
        "updated": "2017-08-17T15:06:20+00:00",
        "active": false,
        "injuries": [{
            "id": "3efbdb03-f42a-4acb-b906-1ca87a587660",
            "comment": "The Minnesota Twins placed LHP Dietrich Enns on the 10-day disabled list with a shoulder strain.",
            "desc": "Shoulder",
            "status": "D10",
            "start_date": "2017-08-17",
            "update_date": "2017-08-17"
        }]
    }, {
        "id": "c5b20b29-9b09-474f-863e-b96eb955f5c9",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Dillon",
        "last_name": "Gee",
        "preferred_name": "Dillon",
        "jersey_number": "35",
        "full_name": "Dillon Gee",
        "mlbam_id": "518716",
        "height": "73",
        "weight": "205",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Texas - Arlington",
        "high_school": "Cleburne, TX",
        "birthdate": "1986-04-28",
        "birthstate": "TX",
        "birthcountry": "USA",
        "birthcity": "Cleburne",
        "pro_debut": "2010-09-07",
        "updated": "2017-08-01T18:39:43+00:00",
        "active": true
    }, {
        "id": "7f930115-f071-4c18-a2ef-ad5cf6c49b54",
        "status": "A",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Kyle",
        "last_name": "Gibson",
        "preferred_name": "Kyle",
        "jersey_number": "44",
        "full_name": "Kyle Gibson",
        "mlbam_id": "502043",
        "height": "78",
        "weight": "215",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Missouri",
        "high_school": "Greenfield-Central, Greenfield, IN",
        "birthdate": "1987-10-23",
        "birthstate": "IN",
        "birthcountry": "USA",
        "birthcity": "Greenfield",
        "pro_debut": "2013-06-29",
        "updated": "2017-08-05T13:42:39+00:00",
        "active": true
    }, {
        "id": "293e6f4b-fdd7-4f45-a9ec-b865c3e09ea7",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Trevor",
        "last_name": "Hildenberger",
        "preferred_name": "Trevor",
        "jersey_number": "39",
        "full_name": "Trevor Hildenberger",
        "mlbam_id": "657610",
        "height": "74",
        "weight": "211",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "California",
        "high_school": "Archbishop Mitty",
        "birthdate": "1990-12-15",
        "birthstate": "CA",
        "birthcountry": "USA",
        "birthcity": "San Jose",
        "pro_debut": "2017-06-23",
        "updated": "2017-06-30T15:04:20+00:00",
        "active": true
    }, {
        "id": "552a62a3-8c67-4a32-b5b1-04646c797385",
        "status": "MIN",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Felix",
        "last_name": "Jorge",
        "preferred_name": "Felix",
        "jersey_number": "76",
        "full_name": "Felix Jorge",
        "mlbam_id": "602928",
        "height": "74",
        "weight": "170",
        "throw_hand": "R",
        "bat_hand": "R",
        "birthdate": "1994-01-02",
        "birthcountry": "DOM",
        "birthcity": "Santiago",
        "pro_debut": "2017-07-01",
        "updated": "2017-07-08T03:54:06+00:00",
        "active": false
    }, {
        "id": "414c9bbb-7880-4d54-9949-b4d6a6e4f98a",
        "status": "D10",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Adalberto",
        "last_name": "Mejia",
        "preferred_name": "Adalberto",
        "jersey_number": "49",
        "full_name": "Adalberto Mejia",
        "mlbam_id": "606167",
        "height": "75",
        "weight": "195",
        "throw_hand": "L",
        "bat_hand": "R",
        "birthdate": "1993-06-20",
        "birthcountry": "DOM",
        "birthcity": "Bonao",
        "pro_debut": "2016-08-20",
        "updated": "2017-08-09T13:00:39+00:00",
        "active": false,
        "injuries": [{
            "id": "9a47cabe-e3d8-4348-9a43-533ca460d671",
            "comment": "Mejia hopes to start throwing again on Friday (Aug. 18), according to Mike Berardino of the St. Paul Pioneer Press. He has not pitched since Aug. 8.",
            "desc": "Arm",
            "status": "D10",
            "start_date": "2017-08-09",
            "update_date": "2017-08-16"
        }]
    }, {
        "id": "c182d4ce-7604-47b4-8477-a6392ec357ec",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Glen",
        "last_name": "Perkins",
        "preferred_name": "Glen",
        "jersey_number": "15",
        "full_name": "Glen Perkins",
        "mlbam_id": "450282",
        "height": "72",
        "weight": "215",
        "throw_hand": "L",
        "bat_hand": "L",
        "college": "Minnesota",
        "high_school": "Stillwater Area, Stillwater, MN",
        "birthdate": "1983-03-02",
        "birthstate": "MN",
        "birthcountry": "USA",
        "birthcity": "St. Paul",
        "pro_debut": "2006-09-21",
        "updated": "2017-08-17T15:05:31+00:00",
        "active": true
    }, {
        "id": "51f6f215-403e-43c9-8647-c0fb8a36af47",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Thomas",
        "last_name": "Pressly",
        "preferred_name": "Ryan",
        "jersey_number": "57",
        "full_name": "Ryan Pressly",
        "mlbam_id": "519151",
        "height": "75",
        "weight": "210",
        "throw_hand": "R",
        "bat_hand": "R",
        "high_school": "Marcus, Flower Mound, TX",
        "birthdate": "1988-12-15",
        "birthstate": "TX",
        "birthcountry": "USA",
        "birthcity": "Dallas",
        "pro_debut": "2013-04-04",
        "updated": "2017-07-01T17:38:14+00:00",
        "active": true
    }, {
        "id": "cf42953d-893f-4191-aab5-c1a94636efc8",
        "status": "A",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Taylor",
        "last_name": "Rogers",
        "preferred_name": "Taylor",
        "jersey_number": "55",
        "full_name": "Taylor Rogers",
        "mlbam_id": "573124",
        "height": "75",
        "weight": "180",
        "throw_hand": "L",
        "bat_hand": "L",
        "college": "Kentucky",
        "high_school": "Chatfield",
        "birthdate": "1990-12-17",
        "birthstate": "CO",
        "birthcountry": "USA",
        "birthcity": "Littleton",
        "pro_debut": "2016-04-14",
        "updated": "2016-05-17T16:17:43+00:00",
        "active": true
    }, {
        "id": "e971302a-321b-4f8d-a0a5-abd51ecd32ef",
        "status": "MIN",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Fernando",
        "last_name": "Romero",
        "preferred_name": "Fernando",
        "jersey_number": "77",
        "full_name": "Fernando Romero",
        "mlbam_id": "622864",
        "height": "72",
        "weight": "215",
        "throw_hand": "R",
        "bat_hand": "R",
        "birthdate": "1994-12-24",
        "birthcountry": "DOM",
        "birthcity": "San Juan de la Maguana",
        "updated": "2017-03-13T22:22:09+00:00",
        "active": false
    }, {
        "id": "d12e4f3c-fe7f-4aa6-9958-a1b38f302124",
        "status": "MIN",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Randy",
        "last_name": "Rosario",
        "preferred_name": "Randy",
        "jersey_number": "64",
        "full_name": "Randy Rosario",
        "mlbam_id": "600968",
        "height": "73",
        "weight": "160",
        "throw_hand": "L",
        "bat_hand": "L",
        "birthdate": "1994-05-18",
        "birthcountry": "DOM",
        "birthcity": "Nagua",
        "pro_debut": "2017-06-02",
        "updated": "2017-06-11T15:42:02+00:00",
        "active": false
    }, {
        "id": "f6cac526-d361-4d8b-b74f-f035e0e15fd9",
        "status": "A",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Ervin",
        "last_name": "Santana",
        "preferred_name": "Ervin",
        "jersey_number": "54",
        "full_name": "Ervin Santana",
        "mlbam_id": "429722",
        "height": "74",
        "weight": "175",
        "throw_hand": "R",
        "bat_hand": "R",
        "high_school": "Colegio Cristiano El Alfarero, DR",
        "birthdate": "1982-12-12",
        "birthcountry": "DOM",
        "birthcity": "San Cristobal",
        "pro_debut": "2005-05-17",
        "updated": "2016-05-06T18:43:01+00:00",
        "active": true
    }, {
        "id": "3c0813bf-0d4b-4ec7-9ecb-4a3db0936de4",
        "status": "D10",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Héctor",
        "last_name": "Santiago",
        "preferred_name": "Héctor",
        "jersey_number": "53",
        "full_name": "Héctor Santiago",
        "mlbam_id": "502327",
        "height": "72",
        "weight": "215",
        "throw_hand": "L",
        "bat_hand": "R",
        "college": "Okaloosa-Walton CC, FL",
        "high_school": "Bloomfield Tech, Bloomfield, NJ",
        "birthdate": "1987-12-16",
        "birthstate": "NJ",
        "birthcountry": "USA",
        "birthcity": "Newark",
        "pro_debut": "2011-07-06",
        "updated": "2017-07-07T05:27:14+00:00",
        "active": false,
        "injuries": [{
            "id": "3bf8e2d3-e809-4f9c-bcd9-b5b3c2d09143",
            "comment": "An MRI on Santiago's neck showed inflammation, according to Mike Berardino of the St. Paul Pioneer Press. He's not expected to throw for at least 3-5 more days. At this point, there is no timetable from his return from the DL.",
            "desc": "Neck/Back",
            "status": "D10",
            "start_date": "2017-07-05",
            "update_date": "2017-08-16"
        }]
    }, {
        "id": "8ee501af-deb7-42b6-a0cb-ba5412bf4cb3",
        "status": "MIN",
        "position": "P",
        "primary_position": "SP",
        "first_name": "Aaron",
        "last_name": "Slegers",
        "preferred_name": "Aaron",
        "jersey_number": "50",
        "full_name": "Aaron Slegers",
        "mlbam_id": "642083",
        "height": "82",
        "weight": "245",
        "throw_hand": "R",
        "bat_hand": "R",
        "college": "Indiana",
        "high_school": "Notre Dame Prep",
        "birthdate": "1992-09-04",
        "birthstate": "AZ",
        "birthcountry": "USA",
        "birthcity": "Scottsdale",
        "updated": "2017-08-18T16:59:40+00:00",
        "active": false
    }, {
        "id": "7a787edb-53b1-48c2-9308-14e9d817bb02",
        "status": "MIN",
        "position": "P",
        "primary_position": "RP",
        "first_name": "Nikolas",
        "last_name": "Turley",
        "preferred_name": "Nik",
        "jersey_number": "66",
        "full_name": "Nik Turley",
        "mlbam_id": "543867",
        "height": "76",
        "weight": "195",
        "throw_hand": "L",
        "bat_hand": "L",
        "high_school": "Harvard-Westlake, Los Angeles, CA",
        "birthdate": "1989-09-11",
        "birthstate": "CA",
        "birthcountry": "USA",
        "birthcity": "La Canada",
        "pro_debut": "2017-06-11",
        "updated": "2017-08-22T21:33:58+00:00",
        "active": false
    }],
    "_comment": "Generation started @ 2017-08-23 15:46:26 UTC ended @ 2017-08-23 15:46:26 UTC"
}
GET  Venues mlb-t6/league/venues:format


                        