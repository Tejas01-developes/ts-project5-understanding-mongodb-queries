export interface bodytype1{
    name:string,
    email:string,
    password:string
}

export interface bodytype2{
    email:string,
    updateemail:string
}


export interface bodytype3{
    email:string,
    age:number
}

export interface bodytype4{
    email:string,
    marks:{subject:string,marks:number}[]
}