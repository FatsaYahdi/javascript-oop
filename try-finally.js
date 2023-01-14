class Counter {
    constructor() {
        this.value = 1;
    }

    next() {
        try {
            return this.value;
        } finally {
            this.value++;
        }
    }
}

const con = new Counter();
console.log(con.next());
console.log(con.next());
console.log(con.next());
console.log(con.next());
console.log(con.next());