export interface controllertype1{
    userid:string
    name:string,
    email:string,
    password:string
}

export interface controllertype2{
    email:string,
    updateemail:string
   
}

export interface controllertype3{
    email:string,
    age:number
   
}

export interface controllertype4{
    email:string,
    marks:{subject:string,marks:number}[]
}