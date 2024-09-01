const score = JSON.parse(localStorage.getItem('score')) || {wins : 0, losses : 0, ties : 0}; // using || for default value
const result1 = document.querySelector('.js-result1');
const result2 = document.querySelector('.js-result2');
const paragrapheScore = document.querySelector('.js-score');

paragrapheScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;


function playGame(playerMove){
    const computerMove  = pickComputerMove();

    let result = ''; // You lose./ You win./ Tie.
    
    // `You picked ${playerMove}. Computer picked ${computerMove}. You ${result}.`

    if(playerMove === 'rock'){
        switch(computerMove){
            case 'rock':
                score.ties ++;
                result1.innerHTML = 'Tie.';
                break;
            case 'paper':
                score.losses ++;
                result1.innerHTML = 'You lose.';
                break;
            case 'scissors':
                score.wins ++;
                result1.innerHTML = 'You win.';
                break;
        }

    }
    else if(playerMove === 'paper'){
        switch(computerMove){
            case 'rock':
                score.wins++;
                result1.innerHTML = 'You win.';
                break;
            case 'paper':
                score.ties++;
                result1.innerHTML = 'Tie.';
                break;
            case 'scissors':
                score.losses++;
                result1.innerHTML = 'You lose.';
                break;
        }
    }
    else{
        switch(computerMove){
            case 'rock':
                score.losses++;
                result1.innerHTML = 'You lose.';
                break;
            case 'paper':
                score.wins++;
                result1.innerHTML = 'You win.';
                break;
            case 'scissors':
                score.ties++;
                result1.innerHTML = 'Tie.';
                break;
        }
    }

    localStorage.setItem('score', JSON.stringify(score));

    result2.innerHTML = `You <img src="/10-img/${playerMove}-emoji.png" alt="${playerMove}"> <img src="/10-img/${computerMove}-emoji.png" alt="${computerMove}"> Computer`;
    paragrapheScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
//             alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
// Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);

}

function pickComputerMove(){
    const randomNumber = Math.random();

    if(randomNumber < 1/3){
        return 'rock';
    }
    else if(randomNumber < 2/3){
        return 'paper';
    }
    else{
        return 'scissors';
    }
}

//show current result
// function showResult(){
//     alert(`Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
// }

//Reset count
function resetCount(){
    score.wins=0;
    score.losses=0;
    score.ties=0;
    localStorage.setItem('score', JSON.stringify(score));
    paragrapheScore.innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

let cpt = 0;
let id;
const autoPlayButton = document.querySelector('.js-auto-play');
function autoPlay(){
    if( cpt  == 0 ){
        autoPlayButton.innerHTML = 'Stop Play';
        id = setInterval( function(){
            playGame(pickComputerMove());
        }, 1000 );
        cpt = 1;
    }
    else{
        autoPlayButton.innerHTML = 'Auto Play';
        clearInterval(id);
        cpt = 0;
    }
}

//keydowns
document.addEventListener('keydown', (event) => {
        if(event.key === 'r'){
            playGame('rock');
        }
        else if(event.key === 'p'){
            playGame('paper');
        }
        else if(event.key === 's'){
            playGame('scissors');
        }
        console.log(event.key);
    });


