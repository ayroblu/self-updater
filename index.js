const { execSync } = require("child_process");
const http = require("http");

http
  .createServer(function (req, res) {
    if (req.url.contains("ez47xqwefklh5iidjbsg")) {
      if (req.url.contains("aklbuses.nz")) {
        execSync(`bash ${__dirname}/deploy.sh aklbuses.nz`, {
          stdio: "inherit",
        });
      }
    }
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
  })
  .listen(process.env.PORT || "8080");
