const button = document.querySelector('.btn');

const header = document.querySelector('h1');

const resetbtn = document.querySelector('.reset');

const minus = document.querySelector('.minusbtn');

let clicks = 0;

button.addEventListener('click', () => {

    clicks += 1;

    if(clicks === 1) {
        header.textContent = `Clicked ${clicks} time`;
    }
    else {
        header.textContent = `Clicked ${clicks} times`;
    }

})

resetbtn.addEventListener('click', () => {

    clicks = 0;

    header.textContent = `Clicked ${clicks} times`;
})

minus.addEventListener('click', () => {

    if (clicks === 0) {
        header.textContent = `Clicks ${clicks} times`;
    }else if (clicks === 1){

     header .textContent = `Clicked ${clicks} times`;

    }else {
        clicks -= 1;

        header.textContent = `Clicks ${clicks} times`;
    }
})
