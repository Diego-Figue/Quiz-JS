//Import nodes
import { body } from '../nodes.js';

//Import of localStorage get
import { LocalStorageResponses } from '../utils/localStorage.js';

export class PrintDOM {
    _lastResponses = '';

    constructor() {
        this._lastResponses = body;
    }

    cleanContainer() {
        body.innerHTML = '';
    }

    loadLastResponse() {
        // First we clean the place to make a print
<<<<<<< HEAD
        this.cleanContainer();
=======
<<<<<<< HEAD
        // this.cleanContainer();
=======
        this.cleanContainer();
>>>>>>> 47644862d7e0efb1176582719d3d51750de0a5b2
>>>>>>> test

        // Second we get the local Storage to know what we have to show
        const data = LocalStorageResponses.getLocalStorage();

        // And latter we evaluate if the data is empty and what we have to do
        if (data.length == 0) {
<<<<<<< HEAD
            this._lastResponses.innerHTML = '<h1>No results</h1>';
=======
<<<<<<< HEAD
            this._lastResponses.innerHTML += '<h1>No results</h1>';
=======
            this._lastResponses.innerHTML = '<h1>No results</h1>';
>>>>>>> 47644862d7e0efb1176582719d3d51750de0a5b2
>>>>>>> test
        } else {
            this._lastResponses.innerHTML = data.map(
                (item) => `<h1>${item}</h1>`
            );
        }
    }
}
