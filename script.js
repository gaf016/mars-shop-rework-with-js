localStorage.setItem('login', 'admin')
localStorage.setItem('password', 'admin1234')

let login = document.getElementById("login")
let password = document.getElementById("password")
let form = document.getElementById("form") 
let glaz = document.getElementById("glaza")
let logoutBtn = document.getElementById("logout")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log(login.value);
    if (
        login.value == localStorage.getItem('login')
        && password.value.trim()== localStorage.getItem('password')
    ){
        window.location.href = 'second.html'
    }else{
        let p = document.createElement('p')
        p.textContent = 'Parol yoki login xato  '
        p.style.color = 'red'
        login.style.borderBlockColor = 'red'
        password.style.borderBlockColor = 'red'
        form.appendChild(p)

    }
})

glaz.addEventListener('click' , ()=>{
    if(password.type == 'password'){
        password.type = 'text'
        glaz.textContent = '🙈'
    }else{
        password.type = 'password'
        glaz.textContent = '👀'
    }
})

logoutBtn.addEventListener('click', ()=>{
    localStorage.clear
        window.location.href = 'index.html';
})