class MathUtil {
    static sum(...numbers) {
        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

const sum = MathUtil.sum(1,2,3,4,5,6,7,8,9,10);
console.log(sum);