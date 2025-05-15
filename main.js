"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var parser_1 = require("./frontend/parser");
var interpreter_1 = require("./runtime/interpreter");
repl();
function repl() {
    var parser = new parser_1.default();
    console.log("Repl");
    // while (true) {
    // var input = prompt("> "); prompt is for the browser/apps
    var input = "var * 6";
    // if (!input || input.includes("exit")) {
    //     break;
    // }
    var program = parser.produceAST(input);
    var results = (0, interpreter_1.evaluate)(program);
    console.log(results);
    // }
}
