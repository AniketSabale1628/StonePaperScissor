const scoreNumber = document.querySelector('#s1')
const scoreNumber1 = document.querySelector('#s2')

let score = parseInt(localStorage.getItem("scoreNumber")) || 0;
let score1 = parseInt(localStorage.getItem("scoreNumber1")) || 0;

scoreNumber.innerText=score;
scoreNumber1.innerText=score1;




const btnRules = document.querySelector('.rules-btn')
const btnClose = document.querySelector('.close_btn')
const ModelRules = document.querySelector('.model')



const choices=[
    {
        name:"paper",
        beats:"rock"
    },
    {
        name:"scissors",
        beats:"paper"
    },
    {
        name:"rock",
        beats:"scissors"
    }
]

const choiceButton = document.querySelectorAll("#v")
const gameDiv = document.querySelector(".game")
const resultsDiv = document.querySelector(".results")
const rusultDivs = document.querySelectorAll(".results_result")
const resultsWinner=document.querySelector(".results_winner")
const resultsText=document.querySelector(".result_text")

const playAgainBtn=document.querySelector('.play_again')

const wrap=document.querySelector('.next_btn')
const opa=document.querySelector('#winner')


choiceButton.forEach( button => {
    button.addEventListener('click',()=>{
        const choiceName=button.dataset.choice;
        const choice = choices.find(choice => choice.name === choiceName)
        choose(choice)
    })
})


function choose(choice){
    const aichoice = aiChoose()
    displayResults([choice , aichoice])
    displayWinner([choice , aichoice])
}

function aiChoose(){
    const rand=Math.floor(Math.random()* choices.length)
    return choices[rand]
}

function displayResults(results){
    rusultDivs.forEach((resultDiv,idx)=>{
            setTimeout(()=>{
                resultDiv.innerHTML=`
                <div class="choice ${results[idx].name}">
                <img src="images/icon-${results[idx].name}.svg">
                </div>
                `
            }, idx * 1000)
    })
    gameDiv.classList.toggle("hidden")
    resultsDiv.classList.toggle("hidden")

}

btnRules.addEventListener('click',()=>{
    ModelRules.classList.toggle("show-model")
})

btnClose.addEventListener('click',()=>{
    ModelRules.classList.toggle("show-model")
})
const againstpc=document.querySelector('.results_text_common')
function displayWinner(results)
{
    setTimeout(()=>{
        const userWinner=isWinner(results)
        const aiWinner=isWinner(results.reverse())
        
        
        
        if(userWinner){
            resultsText.innerText="YOU WIN"
            rusultDivs[0].classList.toggle("winner")
            wrap.classList.toggle("hidden");
            againstpc.classList.remove('hidden')
            btnRules.style.right='170px';
            keepScore(1)
        }
        else if(aiWinner){
            resultsText.innerText="YOU LOST"
            rusultDivs[1].classList.toggle("winner")
            againstpc.classList.remove('hidden')
            keepScorec(1)
        }
        else{
            resultsText.innerText="TIE UP"
            againstpc.classList.add('hidden')
        }
// 
    },1000) 
    resultsWinner.classList.toggle("hidden")
    resultsDiv.classList.toggle("show-winner")
}

function isWinner(results){
    return results[0].beats===results[1].name
}

playAgainBtn.addEventListener('click' ,()=>{
gameDiv.classList.toggle('hidden')
resultsDiv.classList.toggle('hidden')
wrap.classList.add('hidden')
btnRules.style.right='25px';
 rusultDivs.forEach(resultDiv =>{
    resultDiv.innerHTML=""

    resultDiv.classList.remove('winner')
 })
 resultsText.innerText=""
 resultsWinner.classList.toggle('hidden')
 resultsDiv.classList.toggle('result_show_winner')

})


function keepScore(point){
    score += point
    scoreNumber.innerText=score
    localStorage.setItem("scoreNumber",score.toString());
}


function keepScorec(point){
    score1 += point
    scoreNumber1.innerText=score1
    localStorage.setItem("scoreNumber1",score1.toString());  
}


const next= document.querySelector('.next_btn')
const container= document.querySelector('.container')
const Cong=document.querySelector('.congrat')
next.addEventListener('click',()=>{
    container.classList.toggle('hidden')
    Cong.classList.toggle('hidden')
    resultsDiv.classList.toggle('hidden')
    wrap.classList.toggle("hidden")
    btnRules.style.right='25px';
    })

const again=document.querySelector('.play_again1')

again.addEventListener('click' ,()=>{
    gameDiv.classList.toggle('hidden')
    container.classList.toggle('hidden')
    Cong.classList.toggle('hidden')
    history.go(0);
})


