import _ from 'lodash';
import './style.css';
import shoesImg from './glowShoes.jpg';
import printMe from './print.js';

const component = () =>{
    let element = document.createElement('div');
    let button = document.createElement('button');

    element.innerHTML = _.join(['Hello.', 'Webpack'], ' ');

    button.innerHTML = 'Click me then check the console';
    button.onclick = printMe;

    element.appendChild(button);

    element.classList.add('hello');
    const myBG = new Image();
    myBG.src = shoesImg;
    element.appendChild(myBG);

    return element;
}

document.body.appendChild(component());

