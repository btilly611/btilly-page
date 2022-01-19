
let stepCount = 0;
const stepsHeader = document.querySelector('.step-header')
const stepHeaders = ['Selecciona el servicio para tu negocio','Información de Contacto y de Negocio','Proceso de Pago']
const stepSubHeaders = ['A continuación te proporcionamos descripciones de nuestros servicios para ayudarte a elegir.','Por favor complete el formulario a continuación','Configura tu tarjeta']
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


function selectPlan(e,chosenPlan){
    let planInput = document.querySelector('#plan')
    planInput.value=chosenPlan
    console.log(planInput.value)
}

plans.forEach((plan)=>{
    plan.addEventListener('click',(e)=>{  
       dots.forEach((dot)=>{
           dot.style.backgroundColor="#afaeae";
       })
        plans.forEach((plan)=>{
            plan.style.backgroundColor="whitesmoke";
        })
       e.currentTarget.style.backgroundColor="#d5ea69";
       const chosenPlan = e.currentTarget.classList[1]
       const numberOfBenefits = benefits[e.currentTarget.classList[1]]['numberOfBenefits'];
       const columnNumber = benefits[chosenPlan]['column'];
        selectPlan(e,chosenPlan)
        for(var i = 2; i <= numberOfBenefits;i++){
            const currentRow = rows[i]
            const td = currentRow.querySelector(`td:nth-child(${columnNumber}) > .dot`);
            td.style.backgroundColor="#d5ea69";
        } 
    })
})
prev.disabled=true
function prevStep(){
    if(stepCount > 1){
        nxt.disabled=false
        nxt.style.display=""
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
        prev.disabled=false
        nxt.style.display="none";
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
        // if(stepCount === steps.length-1){
        //     nxt.disabled=true
        // }
        stepCount++
    }
}

const benefits = {
     'one':{
         'numberOfBenefits':6,
         'column':2
     },
     'two':{
         'numberOfBenefits':10,
         'column':3
     },
     'three':{
         'numberOfBenefits':17,
         'column':4
     }
}

const selectPlanBtns = Array.from(document.querySelectorAll('.plan button.select-plan-btn'))
console.log(selectPlanBtns)
selectPlanBtns.forEach((button)=>{
    console.log(button,100)
        button.addEventListener('click',()=>{
            selectPlan()
            nxtStep()
            console.log('button clicked')
        })
    })

nxt.addEventListener('click',nxtStep)
prev.addEventListener('click',prevStep)
window.addEventListener('load',nxtStep)
const form = document.querySelector('form')
form.addEventListener('submit',(e)=>{
    // e.preventDefault()
})