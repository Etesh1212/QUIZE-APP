const quiz=[
    {
        question:"What does HTML stand for?",
        ans1text:"Hot Typing Markup Language",
        ans2text:"Home Typing Modern Language",
        ans3text:"Hyper Text Markup Language",
        ans4text:"Home Testing Mixed Language",
        answer:"HyperText Markup Language",
    },
    {

       question: "Which one of the following headers has the correct HTML syntax?",

        ans1text:"<h1>Welcome</h1>",
        ans2text:"{{h1}}Welcome{{:h1}}",
        ans3text:"{h1:Welcome}",
        answer:"<h1>Welcome</h1>",

    },
    {
        question:"What does HTML stand for?",
        ans1text:"Hot Typing Markup Language",
        ans2text:"Home Typing Modern Language",
        ans3text:"Hyper Text Markup Language",
        ans4text:"Home Testing Mixed Language",
        answer:"Hyper Text Markup Language",
    },
    {
        question:"What does HTML stand for?",
        ans1text:"Hot Typing Markup Language",
        ans2text:"Home Typing Modern Language",
        ans3text:"Hyper Text Markup Language",
        ans4text:"Home Testing Mixed Language",
        answer:"Hyper Text Markup Language",
    }
]

const question=document.getElementById("quiz-container");
console.log(question);
console.log(question.textContent)
const option_a=document.getElementById("text-option-a");
const option_b=document.getElementById("text-option-b");
const option_c=document.getElementById("text-option-c");
const option_d=document.getElementById("text-option-d");

console.log(option_a);
console.log(option_b);
console.log(option_c);
console.log(option_d);
console.log(option_a.textContent);
console.log(option_b.textContent);
console.log(option_c.textContent);
console.log(option_d.textContent);


const submit=document.getElementById("submit");

let currentQuestion=0;
let score=0;

console.log(quiz[currentQuestion].question);
console.log(quiz[currentQuestion].ans1text);
console.log(quiz[currentQuestion].ans2text);
console.log(quiz[currentQuestion].ans3text);
console.log(quiz[currentQuestion].ans4text);


question.textContent=quiz[currentQuestion].question;
option_a.textContent=quiz[currentQuestion].ans1text;
option_a.textContent=quiz[currentQuestion].ans2text;
option_a.textContent=quiz[currentQuestion].ans3text;
option_a.textContent=quiz[currentQuestion].ans4text;







