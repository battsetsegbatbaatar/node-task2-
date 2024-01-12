const express = require("express");
const fs = require("fs");
const http = require("http");
// const readNode = require("./read");
const cors = require("cors");

const port = 8080;
const app = express();

// app.use(
//   cors({
//     origin: "http://localhost:3001",
//   })
// );

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  const users = readNode();
  res.send(users);
});

// create app
app.post("/users", (req, res) => {
  const user = createNode({
    id: 10,
    firstname: "Bella",
    lastname: "Swan",
    email: "Swanbella@yahoo.com",
  });
  res.send(user);
});

app.put("/users", (req, res) => {
  const user = createNode(10, {
    firstname: "Bella",
    lastname: "Swan",
    email: "Swanbella@yahoo.com",
  });
  res.send(user);
});

app.delete("./users", (req, res) => {
  const user = deleteNode(10);
  res.send(user);
});

app.listen(port, () => {
  console.log("server is running on http://localhost:" + port);
});
const readNode = () => {
  const data = fs.readFileSync("input.json", "utf-8");
  return JSON.parse(data);
};

const createNode = (data) => {
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

const updateNode = (id, data, option) => {
  fs.readFile("input.json", "utf-8", (err, json) => {
    if (err) return console.error(err);
    const previousData = JSON.parse(json);
    const dataToUpdate = previousData.find((element) => element.id === id);
    const newArray = previousData.filter((element) => element.id !== id);
    newArray.push(...dataToUpdate[dataToUpdate], ...data);
    fs.writeFile("input.json", JSON.stringify(newArray), (err) => {
      if (err) return console.error(err);
    });
  });
};

const deleteNode = (id) => {
  fs.readFile("input.json", "utf-8", (err, json) => {
    if (err) return console.error(err);
    const previousData = JSON.parse(json);
    const dataToUpdate = previousData.find((element) => element.id === id);
    const newArray = previousData.filter((element) => element.id == id);
    newArray.push(...dataToUpdate[dataToUpdate], ...data);
    fs.writeFile("input.json", JSON.stringify(newArray), (err) => {
      if (err) return console.error(err);
    });
  });
};
