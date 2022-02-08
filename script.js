const gamestarter = document.querySelector("#Gamestart");
const gamerestarter = document.querySelector("#Gamerestart");
const showrandomnumber = document.querySelector("#Shownumber");
const numberInput = document.querySelector("#InputNumber");
const getputNumber = document.querySelector("#InputNumber input");
//const showStrikeResult = document.querySelector(".ShowResults");
//const showBallResult = document.querySelector(".ShowResults");
const RandomNumber1 = Math.floor(Math.random()*9 +1);
const RandomNumber2 = Math.floor(Math.random()*10);
const RandomNumber3 = Math.floor(Math.random()*10);
//let tryinputNumber = [];
//const newNumber = parseInt(getputNumber.value);

gamestarter.addEventListener("click",makeRandomNumber);
gamerestarter.addEventListener("click",refreshfunction);

function makeRandomNumber(event){
    event.preventDefault();
    //const RandomNumber1 = Math.floor(Math.random()*9 +1);
    //const RandomNumber2 = Math.floor(Math.random()*10);
    //const RandomNumber3 = Math.floor(Math.random()*10);
    showrandomnumber.innerText = `${RandomNumber1}${RandomNumber2}${RandomNumber3}`
    return RandomNumber1, RandomNumber2, RandomNumber3;
}

numberInput.addEventListener("submit",confirmInputNumber);

function confirmInputNumber(event){
    event.preventDefault();
    const newNumber = parseInt(getputNumber.value);
    //console.log(newNumber, typeof(newNumber));
    getinputNumber(newNumber);
    //console.log("Put Three figure number!!");
}
//makeRandomNumbers();
function getinputNumber(newNumber){
    if(newNumber<100||newNumber>=1000){
        alert("Put Three figures!!");
    }else{
        compareNumbers(RandomNumber1, RandomNumber2, RandomNumber3, newNumber);
    }
}

function compareNumbers(RandomNumber1, RandomNumber2, RandomNumber3, newNumber){
    const RN1 = RandomNumber1.toString(10);
    const RN2 = RandomNumber2.toString(10);
    const RN3 = RandomNumber3.toString(10);
    const RNresult = RN1+RN2+RN3;
    const INum = newNumber.toString(10);
    let countStrike = 0;
    let countBall = 0;
    let countChance = 10;
    let flag = 0;
    //console.log(RN1, RN2, RN3, typeof(RN1),typeof(RN2), typeof(RN3));
    //console.log(INum, typeof(INum));
    //console.log(INum.indexOf(RN1));
    //console.log(INum.indexOf(RN2));
    //console.log(INum.indexOf(RN3));
    //console.log(RNresult, typeof(RNresult));
    
    for(let i=0;i<INum.length;i++){
        let slicedINum = INum.slice(i,i+1);
        //console.log(slicedINum);
        if(slicedINum===RN1){
            if(flag!==0){
                countBall+=1;
            }else{
                countStrike+=1;
            }
        }else if(slicedINum===RN2){
            if(flag!==1){
                countBall+=1;
            }else{
                countStrike+=1;
            }
        }else if(slicedINum===RN3){
            if(flag!==2){
                countBall+=1;
            }else{
                countStrike+=1;
            }
        }
        flag+=1;
    }
    console.log("countStrike : ", countStrike);
    console.log("countBall : ", countBall);
    console.log("countChance : ", countChance);
    console.log("flag : ",flag);
}

function refreshfunction(){
    location.reload();
}