function manageStudents(){
    let students=["Amit","Bamit","Damit","Lamit"];

    students.splice(2,0,"Chamit");
    console.log(students.includes("Tamit"));
    console.log(students.includes("Lamit"));

    console.log(students.join("--"));
}

manageStudents();