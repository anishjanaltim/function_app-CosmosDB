const dbInstance = require("../utils/db.js");

module.exports = async function (context, req) {

    const id = dbInstance.getId();

    const { resource: item } = await dbInstance.container.item(id, id).delete();

    context.res = {
        body: `Resource : ${id} deleted successfully`
    };
}