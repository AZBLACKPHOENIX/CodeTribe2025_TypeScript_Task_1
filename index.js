var Employee1 = {
    fullname: ["Phoenix", "The Sage Of Myth"],
    age: 24,
    department: "IT",
    skills: "Programming",
    isActive: true
};
var Employee2 = {
    fullname: ["Wise Lucky", "Mdhlovu"],
    age: 24,
    department: "IT",
    skills: "System Analysis And Design",
    isActive: true
};
for (var detail in Employee1) {
    console.log(detail);
}
