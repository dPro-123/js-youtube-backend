
//object destructing
const course={
    coursename:"js in hindi",
    price:"1234",
    courseInstructor:"hitesh"
}
const{courseInstructor}=course
console.log(courseInstructor);//hitesh

const{courseInstructor:instructor}=course //destruct courseInstructor to instructor for reliability
console.log(instructor);//hitesh

//api
//json
/*{
    "coursename":"js in hindi",
    "price":"1234",
    "courseInstructor":"hitesh"
}*/

