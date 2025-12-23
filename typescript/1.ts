// let a:number=10
// console.log(typeof a)
// a=20
// console.log(typeof a)
// console.log(a+10)
 
// let msg="hello"
// msg="hi"
// msg="Hello world!!"
 
// let islogin:boolean=true
 
// let x:number
// console.log(typeof x)//undefined
 
// let nums:number[]=[10,20,30,40]
 
// let alphanums:(number|string)[]=[10,20,30,40,"50","60"]
 
// //literals
 
// let u_gender:"male"|"female"|"other"
 
// u_gender="male"
// u_gender="female"
// //gender="asdf"//error
 
// //type alias
 
// type Gender="male"|"female"|"other"
// //type alias_name=datatype
 
// let a_gender:Gender
 
// a_gender="female"
 
// type AlphaNumeric=number|string
 
// let alpha_nums:AlphaNumeric[]=[10,20,30,"40"]
 
// //////////////////////////////////////////////////////////////////////////////////////////

// let a:number=10
// console.log(typeof a)
// a=20
// console.log(typeof a)
// console.log(a+10)
 
// let msg="hello"
// msg="hi"
// msg="Hello world!!"
 
// let islogin:boolean=true
 
// let x:number
// console.log(typeof x)//undefined
 
// let nums:number[]=[10,20,30,40]
 
// let alphanums:(number|string)[]=[10,20,30,40,"50","60"]
 
// //literals
 
// let u_gender:"male"|"female"|"other"
 
// u_gender="male"
// u_gender="female"
// //gender="asdf"//error
 
// //type alias
 
// type Gender="male"|"female"|"other"
// //type alias_name=datatype
 
// let a_gender:Gender
 
// a_gender="female"
 
// type AlphaNumeric=number|string
 
// let alpha_nums:AlphaNumeric[]=[10,20,30,"40"]
 
// let user1:{
//     readonly name:string,
//     age:number,
//     gender:Gender,
//     location:string,
//     hobbies?:string[]//optional
// }
 
// user1={
//     name:"sachin",
//     age:50,
//     gender:"male",
//     location:"mumbai",
// }
 
// console.log(user1.name)
// //user.name="virat"//error
 
// const org="accenture"
// //org="xyz.pvt.Ltd"//error
 
// type User={
//     readonly name:string,
//     age:number,
//     gender:Gender,
//     location:string,
//     hobbies?:string[]//optional
// }
 
// let user2:User={
//     name:"rahul",
//     age:50,
//     gender:"male",
//     location:"pune"
// }

// ////////////////////////////////////////////////////////////////

// function sum(n1:number,n2:number)
// {
// return (n1+n2)
// }
 
// console.log(sum(10,20))
// //console.log(sum(10,"20"))//error
// //console.log(sum(10))//error
// //console.log(sum())//error
 
 
// function fullname(firstname:string,middlename?:string,lastname?:string)
// {
//     return firstname+" "+(middlename?middlename:"")+" "+lastname
// }
 
// console.log(fullname("sachin","ramesh","tendulkar"))
// console.log(fullname("virat","kholi"))
// console.log(fullname("virat"))
 
// function discount(price:number,dis_per:number=0.05)
// {
//     return price-(price*dis_per)
// }
 
// console.log(discount(100,0.1))
// console.log(discount(50))


// //////////////////////////////////////////////////////////////////////////////



// abstract class Human{
//   name:string
//   age:number
//   loc:string

// }

// interface  Shareholder{
//   buyShare:()=>number
// }

// class Employee extends Human implements Shareholder{
//     eid:number
//     salary:number
// }

// class Suplier extends Human{
//     sid:number
//     products:string[]
// }

// class Customer extends Human implements Shareholder{
//     cid:number
//     customerType:string
// }
