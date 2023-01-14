class Counter {
    #counter = 0;

    increment() {
        this.#counter++;
    }

    decrement() {
        this.#counter--;
    }

    get() {
        return this.#counter;
    }
}

const conter = new Counter();

conter.increment();
conter.increment();
conter.increment();
conter.increment();
conter.increment();

conter.counter = 100; // tidak merubah private counter(#)
// conter.#counter = 100; // #counter not accesable


console.log(conter.get());
// console.info(conter);