//DOM ELEMENTS
const squareIcon = document.querySelector('.fa-square');
const tickIcon = document.querySelector('.fa-check');
const password = document.querySelector('#password')
const showBtn = document.querySelector('.show-btn')
const hideBtn = document.querySelector('.hide-btn')
const errorMessage = document.querySelector('#error-text')
const passStrength1 = document.querySelector('.pass-strength1')
const passStrength2 = document.querySelector('.pass-strength2')
const passStrength3 = document.querySelector('.pass-strength3')
const passStrength4 = document.querySelector('.pass-strength4')
const passStrength5 = document.querySelector('.pass-strength5')
const strengths = document.querySelectorAll('.strengths')

////////////////////
    //function to test password strength
function testPass(){
    //Regexp to check conditions
    let upperCases = /[A-Z]/;
    let lowerCases = /[a-z]/;
    let digits = /[0-9]/;
    let specialKeys = /[!@#$%^&*]/

    //conditions that match RegExp
    //test for empty string
    if(password.value === ' ' || password.value === ''){
        errorMessage.textContent = 'Please type in Password'
        errorMessage.style.color = ('red')
        passStrength1.classList.add('weak')
    } else{
         
    }
        
//test for weak strength
     if(password.value.match(upperCases) ||
        password.value.match(lowerCases) ||
        password.value.match(digits)

        ){
        errorMessage.textContent = 'Password is quite weak 😉'
        errorMessage.style.color = ('red')
        passStrength1.classList.add('weak')
        
    } else{
        passStrength1.classList.remove('weak')

    }

//test for fair strength

    if(password.value.match(upperCases) && password.value.match(lowerCases) ||
       password.value.match(lowerCases) &&  password.value.match(digits) ||
       password.value.match(upperCases) && password.value.match(digits))     
        {
        errorMessage.textContent = 'Fair enough. but can be better 😉'
        errorMessage.style.color = ('#f5a623')
        passStrength1.classList.add('fair')
        passStrength2.classList.add('fair')
        
    } else {
        passStrength1.classList.remove('fair')
        passStrength2.classList.remove('fair')
      
    }

    //test for great strength
     if(password.value.match(upperCases) &&
            password.value.match(lowerCases) &&
            password.value.match(digits) &&
            password.value.match(specialKeys) )
         {
        errorMessage.textContent = 'Strong. Great 😤'
        errorMessage.style.color = ('rgb(15, 201, 15)')
        passStrength1.classList.add('great')
        passStrength2.classList.add('great')
        passStrength3.classList.add('great')
        passStrength4.classList.add('great')
       
    }  else{
        passStrength1.classList.remove('great')
        passStrength2.classList.remove('great')
        passStrength3.classList.remove('great')
        passStrength4.classList.remove('great')
    }

    //test for the greatest strength
     if(password.value.match(upperCases) &&
            password.value.match(lowerCases) &&
            password.value.match(digits) &&
            password.value.match(specialKeys) &&
            password.value.length >= 10
        ){
        errorMessage.textContent = 'Strong. Perfect 😤'
        errorMessage.style.color = ('green')
        passStrength1.classList.add('perfect')
        passStrength2.classList.add('perfect')
        passStrength3.classList.add('perfect')
        passStrength4.classList.add('perfect')
        passStrength5.classList.add('perfect')
    }
    else{
        passStrength1.classList.remove('perfect')
        passStrength2.classList.remove('perfect')
        passStrength3.classList.remove('perfect')
        passStrength4.classList.remove('perfect')
        passStrength5.classList.remove('perfect')
    }
     
}

//function to hide or reveal password
function hideOrRevealPassword(){
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


////////////////////////////////////
//eventlisteners
//to test password strength
password.addEventListener('keyup',testPass)

//to hide password
hideBtn.addEventListener('click',()=>{
    hideOrRevealPassword()
    password.focus()
})

//to reveal password
showBtn.addEventListener('click',()=>{
    hideOrRevealPassword()
    password.focus()
})


//square icon and tick effect starts here
squareIcon.addEventListener('click', function(){
    tickIcon.classList.remove('hide-check');
})
tickIcon.addEventListener('click', function(){
    tickIcon.classList.add('hide-check');
})

