//Import dynamic data
import { DdynamicQuestions } from '../data.js';

export class dynamicQuestions {
    _data = [];

    constructor() {
        this._data = DdynamicQuestions;
    }

    postDynamicQuestions() {
        return this._data;
    }
}

const s = new dynamicQuestions();
s.postDynamicQuestions();
