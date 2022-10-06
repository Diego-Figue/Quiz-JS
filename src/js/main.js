//Import of schemas and classes
import { PrintDOM } from './schema/PrintDom.js';

// Principal Function
const loadInterface = () => {
    const pincel = new PrintDOM();
    pincel.loadLastResponse();
};

// Add Event listeners
window.addEventListener('load', loadInterface);
