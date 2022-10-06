//Import of schemas and classes
import { PrintDOM } from './schema/PrintDom.js';

import { startBtn, inputValue } from './nodes.js';
// import { formView } from './views.js';
import { Person } from './schema/Person.js';

// Principal Function
const loadInterface = () => {
    // First we ge the user name
    const userName = inputValue.value;

    //second we clean the DOM to show the questions
    const pincel = new PrintDOM();
    pincel.cleanContainer();

    //Instance of a person
    const subject = new Person(userName);
};

// Add Event listeners
startBtn.addEventListener('click', loadInterface);
// window.addEventListener('load', loadInterface);
