type Employee={
    fullname:[first_name:string, lastname:string];
    age:number;
    department:string;
    skills:string;
    isActive:boolean;
}

const Employee1: Employee={
    fullname:["Phoenix","The Sage Of Myth"],
    age:24,
    department:"IT",
    skills:"Programming",
    isActive:true
}

const Employee2: Employee={
    fullname:["Wise Lucky","Mdhlovu"],
    age:24,
    department:"IT",
    skills:"System Analysis And Design",
    isActive:true
}

const employees:Employee[]=[Employee1, Employee2]


const logEmployee=():void=>{



console.log("======Employee Details=======")

employees.forEach((emp, index)=>{
    console.log(`Employee ${index+1}`)
    console.log(`Fullname:${Employee1.fullname.join(" ")}`)
    console.log(`Age:${Employee1.age}`)
    console.log(`Department:${Employee1.department}`)
    console.log(`Skills:${Employee1.skills}`)
    console.log(`IsActive:${Employee1.isActive}\n`)

})
}

logEmployee()