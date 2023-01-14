class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.field = field;
    }
}

class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new ValidationError("Harus lebih dari 0","numbers");
        }

        let total = 0;
        for (const number of numbers) {
            total += number;
        }
        return total;
    }
}

try {
    console.log(MathUtil.sum());
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Error di Field ${error.field} dengan error : ${error.message}`);
    } else {
        console.log(`Error : ${error.message}`);
    }
} finally {
    console.log("Program Selesai");
}