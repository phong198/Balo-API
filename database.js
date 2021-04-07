const mongoose = require("mongoose");
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useUnifiedTopology', true);

class Database {

    constructor() {
        this.connect();
    }

    connect() {
        mongoose.connect("mongodb+srv://vuwit15:vuwit15@cluster0.ma84a.mongodb.net/facebook-clone?retryWrites=true&w=majority")
        .then(() => {
            console.log("Database connected successfully");
        })
        .catch((err) => {
            console.log("Database connected error " + err);
        })
    }
}

module.exports = new Database();