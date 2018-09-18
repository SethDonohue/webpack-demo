import _ from 'lodash';
import './style.css';
import shoesImg from './glowShoes.jpg';

const component = () =>{
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello.', 'Webpack'], ' ');
    element.classList.add('hello');
    const myBG = new Image();
    myBG.src = shoesImg;
    element.appendChild(myBG);

    return element;
}

document.body.appendChild(component());

