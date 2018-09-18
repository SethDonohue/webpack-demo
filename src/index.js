import _ from 'lodash';
import './style.css';

const component = () =>{
    let element = document.createElement('div');
    element.innerHTML = _.join(['Hello.', 'Webpack'], ' ');
    element.classList.add('hello');
    return element;
}

document.body.appendChild(component());

