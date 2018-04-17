const kids = document.getElementById('menu1').children;
const one = document.getElementById('num1');
const two = document.getElementById('num2');
var correct;
const newNum = document.getElementById('new');
const score = document.getElementById('points');
var pts = 0;
const playerAnswer = document.getElementById('answer');
var affirmative = document.getElementById('correct'); 
var wrong = document.getElementById('wrong');

function toggleClass(el) {
    for(var i = 0; i < kids.length; i++) {
      kids[i].className = "class1";
    }
  el.className = "class2";
}

function randomNumber(min,max){
 return Math.floor(Math.random() * (max - min + 1)+ min );
}

console.log(randomNumber(1,1000));

function randomNum() {
    one.innerHTML = randomNumber(1,10);  
    two.innerHTML = randomNumber(2,11);
    numbers1= Number(one.innerHTML);
    numbers2= Number(two.innerHTML);
    correct = numbers1 + numbers2;
}

function checkAnswer(c) {
  console.log(c);
}

function add(i) {
   pts += i; 
   score.innerHTML = pts;
}


function checkAnswer() {
    var x = document.getElementById("myNumber");
    var defaultVal = x.defaultValue;
    var currentVal =x.value;
    if (currentVal == correct) {
     document.getElementById("demo").innerHTML = "Your Answer Matches The correct Answer: "
     +correct+" and "+x.value
     +"<br> Great Job! ";
        randomNum();
        add(1);
    affirmative.play();

    } else {
        add(-1);
        document.getElementById("demo").innerHTML = "The Correct Answer: " + correct + "<br> Your answer was: " + currentVal + "<br> Please Try Again ";
        wrong.play();
    }
}

    



