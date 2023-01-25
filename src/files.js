const fs = require("fs");

//reading files
fs.readFile("./docs/blog1.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toString());
  }
});

//writing files
const data = "This is a new text";
fs.writeFile("./docs/blog1.txt", data, (err) => {
  if (err) throw err;
  console.log("The file has been saved!");
});

//directories
if (!fs.existsSync("./assets")) {
  fs.mkdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder created");
    }
  });
} else {
  fs.rmdir("./assets", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("folder deleted");
    }
  });
}

//deleting files
if (fs.existsSync("./docs/deleteme.txt")) {
  fs.unlink("./docs/deleteme.txt", (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log("file deleted");
    }
  });
}
