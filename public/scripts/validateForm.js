
const contactForm = document.querySelector('.contact-form')
const inputs = Array.from(document.querySelectorAll('.contact-form input'))

function checkForEmptyFields(){
    let emptyFields = 0;
    for(var i = 0; i < inputs.length;i++){
        inputs[i].value === '' ? emptyFields++ : '';
    }
    if(emptyFields){
        console.log("There are empty fields")
        return false
    }
}

contactForm.addEventListener('submit',(e)=>{
    checkForEmptyFields() === false ? e.preventDefault() : '';
})