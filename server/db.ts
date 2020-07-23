import * as mongoose from 'mongoose';

class Database {

    private dbURL = 'mongodb://localhost:27017/crushes-api';

    private dbconnection;

    constructor() {}

    createConnection() {
        mongoose.connect(this.dbURL);
        this.logger(this.dbURL);
    }

    logger(uri) {
        this.dbconnection = mongoose.connection;
        this.dbconnection.on('connected', () => console.log("Mongoose está conectado"));
        this.dbconnection.on('error', error => console.error.bind(console, "Erro na conexão: " + error));
    }
}

export default Database;