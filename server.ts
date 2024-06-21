const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// 1. get:[데이터 가져오기]
// app.get();

// 2. post:[데이터 보내기]
//localhost:3001 뒤에 넣으면 데이터 보냄
app.post("/api/student", (req: any, res: any) => {
  const { name } = req.body;
  console.log(name);
});

app.listen(3001, () => {
  console.log("서버 시작");
});
