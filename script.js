// add questions
const Quizdata = [
    {
        question: "I’m drunk in the back of the car, and I cried like a baby coming home from the bar",
        options: [
            "All Too Well",
            "Lover",
            "Archer",
            "Cruel Summer", // ✅
            "Illicit Affairs",
            "I Forgot That You Existed"
        ],
        correct: 3,
    },
    {
        question: "This love is good, this love is bad",
        options: [
            "This Love", // ✅
            "All You Had To Do Was Stay",
            "Wildest Dreams",
            "The Archer",
            "New Romantics",
            "Enchanted"
        ],
        correct: 0,
    },
    {
        question: "All I can say is, it was enchanting to meet you",
        options: [
            "All Too Well",
            "Enchanted", // ✅
            "You Are In Love",
            "Begin Again",
            "Invisible String",
            "Daylight"
        ],
        correct: 1,
    },
    {
        question: "I polish up real nice",
        options: [
            "Vigilante Shit",
            "Bejeweled", // ✅
            "Style",
            "Gorgeous",
            "Mastermind",
            "Look What You Made Me Do"
        ],
        correct: 1,
    },
    {
        question: "I once was poison ivy, but now I’m your daisy",
        options: [
            "Blank Space", // ✅
            "Wonderland",
            "Mad Woman",
            "Don't Blame Me",
            "All You Had To Do Was Stay",
            "Wildest Dreams"
        ],
        correct:3 ,
    }
];
// js initialization
const answer = document.querySelectorAll(".answer");
const quiz = document.querySelector("#quiz");

const [questelm, option_1, option_2, option_3, option_4, option_5, option_6] = document.querySelectorAll("#question, .option_1, .option_2, .option_3, .option_4, .option_5, .option_6");

const submitbtn = document.querySelector("#submit");

let currentquiz=0;
let score=0;

//load quiz functions

const loadQuiz = () => {
    const {question, options} = Quizdata[currentquiz];
    console.log(question);
    questelm.innerText = question;

    options.forEach((curropt, index) => (window[`option_${index+1}`].innerText = curropt)
        
    );
};

const getselectedoption = () => {
    let ans_index;
    answer.forEach((curropt, index) => {
       if(curropt.checked){
        ans_index = index;
       }
})
return ans_index;
}

deselectedanswer = () => {
    answer.forEach((curropt) => curropt.checked = false);
}
loadQuiz();
 // button click
 submitbtn.addEventListener('click', ()  => {
    const selectedIndex = getselectedoption();
    console.log(selectedIndex);
 if(selectedIndex===Quizdata[currentquiz].correct){
    score = score+1;
 }
    currentquiz++;

    if(currentquiz<Quizdata.length){
        deselectedanswer();
        loadQuiz();
    }
    else{
        quiz.innerHTML = `
        <div class=result>
        <h2 id="tsh2"> Congratulation Your Score is ${score}/${Quizdata.length}</h2>
<p id="ts12"> Hope You Are Excited😃💖 For TS12 Album✨ - The Life Of A Show Girl...❤️‍🔥</p>
<button class="reload-button" onclick="location.reload()">Play Again🔁</button>
        </div>`
    }
 })