//import of the value of input user
import { inputValue } from '../js/nodes.js';

//view DOM
export const formView = `
<section class='cardQ'>
    <div class='cardQ__header'>
        <h1 class='cardQ__header--title'>¿QUESTION?</h1>
    </div>
    <div class='cardQ__body'>
    
    </div>
    <div class='cardQ__footer'>
        <button class='cardQ__footer--button'>NEXT</button>
    </div>
</section>
`;

export const viewStatic = `
<div class='cardQ__body--option'>
    <p class='option'>A</p>
    <h1 class='option__text'>
        text
    </h1>
</div>
<div class='cardQ__body--option'>
    <p class='option'>B</p>
    <h1 class='option__text'>
        text
    </h1>
</div>
<div class='cardQ__body--option'>
    <p class='option'>C</p>
    <h1 class='option__text'>
        text
    </h1>
</div>
<div class='cardQ__body--option'>
    <p class='option'>D</p>
    <h1 class='option__text'>
        text
    </h1>
</div>
`;

export const viewDinamyc = `
<div class='cardQ__body--option'>
    <h1 class='option__text'>
        SI
    </h1>
</div>
<div class='cardQ__body--option'>
    <h1 class='option__text'>
        NO
    </h1>
</div>
`;

export const viewInfo = `
<div class="info">
    <h1 class="text info__user">User: ${inputValue.value}</h1>
    <h1 class="text info__timer">Timer: </h1>
    <h1 class="text info__question">Question 1 of 20</h1>
</div>
`;