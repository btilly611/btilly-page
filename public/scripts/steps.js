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
const squares = Array.from(document.querySelectorAll('.square'))
const numbers = Array.from(document.querySelectorAll('.number'))
const stepMarks = document.querySelectorAll('.step-mark')    
const stepMarksSubHeaders = document.querySelectorAll('.step-mark h6')  
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
       const columnNumber = benefits[e.target.classList[1]]['column'];
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
        squares[stepCount].style.display="none";
        numbers[stepCount].style.display="block";
        steps[stepCount].style="none"
        stepMarks[stepCount].style.backgroundColor="whitesmoke"
        stepMarks[stepCount].style.color="black"
        stepMarksSubHeaders[stepCount].style.color="black";
        stepCount--
        squares[stepCount].style.display="block";
        numbers[stepCount].style.display="none";
        stepsHeader.querySelector('h1').innerText=stepHeaders[stepCount]
        stepsHeader.querySelector('p').innerText=stepSubHeaders[stepCount]
        steps[stepCount].style.display="block";
        stepMarks[stepCount].style.backgroundColor="black"
        stepMarks[stepCount].style.color="#d5ea69"
        stepMarksSubHeaders[stepCount].style.color="white";

        console.log(stepCount,'SC')
        stepCount++
        stepCount === 1 ? prev.disabled=true : '';
    }
}

function nxtStep(){
    if(stepCount === 0){
        steps[stepCount].style.display="block";
        squares[stepCount].style.display="block";
        numbers[stepCount].style.display="none";
        stepMarks[stepCount].style.backgroundColor="black";
        stepMarks[stepCount].style.color="#d5ea69";
        stepMarksSubHeaders[stepCount].style.color="white";
        stepsHeader.querySelector('h1').innerText=stepHeaders[stepCount]
        stepsHeader.querySelector('p').innerText=stepSubHeaders[stepCount]
        stepCount++
        console.log(stepCount,'stepCount')
        return
    }
    if(stepCount > 0){
        prev.disabled=false
        steps[stepCount-1].style.display="none";
        stepMarks[stepCount-1].style.backgroundColor="whitesmoke";
        stepMarks[stepCount-1].style.color="black";
        stepMarksSubHeaders[stepCount-1].style.color="black";
        stepMarks[stepCount].style.backgroundColor="black"
        stepMarks[stepCount].style.color="#d5ea69";
        stepMarksSubHeaders[stepCount].style.color="white";
        squares[stepCount-1].style.display="none";
        numbers[stepCount-1].style.display="block";
        squares[stepCount].style.display="block";
        numbers[stepCount].style.display="none";
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
         'numberOfBenefits':7,
         'column':3
     },
     'three':{
         'numberOfBenefits':7,
         'column':4
     }
};

nxt.addEventListener('click',nxtStep)
prev.addEventListener('click',prevStep)
window.addEventListener('load',nxtStep)