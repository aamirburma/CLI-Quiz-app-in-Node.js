/**
 * Reference from https://www.zoomtventertainment.com/web-series-movies/article/money-heist-fans-look-here-can-you-answer-these-15-questions-about-your-favourite-netflix-show/773682
 */
const readline = require("readline");
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
console.log("Money Heist fans look here! Can you answer these 15 questions about your favourite Netflix show?")
var name = "";
r1.question("Enter Your Name: ", (userName) => {
    name = userName;
    console.log("Welcome " + name + "\n");
    quiz();
});

var i = 0;
var score = 0;
const questions = [
    "How many people did The Professor recruit to carry out the plan to occupy the Royal Mint of Spain?",
    "Inspector Raquel’s mother suffers from what medical condition?",
    "How much currency does the gang print at the Royal Mint?",
    "The Professor’s first name is eventually revealed. What is it?",
    "Before giving up on society and turning to a life of crime, what was Moscow’s occupation?"
];
const options = [
    ["8", "9", "10", "11"],
    ["Alzheimer’s Disease", "Paranoid Schizophrenia", "Post-Traumatic Stress Disorder", "Cancer"],
    ["879 million euros", "926 million euros", "984 million euros", "777 million euros"],
    ["Andrés", "Aníbal", "Sergio", "Racquel"],
    ["Hacker", "Soldier", "Miner", "Clerk"]
];

var quiz = () => {
    if (i === 0) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + ") " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "1") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][3] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 1) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "1") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][1] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 2) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "3") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][2] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 3) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "3") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else if (i === 4) {
        console.log(questions[i]);
        for (var j = 0; j < 4; j++) {
            console.log((j + 1) + " - " + options[i][j]);
        }
        r1.question("Answer:- ", (ans) => {
            if (ans === "3") {
                score += 5;
                console.log("Great Job!!" + "\tYour Score :- " + score);
                i += 1;
                quiz();
            } else {
                console.log("Sorry Wrong answer!!" + "\nRight answer is : " + options[i][0] + "\tYour Score :- " + score);
                score -= 2;
                i += 1;
                quiz();
            }

        });
    } else {
        console.log("Final Score Of " + name + ": " + score + "/" + (questions.length * 5));
        r1.close();
    }
}