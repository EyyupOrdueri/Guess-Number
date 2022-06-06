const input = document.getElementById("number");
const check = document.getElementById("check");
const restart = document.getElementById("restart");
const chance = document.getElementById("span");
const para = document.getElementById("para");
const lastPara = document.getElementById("last-para");
const randomNumber = Math.floor(Math.random() * 100 + 1);


console.log("Hey, why are you cheating???");
console.log(`The answer is ${randomNumber - 1} + 1 btw..`);

check.addEventListener("click", eyyup);

function eyyup () {
    if (chance.innerText >= 1) {

        if ( input.value <= 100 && input.value >= 1) {
    
            if (input.value < randomNumber) {
                para.innerText = `Your guess is ${input.value} which was too low. Please guess a greater number.`
                chance.innerText -= 1
                input.value= null;

                if (chance.innerText == 0) {
                    para.innerText = "Sorry! You don't have any chances. You can try again."
                    document.querySelector("body").style.backgroundColor = "tomato";

                    check.classList.remove("show");
                    check.classList.add("dont_show");
                    restart.classList.remove("dont_show");
                    restart.classList.add("show");
                }
            }
    
            else if (input.value > randomNumber) {
                para.innerText = `Your guess is ${input.value} which was too high. Please guess a lower number.`
                chance.innerText -= 1
                input.value = null;

                if (chance.innerText == 0) {
                    para.innerText = "Sorry! You don't have any chances. You can try again."
                    document.querySelector("body").style.backgroundColor = "tomato";

                    check.classList.remove("show");
                    check.classList.add("dont_show");
                    restart.classList.remove("dont_show");
                    restart.classList.add("show");
                }
            }
    
            else  if (input.value == randomNumber) {
                para.innerText = "Congrats🎉"
                lastPara.innerText = `Your guess is true. Are you mind reader🧐`
                document.querySelector("body").style.backgroundColor = "lightgreen";

                check.classList.remove("show");
                check.classList.add("dont_show");
                restart.classList.remove("dont_show");
                restart.classList.add("show");
            }
    
        }
    
        else {
            para.innerText = "Please enter a number between 1 to 100!"
            input.value = null;
        }
    }

    else {
        check.classList.remove("show");
        check.classList.add("dont_show");
        restart.classList.remove("dont_show");
        restart.classList.add("show");
    }
}