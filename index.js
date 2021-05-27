const names=([`Lisa`, `Kaitlin`, `Jan`]);
function writeCards(names) {
    let message= [];
    for(let i = 0; i < names.length; i++){
     message.push(`Thank you, ${names[i]}, for the wonderful surprise gift!`)
    }
    console.log(message);
    return message;
    }

function countDown (positiveNumber){
    while(positiveNumber >= 0){
        console.log(positiveNumber);
        positiveNumber--;
    }
    }
