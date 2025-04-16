const dbInstance = require("../utils/db.js");

module.exports = async function (context, req) {
 
    let scoreItem = {
        "name": req.query.name,
        "score": 0
    }

    const { resource: scoreCount } = await dbInstance.container.items.create(scoreItem);

    dbInstance.setId(scoreCount.id)
    
    context.res = {
        body: `Your new score item has been created successfully! ${scoreCount.name} - ${scoreCount.score}`
    };
}