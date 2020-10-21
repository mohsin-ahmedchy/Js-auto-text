let text = "Enjoy your time,because time never wait for you";
let index = 0;
function showText(){
    document.body.innerText = text.slice(0, index);
    index++;

    if(index > text.length){
        index = 0;
    }
    
}
setInterval(showText, 100);