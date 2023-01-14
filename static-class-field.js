class Config {
    static name = "Js OOP";
    static version = 1.0;
    static author = "Skizo";
}

const con = new Config();
console.info(con);

// Config.author = "SKULL";     // mengganti static class field

console.info(Config.name);
console.info(Config.version);
console.info(Config.author);