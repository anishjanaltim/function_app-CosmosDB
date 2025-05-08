
var multipart = require("parse-multipart-data");

module.exports = async function (context, req) {
    if (req.body) {
        const bodyBuffer = Buffer.from(req.body);
  
        const boundary = multipart.getBoundary(req.headers["content-type"]);
        const blobs = multipart.parse(bodyBuffer, boundary);
        console.log(blobs[0].data)
        
        context.res = {
          body: `file uploaded`
        }
      }
};
