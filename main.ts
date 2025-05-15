import Parser from "./frontend/parser";
import { evaluate } from "./runtime/interpreter";

repl();

function repl () {
    const parser = new Parser();
    console.log("Repl");
    // while (true) {
        // var input = prompt("> "); prompt is for the browser/apps
        let input = "var * 6"; 


        // if (!input || input.includes("exit")) {
        //     break;
        // }

        const program = parser.produceAST(input);

        const results = evaluate(program);
        console.log(results);
    // }
}