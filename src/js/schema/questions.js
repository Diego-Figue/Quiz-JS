//Import dynamic data
import { DStaticQUestions } from '../data.js';
import { DdynamicQuestions } from '../data.js';

export class Questions {
    static postStaticQuestions() {
        return DStaticQUestions;
    }

    static postDynamicQuestions() {
        return DdynamicQuestions;
    }
}

Questions.postDynamicQuestions();
