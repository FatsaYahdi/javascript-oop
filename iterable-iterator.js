class CounnterIteratorResult {
    constructor(value, done) {
        this.done = done;
        this.value = value;
    }
}

class CounterIterator {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    next() {
        try {
            if (this.value > this.max) {
                return new CounnterIteratorResult(this.value, true);
            } else {
                return new CounnterIteratorResult(this.value, false);
            }
        } finally {
            this.value++;
        }
    }
}
class Counter {
    constructor(value, max) {
        this.value = value;
        this.max = max;
    }

    [Symbol.iterator]() {
        return new CounterIterator(this.value, this.max);
    }
}

const counter = new Counter(1,20);
for (const value of counter ) {
    console.log(value);
}