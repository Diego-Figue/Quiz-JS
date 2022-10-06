//Import static data
import { DStaticQUestions } from '../data.js';

export class StaticQuestions {
    _data = [];

    constructor() {
        this._data = DStaticQUestions;
    }

    postStaticQuestions() {
        return this._data;
    }
}

const s = new StaticQuestions();
s.postStaticQuestions();
