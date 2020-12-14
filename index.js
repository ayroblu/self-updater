const { execSync } = require("child_process");
const http = require("http");

http
  .createServer(function (req, res) {
    res.write("Hello World!"); //write a response to the client
    res.end(); //end the response
    if (req.url.includes("ez47xqwefklh5iidjbsg")) {
      if (req.url.includes("aklbuses.nz")) {
        execSync(`bash ${__dirname}/deploy.sh aklbuses.nz`, {
          stdio: "inherit",
        });
      } else if (req.url.includes("ayro.nz")) {
        execSync(`bash ${__dirname}/deploy.sh ayro.nz`, {
          stdio: "inherit",
        });
      } else if (req.url.includes("portfolio")) {
        execSync(`bash ${__dirname}/deploy.sh portfolio`, {
          stdio: "inherit",
        });
      }
    }
  })
  .listen(process.env.PORT || "8080");
