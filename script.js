let button = document.getElementById('submit')
button.addEventListener('click',()=>{
    
    let name = document.getElementById('name').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let date = document.getElementById('date').value
    
    
    localStorage.setItem('name' , name)
    localStorage.setItem('email' , email )
    localStorage.setItem('password' ,password )
    localStorage.setItem('date' , date)
    

    let a , b, c, d;
    a = localStorage.getItem('name')
    b = localStorage.getItem('email')
    c = localStorage.getItem('password')
    d = localStorage.getItem('date')

    let table = document.getElementById('table')
    let row = table.insertRow(0);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    let cell3 = row.insertCell(2);
    let cell4 = row.insertCell(3);

    cell1.innerHTML = a
    cell2.innerHTML = b
    cell3.innerHTML = c
    cell4.innerHTML = d
})
console.log(name)