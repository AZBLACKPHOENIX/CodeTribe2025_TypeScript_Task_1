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
    console.log(`Fullname:${emp.fullname.join(" ")}`)
    console.log(`Age:${emp.age}`)
    console.log(`Department:${emp.department}`)
    console.log(`Skills:${emp.skills}`)
    console.log(`IsActive:${emp.isActive}\n`)
})
}

logEmployee()