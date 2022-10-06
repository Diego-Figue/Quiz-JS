//Import of schemas and classes
import { PrintDOM } from './schema/PrintDom.js';

import { body, startBtn, inputValue } from './nodes.js';
import { formView } from './views.js';


// Principal Function
const loadInterface = () => {
    const userName = inputValue.value;
    const pincel = new PrintDOM();
    pincel.cleanContainer();
    body.innerHTML = formView;
    // pincel.loadLastResponse();
};

// Add Event listeners
startBtn.addEventListener('click', loadInterface);
// window.addEventListener('load', loadInterface);
