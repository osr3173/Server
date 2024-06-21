// const express = require("express");
// const app = express();

// app.get("/", (req: any, res: any) => {
//   res.send("ㅎㅇ 엄준식;");
// });

// app.get("/cookie", (req: any, res: any) => {
//   res.send("쿠키 존맛;");
// }); // locaslhost 뒤에 "/" 에 링크 추가해서 특정 링크에서 나타남

// app.listen(3001, () => {
//   console.log("서버 실행함");
// }); // 서버 실행 : localhost:3001[포트번호]/

// // /cookie -> 쿠키 존맛;

//sql2 설치 후

// 기존 sql 테이블에 추가하기
// const express = require("express");
// const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "qwer1234",
  database: "reactspring",
});

connection.connect();

connection.query(
  "insert into coffee (id,name,price,calories) values(6,'밀크티',5000,400)"
);
connection.end();
