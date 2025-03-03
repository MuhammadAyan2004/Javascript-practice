//  destructuring with array
// let arr = [1,2,3,4,5,6,7,8,9]
// let [a,,c,,...rest] = arr
// console.log(a,c,rest);

//  destructuring with obj
// let {a,b} = {a:1, b:2}
// console.log(a,b);

// spread operator 1
// let arr1 = ["muhammad","Ayan",20    ]
// let obj1 = {...arr1}
// console.log(obj1);

// spread operator 2

// let arr2 = [10,12,13]
// function nums(v1,v2,v3){
//     return v1 + v2 + v3
// } 
// console.log(nums(...arr2))

let obj2 = {
    name: "Ayan",
    company: "company xyz",
    address: "xyz"
}

console.log({...obj2,name:"usman",address:"shit"});