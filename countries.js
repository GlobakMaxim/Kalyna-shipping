const countries = [
	{
		"air": {
			"aveDeliveryTime": "7-14 days",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Austria",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-14 days",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Belgium",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "10-21 days",
			"fee": 30,
			"maxWeight": 99,
			"minWeight": 3,
			"price": 6.70,
			"sideLimit": 130
		},
		"name": "Bulgaria",
		"overwaight": true,
		"packageDimension": 540,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-8 weeks",
			"fee": 20,
			"maxWeight": 99,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 40,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Croatia (Hrvatska)",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 40,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 15,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Czech Republic",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 15,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 2.80,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Denmark",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Estonia",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 40,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.90,
			"sideLimit": 130
		},
		"name": "Finland",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 40,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.65,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.85,
			"sideLimit": 130
		},
		"name": "France",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.10,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 15,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Germany",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 15,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.30,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 45,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 8.10,
			"sideLimit": 130
		},
		"name": "Greece",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 55,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 6.35,
			"sideLimit": 130
		},
		"name": "Hungary",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "8-15 days",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.35,
			"sideLimit": 130
		},
		"name": "Ireland",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 35,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Italy",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Latvia",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "6-12 days",
			"fee": 25,
			"maxWeight": 99,
			"minWeight": 3,
			"price": 7.35,
			"sideLimit": 130
		},
		"name": "Lithuania",
		"overwaight": true,
		"packageDimension": 540,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 25,
			"maxWeight": 99,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.90,
			"sideLimit": 130
		},
		"name": "Luxembourg",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "9-15 days",
			"fee": 20,
			"maxWeight": 35,
			"minWeight": 3,
			"price": 8.10,
			"sideLimit": 130
		},
		"name": "Moldova",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "5-9 weeks",
			"fee": 20,
			"maxWeight": 45,
			"minWeight": 6,
			"price": 4.00,
			"sideLimit": 145
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.90,
			"sideLimit": 130
		},
		"name": "Netherlands",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "14-25 days",
			"fee": 40,
			"maxWeight": 20,
			"minWeight": 3,
			"price": 8.10,
			"sideLimit": 130
		},
		"name": "Norway",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "5-9 weeks",
			"fee": 40,
			"maxWeight": 20,
			"minWeight": 6,
			"price": 4.35,
			"sideLimit": 145
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 13,
			"maxWeight": 50,
			"minWeight": 1,
			"price": 6.20,
			"sideLimit": 130
		},
		"name": "Poland",
		"overwaight": true,
		"packageDimension": 420,
		"priority": 80,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 13,
			"maxWeight": 50,
			"minWeight": 1,
			"price": 2.30,
			"sideLimit": 175
		}
	},
	{
		"air": {
			"aveDeliveryTime": "8-15 days",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.90,
			"sideLimit": 130
		},
		"name": "Portugal",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 10,
			"maxWeight": 99,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Romania",
		"overwaight": true,
		"packageDimension": 540,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 10,
			"maxWeight": 99,
			"minWeight": 6,
			"price": 3.80,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "14-28 days",
			"fee": 20,
			"maxWeight": 19.5,
			"minWeight": 3,
			"price": 9.35,
			"sideLimit": 120
		},
		"name": "Russia",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 100,
		"sea": {
			"aveDeliveryTime": "6-11 weeks",
			"fee": 20,
			"maxWeight": 19.5,
			"minWeight": 4,
			"price": 6.25,
			"sideLimit": 120
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 18,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.80,
			"sideLimit": 130
		},
		"name": "Slovakia",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 18,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 2.90,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.60,
			"sideLimit": 130
		},
		"name": "Slovenia",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.10,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "8-15 days",
			"fee": 20,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.90,
			"sideLimit": 130
		},
		"name": "Spain",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 30,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.10,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "7-15 days",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 3,
			"price": 7.90,
			"sideLimit": 130
		},
		"name": "Sweden",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 25,
			"maxWeight": 30,
			"minWeight": 6,
			"price": 3.20,
			"sideLimit": 150
		}
	},
	{
		"air": {
			"aveDeliveryTime": "14-25 days",
			"fee": 25,
			"maxWeight": 20,
			"minWeight": 3,
			"price": 7.90,
			"sideLimit": 130
		},
		"name": "Switzerland",
		"overwaight": false,
		"packageDimension": 290,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "5-9 weeks",
			"fee": 30,
			"maxWeight": 20,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 145
		}
	},
	{
		"air": {
			"aveDeliveryTime": "8-14 days",
			"fee": 15,
			"maxWeight": 50,
			"minWeight": 1,
			"price": 7.90,
			"sideLimit": 120
		},
		"name": "Ukraine",
		"overwaight": true,
		"packageDimension": 290,
		"priority": 90,
		"sea": {
			"aveDeliveryTime": "4-7 weeks",
			"fee": 15,
			"maxWeight": 50,
			"minWeight": 4,
			"price": 3.90,
			"sideLimit": 120
		}
	},
	{
		"air": {
			"aveDeliveryTime": "14-25 days",
			"fee": 45,
			"maxWeight": 19,
			"minWeight": 3,
			"price": 6.90,
			"sideLimit": 95
		},
		"name": "United Kingdom",
		"overwaight": false,
		"packageDimension": 180,
		"priority": 0,
		"sea": {
			"aveDeliveryTime": "5-9 weeks",
			"fee": 60,
			"maxWeight": 19,
			"minWeight": 6,
			"price": 3.35,
			"sideLimit": 95
		}
	}
];