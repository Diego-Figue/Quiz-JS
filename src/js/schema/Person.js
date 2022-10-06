import { Questions } from './questions.js';

export class Person {
    name = '';

    constructor(name) {
        this.name = name;

        this.startQuestions();
    }

    startQuestions() {
        const dataStatic = Questions.postStaticQuestions();
        const dataDynamic = Questions.postDynamicQuestions();

        console.log(dataDynamic, dataStatic);

        return;
    }
}
