/* 
    Cho array listServers;
    Dựa vào array "connects" để trả về list items serviceMap;
    Vận dung kiến thưc javascript;

    Example:

    Input = [
        {
            "id": "1",
            "title": "Service_01",
            "connects": [
                "2",
                "8"
            ]
        }
    ]

    Output = [
        {
            "id": "1",
            "title": "Service_01",
            "connects": [
                {
                    "id": "2",
                    "title": "Service_02",
                    "connects": [
                        "2",
                        "7",
                        "1"
                    ]
                },
                {
                    "id": "8",
                    "title": "Service_08",
                    "connects": [
                        "4",
                        "7"
                    ]
                },
            ]
        }
    ]

*/

const listServers = [{
        "id": "1",
        "title": "Service_01",
        "connects": [
            "2",
            "8"
        ]
    },
    {
        "id": "2",
        "title": "Service_02",
        "connects": [
            "2",
            "7",
            "1"
        ]
    },
    {
        "id": "3",
        "title": "Service_03",
        "connects": [
            "2",
            "8"
        ]
    },
    {
        "id": "4",
        "title": "Service_04",
        "connects": [
            "2",
        ]
    },
    {
        "id": "5",
        "title": "Service_05",
        "connects": [
            "1",
            "3",
            "4"
        ]
    },
    {
        "id": "6",
        "title": "Service_06",
        "connects": [
            "2",
            "8",
            "5"
        ]
    },
    {
        "id": "7",
        "title": "Service_07",
        "connects": [
            "2",
        ]
    },
    {
        "id": "8",
        "title": "Service_08",
        "connects": [
            "4",
            "7"
        ]
    },
]

//cach cua anh khiem
// let result = listServers.map(e => {
//     let docs = e.connects.map(i => listServers.find(item => item.id == i))
//     return {
//         ...e,
//         connects: docs
//     }
// })

// console.log(JSON.stringify(result))
// var listServiceMap = [];


// function mapService(input) {

//     if (input.length > 0) {
//         input.forEach(e => {

//             var newServiceMap = {
//                 id: e.id,
//                 title: e.title,
//                 connects: []
//             };
//             if (e.connects.length > 0) {
//                 e.connects.forEach(id => {

//                     var server = listServers.find((i) => i.id === id);

//                     if (server !== undefined) {
//                         newServiceMap.connects.push(server);
//                     }
//                 });
//             }

//             listServiceMap.push(newServiceMap);
//         });
//     }

//     return listServiceMap;
// };

// function result() {
//     mapService(listServers);
//     console.log(JSON.stringify(listServiceMap));
// };

// result();
//  let result = listServers.reduce((acc,cur) =>{
//    let arr=  acc.push(cur.connects);
//      return {
//          ...cur,
//         connects:arr
//      }
//  },{});
//  console.log(result);
// const objectSever = listServers.reduce((acc, cur) => {
//     acc[cur.id] = cur
//     return acc;

// }, {})
// const ex1 = listServers.reduce((acc,cur) =>{
//     const transform = cur.connects.map(e =>{
//         return listServers.filter(el => el.id =e)
//     })
//     return {
//         ...acc,
//         connects:transform
//     }
// },{})
// let ex2 = []
// listServers.forEach(i => {
//     const transform = i.connects.map(e => {
//         return listServers.find(el => el.id = e)
//     })
//     ex2.push({
//         ...i,
//         connects: transform
//     })
//     return ex2

// })
// let ex3 = listServers.reduce((acc,cur) =>{
//     const transform  = cur.connects.map(e => objectSever[e])
//     acc.push({
//         ...cur,
//         connects:transform
//     })
//     return acc;
// },[])
// let ex4 = [];
//   listServers.forEach(e =>{
//     const transform = e.connects.forEach((el) =>{
//     return listServers.find(i => i.id == el)
        
//     });
//     ex4.push({
//         ...e,
//         connects:transform
//     })
//     return ex4
// })
// let ex5 = listServers.reduce((acc,cur) =>{
//     const transform = cur.connects.forEach(e =>{
//         return listServers.find(i => i.id == e)
//     });
//     acc.push({
//         ...cur,
//         connects: transform
//     })
//     return acc;
// },[])
// let ex6= [];
// for (const key of listServers) {
//     const transform = key.connects.map(e =>{
//         return listServers.find(i => i.id == e)
//     });
//   ex6.push({
//         ...key,
//         connects:transform
//     })
  
// }
// let ex7 =[];
// listServers.map(e =>{
//     const transform = e.connects.map(el =>{
//         return listServers.find(i =>i.id == el)
//     })
//     ex7.push({
//         ...e,
//         connects:transform
//     })
// })
  
// let i =0 ;
// let ex8 = [];
// while (i<listServers.length){
// ex8.push({
//     ...listServers[i],
//     connects: listServers[i].connects.map(e =>{
//         return listServers.find(el => el.id ==e )
//     })
// })
// i++;
// }
let ex9 = [];
for (let i= 0;i<listServers.length;i++){
    ex9.push({
        ...listServers[i],
        connects: listServers[i].connects.map(e =>{
            return listServers.find(el =>el.id == e)
        })
    })
    
}
console.log(JSON.stringify(ex9) );