import { DB } from "https://deno.land/x/sqlite/mod.ts";
const db = new DB("example_data/yagna.db", options={mode:"read"});

const res = db.query(`SELECT * FROM identity`);
console.log(res)
/*
const names = ["Peter Parker", "Clark Kent", "Bruce Wayne"];

// Run a simple query
for (const name of names) {
  db.query("INSERT INTO people (name) VALUES (?)", [name]);
}

// Print out data in table
for (const [name] of db.query("SELECT name FROM people")) {
  console.log(name);
}
*/
// Close connection
db.close();