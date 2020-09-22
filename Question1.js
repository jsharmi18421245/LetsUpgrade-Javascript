let employees = [
    {
        name: "Sharmila",
        age: 18,
        city: "chennai",
        salary: "5,00,000",
    },

    {
        name: "Shiny",
        age: 21,
        city: "America",
        salary: "3,00,000",
    },

    {
        name: "Suriya",
        age: 25,
        city: "France",
        salary: "3,80,000",
    },

    {
        name: "Grace",
        age: 30,
        city: "London",
        salary: "2,15,000",
    },

    {
        name: "Raja",
        age: 27,
        city: "Mumbai",
        salary: "1,40,000",
    },

];

// Display all the records of employee, by calling the function 
employee_detail_show(employees);


function employee_detail_show (employees) {

    let count = 1;
    let tabledata = "";

    employees.forEach(function(employee, index) {

        let currentrow = 
                        `<tr>
                            <td>${count}</td>
                            <td>${employee.name}</td>
                            <td>${employee.age}</td>
                            <td>${employee.city}</td>
                            <td>${employee.salary}</td>
                            <td>
                                <button class="button" onclick="delete_record(${index})">delete</button>
                            </td>
                        </tr>`;
        
        tabledata += currentrow;
        count +=1;
        
    });
    
    document.getElementsByClassName("tdata")[0].innerHTML = tabledata;
}


function search_by_name_and_city() {

    
    let search_name = document.getElementById("search-name-city").value;
    let search_city = document.getElementById("search-name-city").value;
    

    let searchNameCity = employees.filter(function(emp){
        return (emp.name.indexOf(search_name) != -1) ||  (emp.city.indexOf(search_city) != -1); 
    });

    // console.log(searchNameCity);
    employee_detail_show(searchNameCity);

}

function delete_record(index) {
    
    employees.splice(index, 1)

    employee_detail_show(employees);


}




