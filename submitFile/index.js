
var multipart = require("parse-multipart-data");

module.exports = async function (context, req) {
    if (req.body) {
        const bodyBuffer = Buffer.from(req.body);
  
        const boundary = multipart.getBoundary(req.headers["content-type"]);
        const parts = multipart.parse(bodyBuffer, boundary);

        console.log(parts)
        context.done();
      }
};
