const form1 = document.querySelector('.form-box1')
const form2 = document.querySelector('.form-box2')
const form3 = document.querySelector('.form-box3')
const form4 = document.querySelector('.form-box4')
const form5 = document.querySelector('.form-box5')
const formProgress1 = document.querySelector('.count1')
const formProgress2 = document.querySelector('.count2')
const formProgress3 = document.querySelector('.count3')
const formProgress4 = document.querySelector('.count4')
const nameError = document.querySelector('.name-error')
const mailError = document.querySelector('.mail-error')
const numberError = document.querySelector('.number-error')
const inputName = document.querySelector('.input-name')
const inputMail = document.querySelector('.input-mail')
const inputNumber = document.querySelector('.input-number')
const btnNext1 = document.querySelector('.btn-next1')
const btnNext2 = document.querySelector('.btn-next2')
const btnNext3 = document.querySelector('.btn-next3')
const btnConfirm = document.querySelector('.btn-next4')
const backBtn1 = document.querySelector('.go-back1')
const backBtn2 = document.querySelector('.go-back2')
const backBtn3 = document.querySelector('.go-back3')
const btnArcade = document.querySelector('.arcade')
const btnAdvanced = document.querySelector('.advanced')
const btnPro = document.querySelector('.pro')
const duration1 = document.querySelector('.duration1')
const duration2 = document.querySelector('.duration2')
const price1 = document.querySelector('.amount1')
const price2 = document.querySelector('.amount2')
const price3 = document.querySelector('.amount3')
const free1 = document.querySelector('.free1')
const free2 = document.querySelector('.free2')
const free3 = document.querySelector('.free3')
const toggleBtn = document.querySelector('.toggle-box')
const toggle = document.querySelector('.toggle')
const checkBtn1 = document.getElementById('check1')
const checkBtn2 = document.getElementById('check2')
const checkBtn3 = document.getElementById('check3')
const addOns1 = document.querySelector('.online1')
const addOns2 = document.querySelector('.larger2')
const addOns3 = document.querySelector('.customizable3')
const checkPrice1 = document.querySelector('.check-price1')
const checkPrice2 = document.querySelector('.check-price2')
const checkPrice3 = document.querySelector('.check-price3')
const totalService1 = document.querySelector('.total-service1')
const total = document.querySelector('.total')
const totalPrice1 = document.querySelector('.total-price1')
const totalPrice2 = document.querySelector('.total-price2')
const totalPrice3 = document.querySelector('.total-price3')
const totalPrice4 = document.querySelector('.total-price4')
const totalPrice5 = document.querySelector('.total-price5')
const box2 = document.querySelector('.box2')
const box3 = document.querySelector('.box3')
const box5 = document.querySelector('.box5')
let arcadeMonthlyPrice = 9
let advancedMonthlyPrice = 12
let proMonthlyPrice = 15
let arcadeYearlyPrice = 90
let advancedYearlyPrice = 120
let proYearlyPrice = 150
let clicked = false
let addOnsMonthlyPrice1 = 1
let addOnsPrice1 = 0
let addOnsMonthlyPrice2 = 2
let addOnsPrice2 = 0
let addOnsMonthlyPrice3 = 2
let addOnsPrice3 = 0
let addOnsYearlyPrice1 = 10
let addOnsYearlyPrice2 = 20
let addOnsYearlyPrice3 = 20
let regex = ""
let regex2 = ""
let regex3 = ""
let isValid1 = ""
let isValid2 = ""
let isValid3 = ""


checkBtn1.addEventListener("click", function(){
    if(checkBtn1.checked){
        addOns1.style.border = "1px solid hsl(243, 100%, 62%)"
        addOns1.style.background = "hsl(217, 100%, 97%)"
    }else{
        addOns1.style.border = "1px solid hsl(231, 11%, 63%)"
        addOns1.style.background = "transparent"
    }
})

checkBtn2.addEventListener("click", function(){
    if(checkBtn2.checked){
        addOns2.style.border = "1px solid hsl(243, 100%, 62%)"
        addOns2.style.background = "hsl(217, 100%, 97%)"
    }else{
        addOns2.style.border = "1px solid hsl(231, 11%, 63%)"
        addOns2.style.background = "transparent"
    }
})

checkBtn3.addEventListener("click", function(){
    if(checkBtn3.checked){
        addOns3.style.border = "1px solid hsl(243, 100%, 62%)"
        addOns3.style.background = "hsl(217, 100%, 97%)"
    }else{
        addOns3.style.border = "1px solid hsl(231, 11%, 63%)"
        addOns3.style.background = "transparent"
    }
})

inputName.addEventListener("input", function(){
    this.style.border = "1px solid hsl(231, 11%, 63%)"
    nameError.style.display = "none"
})
inputMail.addEventListener("input", function(){
    this.style.border = "1px solid hsl(231, 11%, 63%)"
    mailError.style.display = "none"
})
inputNumber.addEventListener("input", function(){
    this.style.border = "1px solid hsl(231, 11%, 63%)"
    numberError.style.display = "none"
})

btnNext1.addEventListener("click", function(){
    regex = /^([a-zA-z]{2,30})( )([a-zA-Z]{2,30})$/
    isValid1 = regex.test(inputName.value)
    if(inputName.value == ""){
        nameError.style.display = "block" 
        inputName.style.border = "1px solid hsl(354, 84%, 57%)"
     }
     else if(isValid1){
        nameError.style.display = "none"
    }else{
        nameError.style.display = "block"
        nameError.textContent = "Invalid name"
        inputName.style.border = "1px solid hsl(354, 84%, 57%)"
    }

    regex2 = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/
    isValid2 = regex2.test(inputMail.value)
    if(inputMail.value == ""){
        mailError.style.display = "block"
        inputMail.style.border = "1px solid hsl(354, 84%, 57%)"
    }
    else if(isValid2){
        mailError.style.display = "none"
    }else{
        mailError.style.display = "block"
        mailError.textContent = "Invalid email"
        inputMail.style.border = "1px solid hsl(354, 84%, 57%)"
    }

    regex3 = /^[0-9]{11}$/
    isValid3 = regex3.test(inputNumber.value)
    if(inputNumber.value == ""){
        numberError.style.display = "block"
        inputNumber.style.border = "1px solid hsl(354, 84%, 57%)"
    }
    else if(isValid3){
        numberError.style.display = "none"
    }else{
        console.log("Invalid input")
        numberError.style.display = "block"
        numberError.textContent = "Invalid number"
        inputNumber.style.border = "1px solid hsl(354, 84%, 57%)"
    }

    if(isValid1 && isValid2 && isValid3){
        form1.style.display = "none"
        form2.style.display = "block"
        formProgress1.classList.remove('active')
        formProgress2.classList.add('active')
    }
    else{
        alert("Provide all valid inputs")
    }
})

btnNext2.addEventListener("click", function(){
    if(!btnArcade.classList.contains('clicked-plan') && !btnAdvanced.classList.contains('clicked-plan') && !btnPro.classList.contains('clicked-plan')){
    alert("Select a plan")
    }else{
    form2.style.display = "none"
    form3.style.display = "block"
    formProgress2.classList.remove('active')
    formProgress3.classList.add('active')
    }
})

btnNext3.addEventListener("click", function(){
    form3.style.display = "none"
    form4.style.display = "block"
    formProgress3.classList.remove('active')
    formProgress4.classList.add('active')

    if(checkBtn1.checked && toggle.classList.contains('active')){
        box2.style.display = "flex"
        addOnsPrice1 = 1
    }
    else if(checkBtn1.checked && !toggle.classList.contains('active')){
        box2.style.display = "flex"
        addOnsPrice1 = 10
    }
    else{
        box2.style.display = "none"
    }
    if(checkBtn2.checked && toggle.classList.contains('active')){
        box3.style.display = "flex"
        addOnsPrice2 = 2
    }
    else if(checkBtn2.checked && !toggle.classList.contains('active')){
        box3.style.display = "flex"
        addOnsPrice2 = 20
    }else{
        box3.style.display = "none"
    }
    if(checkBtn3.checked && toggle.classList.contains('active')){
        box5.style.display = "flex"
        addOnsPrice3 = 2
    }
    else if(checkBtn3.checked && !toggle.classList.contains('active')){
        box5.style.display = "flex"
        addOnsPrice3 = 20
    }else{
        box5.style.display = "none"
    }

    if(btnArcade.classList.contains('clicked-plan') && toggle.classList.contains('active')){
        totalService1.textContent = "Arcade (Monthly)"
        totalPrice1.textContent = arcadeMonthlyPrice
    }

    else if(btnAdvanced.classList.contains('clicked-plan') && toggle.classList.contains('active')){
        totalService1.textContent = "Advanced (Monthly)"
        totalPrice1.textContent = advancedMonthlyPrice

    }

    else if(btnPro.classList.contains('clicked-plan') && toggle.classList.contains('active')){
        totalService1.textContent = "Pro (Monthly)"
        totalPrice1.textContent = proMonthlyPrice

    }

    if(btnArcade.classList.contains('clicked-plan') && !toggle.classList.contains('active')){
        totalService1.textContent = "Arcade (Yearly)"
        totalPrice1.textContent = arcadeYearlyPrice
    }
    else if(btnAdvanced.classList.contains('clicked-plan') && !toggle.classList.contains('active')){
        totalService1.textContent = "Advanced (Yearly)"
        totalPrice1.textContent = advancedYearlyPrice
    }
    else if(btnPro.classList.contains('clicked-plan') && !toggle.classList.contains('active')){
        totalService1.textContent = "Pro (Yearly)"
        totalPrice1.textContent = proYearlyPrice
    }

    if(!toggle.classList.contains('active')){
        total.textContent = "Total (per year)"
    }else {
        total.textContent = "Total (per month)"
    }

    totalPrice2.textContent = addOnsPrice1
    totalPrice3.textContent = addOnsPrice2
    totalPrice5.textContent = addOnsPrice3

    totalPrice4.textContent = parseInt(totalPrice5.textContent) + parseInt(totalPrice3.textContent) + parseInt(totalPrice2.textContent) + parseInt(totalPrice1.textContent)
})

btnConfirm.addEventListener("click", function(){
    form4.style.display = "none"
    form5.style.display = "flex"
})

backBtn1.addEventListener("click", function(){
   form1.style.display = "block"
   form2.style.display = "none"
   formProgress2.classList.remove('active')
   formProgress1.classList.add('active')
})
backBtn2.addEventListener("click", function(){
   form2.style.display = "block"
   form3.style.display = "none"
   formProgress3.classList.remove('active')
   formProgress2.classList.add('active')
})
backBtn3.addEventListener("click", function(){
   form3.style.display = "block"
   form4.style.display = "none"
   formProgress4.classList.remove('active')
   formProgress3.classList.add('active')
})
toggleBtn.addEventListener("click", function(){
   if(!clicked){
   clicked = true
   toggle.classList.remove('active')
   duration2.style.color = "hsl(213, 96%, 18%)"
   duration1.style.color = "hsl(231, 11%, 63%)"
   free1.style.display = "block"
   free2.style.display = "block"
   free3.style.display = "block"
   price1.textContent = "$" + arcadeYearlyPrice + "/yr"
   price2.textContent = "$" + advancedYearlyPrice + "/yr"
   price3.textContent = "$" + proYearlyPrice + "/yr"
   checkPrice1.textContent = "$" + addOnsYearlyPrice1 + "/yr"
   checkPrice2.textContent = "$" + addOnsYearlyPrice2 + "/yr"
   checkPrice3.textContent = "$" + addOnsYearlyPrice3 + "/yr"
   }else{
   clicked = false
   toggle.classList.add('active')
   duration1.style.color = "hsl(213, 96%, 18%)"
   duration2.style.color = "hsl(231, 11%, 63%)"
   free1.style.display = "none"
   free2.style.display = "none"
   free3.style.display = "none"
   price1.textContent = "$" + arcadeMonthlyPrice + "/mo"
   price2.textContent = "$" + advancedMonthlyPrice + "/mo"
   price3.textContent = "$" + proMonthlyPrice + "/mo"
   checkPrice1.textContent = "$" + addOnsMonthlyPrice1 + "/mo"
   checkPrice2.textContent = "$" + addOnsMonthlyPrice2 + "/mo"
   checkPrice3.textContent = "$" + addOnsMonthlyPrice3 + "/mo"
   }
})
btnArcade.addEventListener("click", action1)
function action1() {
       if(btnAdvanced.clicked = true){
           btnAdvanced.classList.remove('clicked-plan')
           btnPro.classList.remove('clicked-plan')
           btnArcade.classList.add('clicked-plan')
       }else{
           btnArcade.classList.add('clicked-plan')
       } 
   }   
btnAdvanced.addEventListener("click", action2)
function action2() {
       if(btnArcade.clicked = true){
           btnArcade.classList.remove('clicked-plan')
           btnPro.classList.remove('clicked-plan')
           btnAdvanced.classList.add('clicked-plan')
       }else{
           btnAdvanced.classList.add('clicked-plan')
       }      
   }
btnPro.addEventListener("click", action3)
function action3() {
       if(btnArcade.clicked = true){
           btnArcade.classList.remove('clicked-plan')
           btnAdvanced.classList.remove('clicked-plan')
           btnPro.classList.add('clicked-plan')
       }else{
           btnPro.classList.add('clicked-plan')
       }
   }
  