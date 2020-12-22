
const quizQuestions = [
    {
        'question': 'Which of the following is correct about callbacks?',
        'answer': 'Both of the above',
        'explanation': 'A callback is a plain JavaScript function passed to some method as an argument or option. Some callbacks are just events, called to give the user a chance to react when a certain state is triggered',
        'answers': [
            'A callback is a plain JavaScript function passed to some method as an argument or option', 
            'Some callbacks are just events, called to give the user a chance to react when a certain state is triggered', 
            'Both of the above', 
            'None of the above'
        ],
        'index':0
    },
    {
        'question': 'Which of the following function of Number object forces a number to display in exponential notation?',
        'answer': 'toExponential()',
        'explanation': 'toExponential(): Forces a number to display in exponential notation, even if the number is in the range in which JavaScript normally uses standard notation',
        'answers': [
            'toExponential()',
            'toFixed()',
            'toPrecision()',
            'toLocaleString()'
        ],
        'index':1
    },
    {
        'question': 'Which of the following function of Boolean object returns a string of either "true" or "false" depending upon the value of the object?',
        'answer': 'toString()',
        'explnantion': 'toString() − Returns a string of either true or false depending upon the value of the object',
        'answers': [
            'toSource()', 
            'valueOf()', 
            'toString()', 
            'None of the above'
        ],
        'index':2
    },
    {
        'question': ' Which of the following function of String object executes the search for a match between a regular expression and a specified string?',
        'answer': 'search()',
        'explation': 'search() − Executes the search for a match between a regular expression and a specified string',
        'answers': [
            'concat()', 
            'match()', 
            'replace()', 
            'search()'
        ],
        'index':3
    },
    {
        'question': 'Which of the following function of String object creates a string to be displayed in a big font as if it were in a <big> tag?',
        'answer': 'big()',
        'explanation': 'big() − Creates a string to be displayed in a big font as if it were in a <big> tag',
        'answers': [
            'anchor()', 
            'big()', 
            'blink()', 
            'italics()'
        ],
        'index':4
    },
    {

    }
]      
    
const displayQuestions = document.querySelector('.questions');
const nextQuestion = document.getElementById('nextQuestion');
const toTotalQuestion = document.querySelector('.Total-Questions');
const quizTimer = document.querySelector('.quiz-timer');
const score = document.querySelector('.score');
//const selectAnswer = document.querySelector('input[type="radio"]');
const selectAnswer = document.querySelector('ul');
const answers = document.querySelectorAll('li');
const scoreCard = document.querySelector('.score-card');
const myScore = document.querySelector('.my-score');
const restartQuiz = document.querySelector('.restart-quiz');
const startQuiz = document.querySelector('.start-quiz')
const quizInfo = document.querySelector('.quiz-info');
scoreCard.style.display = 'none';
const showAnswers = [...answers];
 nextQuestion.style.display = 'none';
//displayQuestions.textContent = questions[0].Question;

//count down timer
function startTimer(duration, display) {
    let timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;            
        }
    }, 1000);

    
    console.log('timer ', timer)
    
}

let total = quizQuestions.length;
let countQuestion = 0;
let count = 0;
let questionCounter = 1;
let answer = 0;
let answered = false;

loadQuiz();

function loadQuiz(){
    displayQuestions.textContent = quizQuestions[count].question;
    toTotalQuestion.textContent = `Question ${questionCounter} / ${total}`;
    showAnswers.forEach((element, i, arr) => {
        //using this with radio button
        element.firstElementChild.value = quizQuestions[count].answers[i];
        element.firstElementChild.nextElementSibling.textContent = quizQuestions[count].answers[i]
        element.firstElementChild.checked = false;  
    });
}

document.createElement('button').v

function loadScore(scoreValue) {
    const scoreTitle = document.querySelector('.displayPass')    
    
    if(scoreValue < 3) {
        myScore.textContent = scoreValue;
        scoreTitle.textContent = 'Failed please try again';
    } else {
        myScore.textContent = scoreValue;
        scoreTitle.textContent = 'Congratulations';;
    }
    scoreCard.style.display = 'block';
}

restartQuiz.addEventListener('click', () => {
    window.location.reload();
    quizInfo.style.display = 'block';
   
})

startQuiz.addEventListener('click', ()=> {
    //set timer minutes
    let fiveMinutes = 60 * 5;
    let display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    quizInfo.style.display = 'none';
     nextQuestion.style.display = 'block';
})

nextQuestion.addEventListener('click', (e) => {
    //questionCounter += 1;
    if(questionCounter === total) {
        if(answered == true) {
            answer += 1;
        }
        answered = false;
        console.log('completed')
        //answered = false;
        loadScore(answer) 
        return 'Completed';
    }
    questionCounter += 1;
    count += 1;
    displayQuestions.textContent = quizQuestions[count].question;
    toTotalQuestion.textContent = `Question ${questionCounter} / ${total}`;
    showAnswers.forEach((element, i, arr) => {
        //using this with radio button
        element.firstElementChild.value = quizQuestions[count].answers[i];
        element.firstElementChild.nextElementSibling.textContent = quizQuestions[count].answers[i]
        element.firstElementChild.checked = false;
    });
    
    if(answered == true) {
        answer += 1;
    }
    answered = false;
});
//if clicked set to false
//answered = false;
selectAnswer.addEventListener('click', (e) => {
    
    if (e.target.nodeName === 'LI') {
        return false;
    }
    console.log(e.target.textContent, e.target.value)

    if (e.target.textContent === quizQuestions[count].answer || e.target.value === quizQuestions[count].answer) {
        answered = true;
        console.log('answered ',answered );
        return true;
    } else {
        answered = false;
        console.log('answered ',answered );
        return false;
    }
    
});







