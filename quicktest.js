const button = document.querySelector('.btn');

const header = document.querySelector('h1');

const resetbtn = document.querySelector('.reset');

const minus = document.querySelector('.minusbtn');

const previousMessage = document.querySelector('.previous-message');

let clicks = 0;

const nextMessage = document.querySelector('.next-message');

let messageIndex = 0;

const messages = [
    'Keep going!',
    "You're making progress!",
    'One step at a time!',
    'poopy!'

];

previousMessage.addEventListener('click', () => {

      messageIndex -= 1;

    if(messageIndex < 0 ){

        messageIndex = messages.length - 1;
    }

    messageText.textContent = messages[messageIndex];

})



const messageText = document.querySelector(`.message`);

messageText.textContent = messages[0];

nextMessage.addEventListener('click', () => {

    messageIndex += 1;

    if(messageIndex >= messages.length){

        messageIndex = 0;
    }

    messageText.textContent = messages[messageIndex];
})


button.addEventListener('click', () => {

    clicks += 1;

    updateHeading();

})

resetbtn.addEventListener('click', () => {

    clicks = 0;

    updateHeading();

    header.textContent = `Start Clicking!`;


})

minus.addEventListener('click', () => {

    if (clicks > 0) {

        clicks -= 1;

    }

    updateHeading();

})

function updateHeading () {


    if (clicks === 0) {

        header.style.color = 'gray';
        minus.disabled = true;
    }else {

        header.style.color = 'green';
        minus.disabled = false;


    }

    if (clicks === 1){

        header.textContent = `You clicked ${clicks} time`;

    }else {


        header.textContent = `You clicked ${clicks} times`
    }
}

updateHeading();