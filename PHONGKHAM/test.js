const Graph = require('node-dijkstra');
const NAV_LOCATION_MODEL = require('./models/nav_location'); 
const route = new Graph()
 
// route.addNode('B', { A:1 })
route.addNode('5c1d0a236fe07e30985008b4', { A:1 })

// route.addNode('B', { C: 2 })
route.addNode('5c1d0a236fe07e30985008b4', { C: 2 })

// route.addNode('B', { D: 4 })
route.addNode('5c1d0a236fe07e30985008b4', { D: 4 })

// route.addNode('C', { B:2, D:1 })
// route.addNode('D', { C:1, B:4 })
 
console.log(route.path('5c1d0a236fe07e30985008b4', 'C'));
let data = [
    {
        "_id": "5c1d0daed05f353138eda9df",
        "startPoint": "5c1d0a1b6fe07e30985008b3",
        "endPoint": [
            {
                "_id": "5c1d0daed05f353138eda9e0",
                "id": "5c1d0a236fe07e30985008b4",
                "distance": 2,
                "description": "A TOI B"
            },
            {
                "_id": "5c1d0db7d05f353138eda9e1",
                "id": "5c1d0a286fe07e30985008b5",
                "distance": 2,
                "description": "A TOI C"
            },
            {
                "_id": "5c1d0dc9d05f353138eda9e2",
                "id": "5c1d0a306fe07e30985008b6",
                "distance": 2,
                "description": "A TOI D"
            }
        ],
        "__v": 0
    },
    {
        "_id": "5c1d0de7d05f353138eda9e3",
        "startPoint": "5c1d0a236fe07e30985008b4",
        "endPoint": [
            {
                "_id": "5c1d0de7d05f353138eda9e4",
                "id": "5c1d0a1b6fe07e30985008b3",
                "distance": 2,
                "description": ""
            },
            {
                "_id": "5c1d0df1d05f353138eda9e5",
                "id": "5c1d0a286fe07e30985008b5",
                "distance": 3,
                "description": ""
            }
        ],
        "__v": 0
    },
    {
        "_id": "5c1d0dfed05f353138eda9e6",
        "startPoint": "5c1d0a286fe07e30985008b5",
        "endPoint": [
            {
                "_id": "5c1d0dfed05f353138eda9e7",
                "id": "5c1d0a236fe07e30985008b4",
                "distance": 3,
                "description": ""
            },
            {
                "_id": "5c1d0e09d05f353138eda9e8",
                "id": "5c1d0a1b6fe07e30985008b3",
                "distance": 2,
                "description": ""
            },
            {
                "_id": "5c1d0e0fd05f353138eda9e9",
                "id": "5c1d0ad96fe07e30985008b9",
                "distance": 2,
                "description": ""
            }
        ],
        "__v": 0
    },
    {
        "_id": "5c1d0e1cd05f353138eda9ea",
        "startPoint": "5c1d0a306fe07e30985008b6",
        "endPoint": [
            {
                "_id": "5c1d0e1cd05f353138eda9eb",
                "id": "5c1d0a1b6fe07e30985008b3",
                "distance": 2,
                "description": ""
            },
            {
                "_id": "5c1d0e25d05f353138eda9ec",
                "id": "5c1d0ad96fe07e30985008b9",
                "distance": 3,
                "description": ""
            }
        ],
        "__v": 0
    },
    {
        "_id": "5c1d0e30d05f353138eda9ed",
        "startPoint": "5c1d0ad96fe07e30985008b9",
        "endPoint": [
            {
                "_id": "5c1d0e30d05f353138eda9ee",
                "id": "5c1d0a286fe07e30985008b5",
                "distance": 2,
                "description": ""
            },
            {
                "_id": "5c1d0e38d05f353138eda9ef",
                "id": "5c1d0a306fe07e30985008b6",
                "distance": 3,
                "description": ""
            }
        ],
        "__v": 0
    }
];

// { "5c1d0a286fe07e30985008b5": "2", "5c1d0a306fe07e30985008b6": 3 }

// let initReduce = [];
// let dataReduce = data.reduce((previouVal, currenVal) => {
//     let startPoint = currenVal.startPoint;
//     let endPoint   = currenVal.endPoint;
//     // let objReturn  = {};
//     // objReturn.id   = endPoint.id,
//     // objReturn.distance = endPoint.distance;
//     console.log({endPoint});
//     return previouVal;
// }, initReduce);

/**
 * {
        "_id": "5c1d0e30d05f353138eda9ed",
        "startPoint": "5c1d0ad96fe07e30985008b9",
        "endPoint": [
            {
                "_id": "5c1d0e30d05f353138eda9ee",
                "id": "5c1d0a286fe07e30985008b5",
                "distance": 2,
                "description": ""
            },
            {
                "_id": "5c1d0e38d05f353138eda9ef",
                "id": "5c1d0a306fe07e30985008b6",
                "distance": 3,
                "description": ""
            }
        ],
        "__v": 0
    }
    route.addNode('D', { C:1, B:4 })

    // 
    route.addNote('D', { C : 1 })
    route.addNote('D', { B : 4})
 */
// data.forEach(item => {
//     let endPoint         = item.endPoint;
//     if (item.endPoint.length === 1) {
//         let idEndPoint       = endPoint[0].id;
//         let distanceEndPoint = endPoint[0].distance;
//         return route.addNode(item.startPoint, { idEndPoint : distanceEndPoint });
//     } else {
//         item.endPoint.forEach(itemEndPoint => {
//             let idItemEndPoint = itemEndPoint.id;
//             console.log({ startPoint: item.startPoint, data: { idItemEndPoint : itemEndPoint.distance } });
//             return route.addNode(item.startPoint, { idItemEndPoint : itemEndPoint.distance });
//         });
//     }
// });

// let map = route.path("5c1d0a1b6fe07e30985008b3", "5c1d0ad96fe07e30985008b9");
// console.log({ map });

module.exports = { route };