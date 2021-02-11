// DOM ELEMENTS
const password = document.querySelector('#password')
const showBtn = document.querySelector('.show-btn')
const hideBtn = document.querySelector('.hide-btn')

// Eventlisteners

//hide password
hideBtn.addEventListener('click',passwordDisplay)

//reveal password
showBtn.addEventListener('click',passwordDisplay)


//function to hide/display password
function passwordDisplay(){
    if(password.type === 'password'){
        password.type = 'text'
        showBtn.classList.remove('hidden')
        hideBtn.classList.add('hidden')
    }
    else {
        password.type = 'password'
        showBtn.classList.add('hidden')
        hideBtn.classList.remove('hidden')
    }
}

