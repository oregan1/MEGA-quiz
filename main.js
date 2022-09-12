const questions = [
    {
      "question": "What is the scientific name of a butterfly?",
      "answers": ["Apis", "Coleoptera", "Formicidae", "Rhopalocera"],
      "correctIndex": 3
    },
    {
      "question": "How hot is the surface of the sun?",
      "answers": ["1,233 K", "5,778 K", "12,130 K", "101,300 K"],
      "correctIndex": 1
    },
    {
      "question": "Who are the actors in The Internship?",
      "answers": [
        "Ben Stiller, Jonah Hill",
        "Courteney Cox, Matt LeBlanc",
        "Kaley Cuoco, Jim Parsons",
        "Vince Vaughn, Owen Wilson"
      ],
      "correctIndex": 3
    },
    {
      "question": "What is the capital of Spain?",
      "answers": ["Berlin", "Buenos Aires", "Madrid", "San Juan"],
      "correctIndex": 2
    },
    {
      "question": "What are the school colors of the University of Texas at Austin?",
      "answers": [
        "Black, Red",
        "Blue, Orange",
        "White, Burnt Orange",
        "White, Old gold, Gold"
      ],
      "correctIndex": 2
    },
    {
      "question": "What is 70 degrees Fahrenheit in Celsius?",
      "answers": ["18.8889", "20", "21.1111", "158"],
      "correctIndex": 2
    },
    {
      "question": "When was Mahatma Gandhi born?",
      "answers": [
        "October 2, 1869",
        "December 15, 1872",
        "July 18, 1918",
        "January 15, 1929"
      ],
      "correctIndex": 0
    },
    {
      "question": "How far is the moon from Earth?",
      "answers": [
        "7,918 miles (12,742 km)",
        "86,881 miles (139,822 km)",
        "238,400 miles (384,400 km)",
        "35,980,000 miles (57,910,000 km)"
      ],
      "correctIndex": 2
    },
    {
      "question": "What is 65 times 52?",
      "answers": ["117", "3120", "3380", "3520"],
      "correctIndex": 2
    },
    {
      "question": "How tall is Mount Everest?",
      "answers": [
        "6,683 ft (2,037 m)",
        "7,918 ft (2,413 m)",
        "19,341 ft (5,895 m)",
        "29,029 ft (8,847 m)"
      ],
      "correctIndex": 3
    },
    {
      "question": "When did The Avengers come out?",
      "answers": ["May 2, 2008", "May 4, 2012", "May 3, 2013", "April 4, 2014"],
      "correctIndex": 1
    },
    {
      "question": "What is 48,879 in hexidecimal?",
      "answers": ["0x18C1", "0xBEEF", "0xDEAD", "0x12D591"],
      "correctIndex": 1
    },
  ]

function shuffle(array){
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

function checkAnswer(event){
    const answer = questions[questionCount-1].answers[questions[questionCount-1].correctIndex]
    if (event.target.innerText === answer){
        optionCount = -1;
        questionCount ++;
        console.log('correct');
        scoreCount ++;
        score.innerText = `Score: ${scoreCount}`;
        if (questionCount === questions.length+1){
            window.location.reload();
            setTimeout(function(){
                alert(`Well done you scored full marks`)
            },0)
            
        }
        updateQuestion();
    }else{
        alert(`Not well done you scored ${scoreCount}`)
        questionCount = 1
        scoreCount = 0;
        score.innerText = `Score: ${scoreCount}`;
        updateQuestion();
        window.location.reload();
    }
}

function updateQuestion(){
    timeleft = 20
    questionNumber.innerText = `Question ${questionCount}:`;
    currentQuestion.innerText = questions[questionCount-1].question;
    optionOne.innerText = questions[questionCount-1].answers[0];
    optionTwo.innerText = questions[questionCount-1].answers[1];
    optionThree.innerText = questions[questionCount-1].answers[2];
    optionFour.innerText = questions[questionCount-1].answers[3];
}

function timer(){
    let downloadTimer = setInterval(function(){
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        window.location.reload();
        alert(`Not well done you scored ${scoreCount}`)
        timeleft = 20;
    }
    document.getElementById("progressBar").value = 20 - timeleft;
    timeleft -= 1;
    }, 1000);
}

shuffle(questions);

const questionNumber = document.getElementById('questionNumber');
const currentQuestion = document.getElementById('currentQuestion');
const questionList = document.getElementById('questionList');
const score = document.getElementById('score');

questionNumber.style.display = "none";
currentQuestion.style.display = "none";
questionList.style.display = "none";
score.style.display = "none";

let optionCount = -1;
let questionCount = 1;
let scoreCount = 0;

let startTimer = false;
let timeleft = 10;

const startButton = document.getElementById('startButton');
startButton.onclick = function() {
    timer();
    this.parentNode.removeChild(startButton);
    optionOne.disabled = false;
    optionTwo.disabled = false;
    optionThree.disabled = false;
    optionFour.disabled = false;
    questionNumber.style.display = "block";
    currentQuestion.style.display = "block";
    questionList.style.display = "block";
    score.style.display = "block";
}

questionNumber.innerText = `Question ${questionCount}:`;
currentQuestion.innerText = questions[questionCount-1].question;
score.innerText = `Score: ${scoreCount}`;

questions[questionCount-1].answers.forEach((item) =>{
    optionCount ++;
    const option = document.createElement('button');
    option.setAttribute('id',optionCount);
    option.setAttribute('disabled', true);
    option.innerText = item;
    questionList.appendChild(option); 
});

const optionOne = document.getElementById('0');
const optionTwo = document.getElementById('1');
const optionThree = document.getElementById('2');
const optionFour = document.getElementById('3');

optionOne.addEventListener('click', checkAnswer);
optionTwo.addEventListener('click', checkAnswer);
optionThree.addEventListener('click', checkAnswer);
optionFour.addEventListener('click', checkAnswer);














