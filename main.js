import fs from "fs"
var contents = fs.readFileSync("test.txt", "utf8");


const regex = /([@])softwire.com+\b/gm
console.log(`Softwire domain count: ${contents.match(regex).length}`);
