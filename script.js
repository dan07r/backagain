

const button = document.querySelector('.btn');

const heading = document.querySelector('h1');

let clicks = 0;

button.addEventListener('click', () => {

        clicks += 1;

        if(clicks === 1){
            heading.textContent = `Clicked ${clicks} time`;

        }
        else {
             heading.textContent = `Clicked ${clicks} times`;

        }


});