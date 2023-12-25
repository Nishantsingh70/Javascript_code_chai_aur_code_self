// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}

let IntervalID;
const startChangingColor = function(){
    if (!IntervalID){
       IntervalID = setInterval(changeBgColor, 1000)
       //console.log(IntervalID)
       //console.log("Start")
    }
    function changeBgColor(){
           // document.body.style.backgroundColor = randomColor();
           const body = document.getElementById('body')
           body.setAttribute("style", `background-color: ${randomColor()}`)
    }
};

const stopChangingColor =  function(){
    //console.log(IntervalID)
    clearInterval(IntervalID);
    //console.log("Stop")
    IntervalID = null;
};

document.querySelector('#start').addEventListener('click', startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)
