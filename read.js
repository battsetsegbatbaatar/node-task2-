const fs = require("fs");
const http = require("http");
const express = require("express");

const port = 8080;
const app = express();

const requestListener = function (req, res) {
  if (req.url === "/") {
    res.writeHead(200, ("Context-Type", "text/html"));
    // res.write("<h1 className='${flex m-auto bold}'>Hello world</h1>");
    res.end(
      "<html><body><h1 style=' display: flex; height: 800px; justify-content: center; align-items: center;'>Hello world</h1></body></html>"
    );
  } else if (req.url === "/users") {
    readData(res, "input.json");
    // res.writeHead(100, ("Context-Type", "application/json"));
    // res.end(JSON.stringify(reading()));
  } else if (req.url === "/products") {
    readData(res, "product.json");
    // res.writeHead(200, ("Context-Type", "application/json"));
    // res.end(JSON.stringify(products()));
  } else if (req.url === "/cars") {
    readData(res, "cars.json");
    // res.writeHead(500, ("Context-Type", "application/json"));
    // res.end(JSON.stringify(cars()));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
  // fs.readFile("input.json", "utf-8", function (err, data) {
  //   if (err) {
  //     console.error(err);
  //     return;
  //   }
  //   const user = JSON.parse(data);
  //   res.writeHead(500, ("Context-Type", "application/json"));
  //   res.end(JSON.stringify(user));
  // });
};
const server = http.createServer(requestListener);
server.listen(port, () => {
  return console.log(`Server is running on http://${host}:${port}`);
});

const readData = (res, fileName) => {
  fs.readFile(fileName, "utf-8", function (err, data) {
    if (err) {
      console.error(err);
      res.writeHead(500, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Internal Server Error" }));
      return;
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(data);
  });
};

// const read = (res) => {
//  fs.readFile("input.json", "utf-8", function (err, data) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const user = JSON.parse(data);
//     res.writeHead(200, ("Context-Type", "application/json"));
//     res.end(JSON.stringify(user));
//   });
// };
// const products = () => {
//   fs.readFile("input.json", "utf-8", function (err, data) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const product = JSON.parse(data);
//     res.writeHead(300, ("Context-Type", "application/json"));
//     res.end(JSON.stringify(product));
//   });
// const product = fs.readFileSync("product.json", "utf-8");
// return JSON.parse(product);
// };
// const cars = () => {
//   fs.readFile("cars.json", "utf-8", function (err, data) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const car = JSON.parse(data);
//     res.writeHead(500, ("Context-Type", "application/json"));
//     res.end(JSON.stringify(car));
//   });
// const car = fs.readFileSync("cars.json", "utf-8");
// return JSON.parse(car);
// };
// const reading = () => {
//   fs.readFile("input.json", "utf-8", function (err, data) {
//     if (err) {
//       console.error(err);
//       return;
//     }
//     const user = JSON.parse(data);
//     res.writeHead(200, ("Context-Type", "application/json"));
//     res.end(JSON.stringify(user));
//   });
// const text = fs.readFileSync("input.json", "utf-8");
// return JSON.parse(text);
// };

const create = (data) => {
  fs.readFile("input.json", "utf-8", function (err, json) {
    if (err) {
      console.error(err);
      return;
    }
    const previousData = JSON.parse(json);
    previousData.push(data);
    fs.writeFile("input.json", JSON.stringify(previousData), (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
  });
};
create({
  ip: "1234.22.11",
  port: 5000,
  id: 4,
  name: "Battsetseg",
});

// const update = (id, data, option) => {
//   fs.readFile("input.json", "utf-8", (err, json) => {
//     if (err) return console.error(err);
//     const previousData = JSON.parse(json);
//     const dataToUpdate = previousData.find((element) => element.id === id);
//     const newArray = previousData.filter((element) => element.id !== id);
//     newArray.push(...dataToUpdate[dataToUpdate], ...data);
//     fs.writeFile("input.json", JSON.stringify(newArray), (err) => {
//       if (err) return console.error(err);
//     });
//   });
// };
// update(7, { name: "BG..." });

// const dataDelete = (id) => {
//   fs.readFile("input.json", "utf-8", (err, json) => {
//     if (err) return console.error(err);
//     const previousData = JSON.parse(json);
//     const dataToUpdate = previousData.find((element) => element.id === id);
//     const dataToDelete = dataToUpdate.filter((ele ment) => element.id !== id);
//     fs.writeFile("input.json", JSON.stringify(dataToDelete), (err) => {
//       if (err) return console.error(err);
//     });
//   });
// };
// dataDelete(4);
const readNode = () => {
  const data = fs.readFileSync("input.json", "utf-8");
  return JSON.parse(data);
};

// module.exports = readNode;
