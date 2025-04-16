const dbInstance = require("../utils/db.js");

module.exports = async function (context, req) {

    const querySpec = {
        query: `SELECT * FROM ${dbInstance.container.id} f WHERE  f.name = @name`,
        parameters: [{
            name: "@name",
            value: `${req.query.name}`,
        }],
    };

    const {resources: items} = await dbInstance.container.items.query(querySpec).fetchAll();

    const currentItemObj = items[0]
    const itemScore = currentItemObj.score
    currentItemObj.score = itemScore + 1;

    const id = dbInstance.getId()
    console.log(id)
    const {resource: updatedItem} = await dbInstance.container.item(id, id).replace(currentItemObj)
    
    context.res = {
        body: `Your new score item has been increased by 1 successfully! ${updatedItem.name} - ${updatedItem.score}`
    };
}