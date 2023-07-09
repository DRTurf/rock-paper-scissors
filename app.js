const computerDisplay=document.getElementById('computer-choice')
const userDisplay=document.getElementById('user-choice')
const resultDisplay=document.getElementById('result')
const possiblechoices=document.querySelectorAll('button')

let userChoice
let compChoice
let result

possiblechoices.forEach(possiblechoice =>possiblechoice.addEventListener('click',(e) => {
userChoice=e.target.id
userDisplay.innerHTML=userChoice
computer()
getResult()
}))
function computer(){
    const rando=Math.floor(Math.random()*possiblechoices.length)+1
    if(rando===1)
    compChoice='paper'
    if(rando===2)
    compChoice='rock'
    if(rando===3)
    compChoice='scissors'
    computerDisplay.innerHTML=compChoice
}
function getResult(){
    if(userChoice===compChoice)
    result='It is a draw!'
    if(userChoice==='scissors' && compChoice=='rock')
    result='You lose!'
    if(userChoice==='rock' && compChoice=='paper')
    result='You lose!'
    if(userChoice==='paper' && compChoice=='scissors')
    result='You lose!'
    if(userChoice==='rock' && compChoice=='scissors')
    result='You win!'
    if(userChoice==='scissors' && compChoice=='paper')
    result='You win!'
    if(userChoice==='paper' && compChoice=='rock')
    result='You win!'
    resultDisplay.innerHTML=result
}