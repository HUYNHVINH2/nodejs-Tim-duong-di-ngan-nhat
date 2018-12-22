const Graph = require('node-dijkstra')

const route = new Graph()

var data ;
 

/*connect to mogodb */
var mongooes = 

//
function ADDNODE_(data)
{
    for(let i = 0 ;i < data.length;i++)
    {
        var khoangcach
        var tenvitri
        route.addNode(tenvitri,{khoangcach})
    }
}

 function lotrinh(lotrinh)
 {
    for(var i =0;i < lotrinh.length-1;i++)
    {
     console.log(route.path( lotrinh[i],lotrinh[i+1], { cost: true }));
    }
 }

route.addNode('khoanhi', { khoasan:1 })
route.addNode('khoasan', { khoanhi:1, nhaxe:2, phongxetnghiem: 4 })
route.addNode('nhaxe', { khoasan:2, phongxetnghiem:1 })
route.addNode('phongxetnghiem', { nhaxe:1, khoasan:4 })




 var a = route.path('khoanhi', 'phongxetnghiem') // => [ 'A', 'B', 'C', 'D' ]
 for(var i =0;i < a.length-1;i++)
 {
  console.log(route.path( a[i], a[i+1], { cost: true }));
 }
 



