const beasts = [
		{
			"name": "Ape",
			"source": "XMM",
			"page": 348,
			"srd52": true,
			"basicRules2024": true,
			"otherSources": [
				{
					"source": "XPHB",
					"page": 346
				}
			],
			"size": [
				"M"
			],
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 19,
				"formula": "3d8 + 6"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 16,
			"dex": 14,
			"con": 14,
			"int": 6,
			"wis": 12,
			"cha": 7,
			"skill": {
				"athletics": "+5",
				"perception": "+3"
			},
			"passive": 13,
			"cr": "1/2",
			"action": [
				{
					"name": "Multiattack",
					"entries": [
						"The ape makes two Fist attacks."
					]
				},
				{
					"name": "Fist",
					"entries": [
						"{@atkr m} {@hit 5}, reach 5 ft. {@h}5 ({@damage 1d4 + 3}) Bludgeoning damage."
					]
				},
				{
					"name": "Rock {@recharge}",
					"entries": [
						"{@atkr r} {@hit 5}, range 25/50 ft. {@h}10 ({@damage 2d6 + 3}) Bludgeoning damage."
					]
				}
			],
			"environment": [
				"forest"
			],
			"soundClip": {
				"type": "internal",
				"path": "bestiary/ape.mp3"
			},
			"actionTags": [
				"Multiattack"
			],
			"damageTags": [
				"B"
			],
			"miscTags": [
				"MA",
				"RA"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
        		{
			"name": "Baboon",
			"source": "XMM",
			"page": 349,
			"srd52": true,
			"basicRules2024": true,
			"size": [
				"S"
			],
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 3,
				"formula": "1d6"
			},
			"speed": {
				"walk": 30,
				"climb": 30
			},
			"str": 8,
			"dex": 14,
			"con": 11,
			"int": 4,
			"wis": 12,
			"cha": 6,
			"passive": 11,
			"cr": "0",
			"trait": [
				{
					"name": "Pack Tactics",
					"entries": [
						"The baboon has {@variantrule Advantage|XPHB} on an attack roll against a creature if at least one of the baboon's allies is within 5 feet of the creature and the ally doesn't have the {@condition Incapacitated|XPHB} condition."
					]
				}
			],
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atkr m} {@hit 1}, reach 5 ft. {@h}1 ({@damage 1d4 - 1}) Piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"hill"
			],
			"familiar": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/baboon.mp3"
			},
			"traitTags": [
				"Pack Tactics"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MA"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
		{
			"name": "Badger",
			"source": "XMM",
			"page": 349,
			"srd52": true,
			"basicRules2024": true,
			"otherSources": [
				{
					"source": "XPHB",
					"page": 346
				}
			],
			"size": [
				"T"
			],
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				11
			],
			"hp": {
				"average": 5,
				"formula": "1d4 + 3"
			},
			"speed": {
				"walk": 20,
				"burrow": 5
			},
			"str": 10,
			"dex": 11,
			"con": 16,
			"int": 2,
			"wis": 12,
			"cha": 5,
			"skill": {
				"perception": "+3"
			},
			"senses": [
				"darkvision 30 ft."
			],
			"passive": 13,
			"resist": [
				"poison"
			],
			"cr": "0",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atkr m} {@hit 2}, reach 5 ft. {@h}1 Piercing damage."
					]
				}
			],
			"environment": [
				"forest"
			],
			"familiar": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/badger.mp3"
			},
			"senseTags": [
				"D"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MA"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		},
        	{
			"name": "Bat",
			"source": "XMM",
			"page": 349,
			"srd52": true,
			"basicRules2024": true,
			"otherSources": [
				{
					"source": "XPHB",
					"page": 346
				}
			],
			"size": [
				"T"
			],
			"type": "beast",
			"alignment": [
				"U"
			],
			"ac": [
				12
			],
			"hp": {
				"average": 1,
				"formula": "1d4 - 1"
			},
			"speed": {
				"walk": 5,
				"fly": 30
			},
			"str": 2,
			"dex": 15,
			"con": 8,
			"int": 2,
			"wis": 12,
			"cha": 4,
			"senses": [
				"blindsight 60 ft."
			],
			"passive": 11,
			"cr": "0",
			"action": [
				{
					"name": "Bite",
					"entries": [
						"{@atkr m} {@hit 4} to hit, reach 5 ft. {@h}1 Piercing damage."
					]
				}
			],
			"environment": [
				"forest",
				"mountain",
				"underdark",
				"urban"
			],
			"familiar": true,
			"soundClip": {
				"type": "internal",
				"path": "bestiary/bat.mp3"
			},
			"senseTags": [
				"B"
			],
			"damageTags": [
				"P"
			],
			"miscTags": [
				"MA"
			],
			"hasToken": true,
			"hasFluff": true,
			"hasFluffImages": true
		}
    
]