//Import of schemas and classes
import { PrintDOM } from './schema/PrintDom.js';

import { startBtn } from './nodes.js';

// Principal Function
const loadInterface = () => {
    const pincel = new PrintDOM();
    pincel.loadLastResponse();
};

// Add Event listeners
startBtn.addEventListener('click', loadInterface);
// window.addEventListener('load', loadInterface);
