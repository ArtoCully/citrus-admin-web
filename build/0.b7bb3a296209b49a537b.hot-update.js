require("source-map-support").install();
exports.id = 0;
exports.modules = {

/***/ "./server/data/deviceTypes.json":
/***/ (function(module, exports) {

module.exports = [
	{
		"id": "t1500915562392",
		"name": "Samsung Audio",
		"httpApi": "localhost:3000/sams",
		"controls": [
			{
				"type": "button",
				"name": "Power"
			},
			{
				"type": "slider",
				"name": "Volume"
			},
			{
				"type": "select",
				"name": "Playlist",
				"options": [
					"AC/DC - thunderstruck",
					"Metallica - Nothing else matters"
				]
			}
		]
	},
	{
		"id": "t1500915648390",
		"name": "Sony Audio",
		"httpApi": "localhost:3000/sony",
		"controls": [
			{
				"name": "Power",
				"options": [],
				"type": "button"
			},
			{
				"name": "Volume",
				"options": [],
				"type": "slider"
			},
			{
				"name": "PlayList",
				"options": [
					"Song 1",
					"Song 2"
				],
				"type": "select"
			}
		]
	},
	{
		"id": "t1500915797355",
		"name": "Apple TV",
		"httpApi": "localhost:3000/appl",
		"controls": [
			{
				"name": "Power",
				"options": [],
				"type": "button"
			},
			{
				"name": "Brightness",
				"options": [],
				"type": "slider"
			},
			{
				"name": "Volume",
				"options": [],
				"type": "slider"
			}
		]
	},
	{
		"id": "t1500916806577",
		"name": "Citrus Lights",
		"httpApi": "http://automation-prototype.herokuapp.com/citrus-light/power",
		"controls": [
			{
				"name": "On/Off",
				"options": [],
				"type": "button"
			}
		]
	}
];

/***/ })

};
//# sourceMappingURL=0.b7bb3a296209b49a537b.hot-update.js.map