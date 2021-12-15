// Code your solutions in this file
const messages = [];
var txt;

function writeCards(array, evento) {
    for( let i = 0; i < array.length; i++) {
        txt = `Thank you, ${array[i]}, for the wonderful ${evento} gift!`;
        messages.push(txt);
        console.log(txt);

    }

    return messages;
}

function countDown(num) {
    while ( num >= 0) {
        console.log(num);
        num--;
    }
}
