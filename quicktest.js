const button = document.querySelector('.btn');

const header = document.querySelector('h1');

const resetbtn = document.querySelector('.reset');

const minus = document.querySelector('.minusbtn');

const previousMessage = document.querySelector('.previous-message');

let clicks = 0;

const nextMessage = document.querySelector('.next-message');

let messageIndex = 0;

const messageText = document.querySelector(`.message`);

const messagePosition = document.querySelector(`.message-position`);

const randomMessage = document.querySelector(`.random-message`);

const resetCount = document.querySelector(`.resetCount`);

const tracker = [0,0,0,0];

const messages = [
    
    { text: 'Keep going!', author: 'Daniel' },
    { text: "You're making progress!", author: 'Coach' },
    { text: 'One step at a time!', author: 'Reminder' },
    { text: 'poopy butt', author: 'Daniel'}

];

const counter = document.querySelector('.count');

resetCount.addEventListener(`click`, () => {

    for(let i = 0; i < tracker.length; i++){

        tracker[i] = 0;
    }

    displayCount();

})

previousMessage.addEventListener('click', () => {

      messageIndex -= 1;

    if(messageIndex < 0 ){

        messageIndex = messages.length - 1;
    }

    updateMessage();

})

nextMessage.addEventListener('click', () => {

    messageIndex += 1;

    if(messageIndex >= messages.length){

        messageIndex = 0;
    }

    updateMessage();
})

randomMessage.addEventListener('click', () => {

    
    const previousIndex = messageIndex;

    if(messages.length > 1) {

    do{
        
        messageIndex = Math.floor(Math.random() * messages.length);

    } while(previousIndex === messageIndex);

        updateMessage();

    }

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


        header.textContent = `You clicked ${clicks} times`;
    }
}

function updateMessage () {

    messageText.textContent = `${messages[messageIndex].text} — ${messages[messageIndex].author}`;

    messagePosition.textContent = `${messageIndex + 1} of ${messages.length}`;

    tracker[messageIndex] += 1;

    displayCount();



}

function displayCount() {


    if (tracker[messageIndex] === 1) { 
    
        counter.textContent = `Shown ${tracker[messageIndex]} time`;

    }else {
        
        counter.textContent = `Shown ${tracker[messageIndex]} times`;

    }

}

updateMessage();

updateHeading();