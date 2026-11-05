const button = document.querySelector('.btn');

const header = document.querySelector('h1');

const resetbtn = document.querySelector('.reset');

const minus = document.querySelector('.minusbtn');

let clicks = 0;

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