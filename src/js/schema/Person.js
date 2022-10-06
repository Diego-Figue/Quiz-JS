class Person {
    name = '';

    constructor(name) {
        this.name = name;
        this.startQuestions();
    }

    startQuestions() {
        return;
    }
}

const instance1 = new Person('Jaime');

console.log(instance1);
