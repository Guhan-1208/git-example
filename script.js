let a = 6;
let b=7;
let z = a+b;
let x = a-b;
let y = a*b;
let w = a/b;
document.getElementById("demo").innerHTML=z;
let name = "GUHAN";
document.getElementById("name").innerHTML="Name is "+ name;
let text1 = "HELLO ";
document.getElementById("concat").innerHTML= "String Concat :  " + text1 + name;
document.getElementById("sum").innerHTML="The sum of a and b is "+z;
document.getElementById("sub").innerHTML="The sub of a and b is "+x;
function myAns(p1,p2){
    return p1*p2;
}
let result = myAns(a,b);
document.getElementById("mult").innerHTML ="The multiply of a and b is "+result;
function myDiv(p3, p4) {
      let result = p3 / p4;
      document.getElementById("output").innerHTML = "Division of a and b is " + result;
    }

const person ={
    firstname:"Guhan",
    lastname:"K",
    age:"22",
    degree:"B.tech/IT",
    fullname: function(){
        return this.firstname+" "+ this.lastname;
    }
};
document.getElementById("obj-lit").innerHTML= person.fullname();
 document.getElementById("obj").innerHTML= person.firstname+" is studying "+ person.degree+" Degree.";


 function Person(first,last,age,deg) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.deg = deg;
    this.college = "MEC";

 }
 const myName= new Person("Guhan", "K",22,"B.Tech/IT");
    document.getElementById("meth").innerHTML= "College name is " +myName.college;