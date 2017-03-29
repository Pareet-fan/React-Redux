var Router = {
	MENUDATA: [
		{
			"name": "board",
			"level": 1,
			"route": "board",
			"child": false
		},
		{
			"name": "negative",
			"level": 1,
			"route": 'negative',
			"child": [
				{
					"name": "monitor",
					"level": 2,
					"route": "negative/monitor",
					"child": false
				},
				{
					"name": "distribution",
					"level": 2,
					"route": "negative/distribution",
					"child": [
                        {
                            "name": "hahaha",
					        "level": 3,
					        "route": "negative/distribution/hahaha",
                        }
                    ]
				},
				{
					"name": "trend",
					"level": 2,
					"route": "negative/trend",
					"child": false
				},
				{
					"name": "rank",
					"level": 2,
					"route": "negative/rank",
					"child": false
				},
				{
					"name": "list",
					"level": 2,
					"route": "negative/list",
					"child": false
				},
				{
					"name": "history",
					"level": 2,
					"route": "negative/history",
					"child": false
				}
			]
		},
		{
			"name": "hotspot",
			"level": 1,
			"route": 'hotspot',
			"child": [
				{
					"name": "cab",
					"level": 2,
					"route": "hotspot/cab",
					"child": false
				},
				{
					"name": "distribution",
					"level": 2,
					"route": "hotspot/distribution",
					"child": false
				},
				{
					"name": "monitor",
					"level": 2,
					"route": "hotspot/monitor",
					"child": false
				}
			]
		},
		{
			"name": "special",
			"level": 1,
			"route": 'special',
			"child": [
				{
					"name": "foo",
					"level": 2,
					"route": "special/foo",
					"child": false
				}
			]
		},
		{
			"name": "digging",
			"level": 1,
			"route": 'digging',
			"child": [
				{
					"name": "bar",
					"level": 2,
					"route": "digging/bar",
					"child": false
				}
			]
		}
	]
};

export default Router;