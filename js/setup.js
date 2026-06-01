// CHANGE the Variables below according to your needs:

//if your kindle does not display your correct time, change the timeoffset from 0 to the difference between your needs (either negatives or positives values are accepted)
var timeoffset = 0;

// your home floorplan file path. Ex: var floorplan1stFloor = "./images/floorplan.png"
var floorplan1stFloor = "./images/table.png"; // your floorplan image path for 1st floor
var floorplan2ndFloor = "./images/floorplan.png"; // your floorplan image path for 2nd floor

// below you need to add your DEVICES in the following format:
// ['domain.device_id', X position, Y position, 'type'],
//
// real example:
// ["binary_sensor.office_window", 620, 40, "window"],
//
// All lines should end with a comma "," EXCEPT FOR THE LAST ONE. IF you have only one item, then it does not have to end with a comma.
//
// Types will define the icons and can be specified for the following DOMAINS: SWITCH, BINARY_SENSOR, SENSOR, MEDIA_PLAYER and WEATHER
// 
// CURRENTLY SUPPORTED ICONS PER DOMAIN:
//
// SWITCH: washingmachine, microwave, smartplug, dishwasher, heater, fridge, waterfountain
// BINARY_SENSOR: window, door
// SENSOR: battery, temperature, humidity
// MEDIA_PLAYER: tv, alexa, googleassistant
// WEATHER: 5dayforecast or omitted/none
//
// If a type is not informed, then the standard Icon for the category will be used
//
// You do not need/have to specify a type for DOMAIN=LIGHT, so it can be omitted.
//
// Full example:
//var devices1stFloor = [
//  ["binary_sensor.janela_escritorio", 620, 40, "window"],
//  ["light.lamp_escr", 565, 80], // no type specified :)
//  ["media_player.echo_dot_1", 15, 15, "assistant"],
//  ["binary_sensor.janela_suite", 95, 0, "window"],
//];


// devices for 1st floor
var devices1stFloor = [
    //OFFICE
    ["sensor.office_temperature_rounded", 150, 40, "temperature"],
    ["sensor.office_humidity_rounded", 148, 120, "humidity"],
    ["light.crystal_cube",220,80],

    //LIVING ROOM
    ["sensor.living_room_temperature_rounded",150,235,"temperature"],
    ["sensor.living_room_humidity_rounded",148,315,"humidity"],
    ["light.living_room_lights", 220, 275],

    //OUTSIDE
    ["sensor.outside_temperature_rounded",150,430,"temperature"],
    ["sensor.outside_humidity_rounded",148,510,"humidity"]
];

// devices for the second floor
// leave empty if you only have 1 floor
// empty example: var devices2ndFloor = [];
var devices2ndFloor = [];
