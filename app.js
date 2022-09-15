const screenInput = document.getElementById('screenInput');
const answerScreen = document.getElementById('answerScreen');
const clearContent = document.getElementById('clearContent');
const  equalOperator = document.getElementById('equalOperator');
const powerBtn = document.getElementById('powerBtn'); 

// Simple Calculator

function keyPress (value) {
    screenInput.innerHTML += value;
}

clearContent.addEventListener('click', function() {
    screenInput.innerHTML = '';
    answerScreen.innerHTML ='0';
    }
);

powerBtn.addEventListener('click', function () {
    screenInput.innerHTML = '';
    answerScreen.innerHTML = '';
    }
);

equalOperator.addEventListener("click", function() {
    let p = screenInput.innerHTML;
    let q = eval(p);
    answerScreen.innerHTML = q;
    screenInput.innerHTML = "";
    }
);



