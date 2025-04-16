const { CosmosClient } = require("@azure/cosmos");
const { endpoint, key, databaseId, containerId } = require("./config");

class DB {
    constructor() {
        if (DB._instance) {
            throw new Error("Singleton classes can't be instantiated more than once.");
        }
        DB._instance = this;
        this.client = new CosmosClient({ endpoint, key });
        this.database = this.client.database(databaseId);
        this.container = this.database.container(containerId);
        this.itemId = null
    }

    setId(id){
        this.itemId = id
    }

    getId(){
        return this.itemId 
    }

}

const instance = new DB();

module.exports = instance;
