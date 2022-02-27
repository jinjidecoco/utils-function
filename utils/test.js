// 将 treeToarr
console.log(212)

let tree=[
  {
    id:1,
    name:'1',
    pid:0,
    children:[
      {
        id:2,
        name:'2',
        pid:2,
        children:[]
      },
      {
        id:3,
        name:'3',
        pid:3,
        children:[
          {
            id:4,
            name:'4',
            pid:4
          }
        ]
      }
    ]
  }
]

let arr =[
  {id:1, name:'1', pid:0},
  {id:2, name:'2', pid:2},
  {id:3, name:'3', pid:3},
  {id:4, name:'4', pid:4},
]
function treeToArr(tree) {
  return tree.reduce((prev,cur)=>{
    const { children, ...rest} = cur
    return  prev.concat(rest,children&&children.length?treeToArr(children):[])
  })
}
treeToArr(tree)
// console.log(treeToArr(tree))



const arr12 = [{name:'Amy', age: 10}, {name:'Bob', age: 20}]



let newArr = arr12.reduce((total, value) => {
  console.log(total,value)
  return [...total, value.name]
},[])
console.log(newArr) // [ 'Amy', 'Bob' ]

let newName = arr12.reduce((total,value) => value.name === 'Amy' ? [...total, value] : total,[])
console.log(newName)