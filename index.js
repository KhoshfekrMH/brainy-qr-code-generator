import inquirer from "inquirer";
import qr from "qr-image";
import fs from "fs";

inquirer
  .prompt([
    {
      message: "Type in your URL: ",
      name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    const nameOfFile = url.split("/").pop();
    const qr_svg = qr.image(url);
    qr_svg.pipe(fs.createWriteStream(`./node-output/${nameOfFile}.png`));

    fs.writeFile(`./node-output/${nameOfFile}.txt`, url, (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    });
  })
  .catch((error) => {
    if (error.isTtyError) {
      console.log(error); // Prompt couldn't be rendered in the current environment
    } else {
      console.log(error); // Something else went wrong
    }
  });
