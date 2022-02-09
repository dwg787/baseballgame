const gamestarter = document.querySelector("#Gamestart");
const gamerestarter = document.querySelector("#Gamerestart");
const showrandomnumber = document.querySelector("#Shownumber");
const numberInput = document.querySelector("#InputNumber");
const getputNumber = document.querySelector("#InputNumber input");
const showChanceResult = document.querySelector("#ShowResults span:first-child");
const showStrikeResult = document.querySelector("#ShowResults span:nth-child(2)");
const showBallResult = document.querySelector("#ShowResults span:nth-child(3)");
const showOutResult = document.querySelector("#ShowResults span:last-child");
const RandomNumber1 = Math.floor(Math.random()*9 +1);
const RandomNumber2 = Math.floor(Math.random()*10);
const RandomNumber3 = Math.floor(Math.random()*10);
//let sum = 0;
let countChance = 10;
let OutCount = 0;
//const newNumber = parseInt(getputNumber.value);

gamestarter.addEventListener("click",makeRandomNumber);
gamerestarter.addEventListener("click",refreshfunction);

function makeRandomNumber(event){
    event.preventDefault();
    showrandomnumber.innerText = `${RandomNumber1}${RandomNumber2}${RandomNumber3}`
    return RandomNumber1, RandomNumber2, RandomNumber3;
}

numberInput.addEventListener("submit",confirmInputNumber);

function confirmInputNumber(event){
    event.preventDefault();
    const newNumber = parseInt(getputNumber.value);
    getinputNumber(newNumber);
    countChance-=1;
    if(countChance===-1){
        alert("Game Over!");
        location.reload();
    }
}

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
    const RNary = [RN1, RN2, RN3];
    //const RNresult = RN1+RN2+RN3;
    const INum = newNumber.toString(10);
    let countStrike = 0;
    let countBall = 0;
    //let Ballmark = 0;
    //let flag = 0;
    let slicedINum = "";
    let slicedINumary = [];
    //let filteredRNary = "";
    let numberofsameElement = 0;
    let sum = 0;
    //let finalary = sortedslicedINumary-sortedRNary;

    for(let i=0;i<INum.length;i++){
        slicedINum = INum.slice(i,i+1);
        slicedINumary.push(slicedINum);
        //sortedslicedINumary = slicedINumary.sort();
        const filteredRNary = RNary.filter(x=>{return x === slicedINum});
        //numberofsameElement = filteredRNary.length;
        sum = sum + filteredRNary.length;
        console.log(filteredRNary, filteredRNary.length, sum);

        for(let j=0;j<INum.length;j++){
            //let slicedINum = INum.slice(j,j+1);
            if(slicedINumary[j]===RNary[i]){
                if(j===i){
                    countStrike+=1;
                }else{
                    countBall+=1;
                    countBall+=sum;
                }
            }
        }
        //flag+=1;
        
        if(countStrike===3){
            alert("Congrats! You Win!");
            OutCount+=1;
            OutCounting(OutCount);
            countStrike=0;
            countChance=10;
            //location.reload();
        }    //console.log("OutCount : ", OutCount);
    }
    
    showChanceResult.innerText = `Chance : ${countChance}\n`
    showStrikeResult.innerText = `S : ${countStrike}\n`
    showBallResult.innerText = `B : ${countBall}\n`
    //showOutResult.innerText = `O : ${OutCount}`
    //console.log("countChance : ", countChance);
    //console.log(filteredRNary);
}


function refreshfunction(){
    location.reload();
}
//showOutResult.innerText = `O : ${OutCount}`
function OutCounting(OutCount){
    showOutResult.innerText = `O : ${OutCount}`
}


