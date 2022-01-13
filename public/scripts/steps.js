
let stepCount = 0;
const stepsHeader = document.querySelector('.step-header')
const stepHeaders = ['Selecciona el servicio para tu negocio','Información de Contacto y de Negocio','Proceso de Pago']
const stepSubHeaders = ['A continuación te proporcionamos selecciones de nuestros servicios para ayudarte a elegir.','Por favor complete el formulario a continuación','Configura tu tarjeta']
const steps = document.querySelectorAll('.step')
const prev = document.querySelector('.prev')
const nxt = document.querySelector('.nxt')
const plans = document.querySelectorAll('.plan')
const dots = Array.from(document.querySelectorAll('.dot'));
const rows = Array.from(document.querySelectorAll('tr'));  
const clocks = Array.from(document.querySelectorAll('.clock'))
const checks = Array.from(document.querySelectorAll('.check'))
const numbers = Array.from(document.querySelectorAll('.number'))
const stepMarks = document.querySelectorAll('.step-mark')    
const stepMarksSubHeaders = document.querySelectorAll('.step-mark h6');

plans.forEach((plan)=>{
    plan.addEventListener('click',(e)=>{
       dots.forEach((dot)=>{
           dot.style.backgroundColor="#afaeae";
       })
        plans.forEach((plan)=>{
            plan.style.backgroundColor="whitesmoke";
        })
       e.target.style.backgroundColor="#d5ea69";
       const numberOfBenefits = benefits[e.target.classList[1]]['numberOfBenefits'];
       const chosenPlan = e.target.classList[1]
       const columnNumber = benefits[chosenPlan]['column'];
       window.localStorage.chosenPlan=chosenPlan

      for(var i = 1; i <= numberOfBenefits;i++){
         const currentRow = rows[i]
         const td = rows[i].querySelector(`td:nth-child(${columnNumber}) > .dot`);
         td.style.backgroundColor="#d5ea69";
       } 
    })
})
prev.disabled=true


function prevStep(){
    if(stepCount > 1){
        nxt.disabled=false
        prev.disabled=false
        stepCount--
        clocks[stepCount].style.display="none";
        checks[stepCount].style.display="none";
        numbers[stepCount].style.display="block";
        steps[stepCount].style="none"
        stepMarks[stepCount].style.backgroundColor="whitesmoke"
        stepMarks[stepCount].style.color="black"
        stepMarksSubHeaders[stepCount].style.color="black";
        stepCount--
        clocks[stepCount].style.display="block";
        checks[stepCount].style.display="none";
        stepsHeader.querySelector('h1').innerText=stepHeaders[stepCount]
        stepsHeader.querySelector('p').innerText=stepSubHeaders[stepCount]
        steps[stepCount].style.display="block";
        stepMarks[stepCount].style.backgroundColor="black"
        stepMarks[stepCount].style.color="#d5ea69"
        stepMarksSubHeaders[stepCount].style.color="#d5ea69";
        console.log(stepCount,'SC')
        stepCount++
        stepCount === 1 ? prev.disabled=true : '';
    }
}

function nxtStep(){
    if(stepCount === 0){
        numbers[stepCount].style.display="none"
        steps[stepCount].style.display="block";
        clocks[stepCount].style.display="block";
        checks[stepCount].style.display="none";
        
        stepMarks[stepCount].style.backgroundColor="black";
        stepMarks[stepCount].style.color="#d5ea69";
        stepMarksSubHeaders[stepCount].style.color="#d5ea69";
        stepsHeader.querySelector('h1').innerText=stepHeaders[stepCount]
        stepsHeader.querySelector('p').innerText=stepSubHeaders[stepCount]
        console.log(stepHeaders[stepCount])
        window.location.hash=stepHeaders[stepCount]
        stepCount++
        return
    }

    if(stepCount > 0){
        window.location.hash=stepHeaders[stepCount]
        console.log(stepHeaders[stepCount])
        prev.disabled=false
        steps[stepCount-1].style.display="none";
        stepMarks[stepCount-1].style.backgroundColor="whitesmoke";
        stepMarks[stepCount-1].style.color="black";
        stepMarksSubHeaders[stepCount-1].style.color="black";
        stepMarks[stepCount].style.backgroundColor="black"
        stepMarks[stepCount].style.color="#d5ea69";
        stepMarksSubHeaders[stepCount].style.color="#d5ea69";
        clocks[stepCount-1].style.display="none";
        checks[stepCount-1].style.display="block";
        numbers[stepCount-1].style.display="none";
        numbers[stepCount].style.display="none";
        clocks[stepCount].style.display="block";
        checks[stepCount].style.display="none";
        steps[stepCount].style.display="block";
        stepsHeader.querySelector('h1').innerText=stepHeaders[stepCount]
        stepsHeader.querySelector('p').innerText=stepSubHeaders[stepCount]
        if(stepCount === steps.length-1){
            nxt.disabled=true
        }
        stepCount++
        console.log(stepCount,'stepCount')
    }
}

const benefits = {
     'one':{
         'numberOfBenefits':5,
         'column':2
     },
     'two':{
         'numberOfBenefits':9,
         'column':3
     },
     'three':{
         'numberOfBenefits':16,
         'column':4
     }
}
nxt.addEventListener('click',nxtStep)
prev.addEventListener('click',prevStep)
window.addEventListener('load',nxtStep)
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    // e.preventDefault()
    window.localStorage.greeting="hi"
    console.log(window.localStorage.greeting)
})

