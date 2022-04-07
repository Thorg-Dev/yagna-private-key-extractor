var keyth = require("keythereum");
var sqlite3 = require("sqlite3");

let db = new sqlite3.Database(
  "./example_data/yagna.db",
  sqlite3.OPEN_READONLY,
  (err) => {
    if (err) {
      console.error(err.message);
    }
    console.log("Connected to yagna database");
  }
);

db.all("SELECT * FROM identity", (error, rows) => {
  rows.forEach((row) => {
    let key_file_str = row["key_file_json"];
    console.log(`Found identity: ${key_file_str}`);
    let key_file_json = JSON.parse(key_file_str);
    let privateKey = keyth.recover("", key_file_json);
    console.log(`Extracted private key: ${privateKey.toString("hex")}`);
  });
});