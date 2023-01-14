class Person {
    say(name) {
        if (name) {
            this.#sayWithName(name);
        } else {
            this.#sayWithoutName();
        }
    }

    #sayWithoutName() {
        console.log(`Hello`);
    }

    #sayWithName(name) {
        console.log(`Hello ${name}`);
    }
}

const satu = new Person();
satu.say("Satu");
// satu.#sayWithoutName(); // can't acces bc private