class MathUtil {
    static sum(...numbers) {
        if (numbers.length === 0) {
            throw new Error("Harus lebih dari 0");
        }

        let result = 0;
        for (const number of numbers) {
            result += number;
        }
        return result;
    }
}

try {
    console.log(MathUtil.sum());
    console.log("Kode Block Try Akan Berhenti");
} catch (error) {
    console.error(`Terjadi error : ${error.message}`);
} finally {
    console.log("Kode Program Selesai");
}
// console.log("Kode Program Tidak Akan Berhenti");