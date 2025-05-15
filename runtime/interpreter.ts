import { NullVal, NumberVal, RuntimeVal } from "./values";

import { BinaryExpr, NumericLiteral, Program, Statement } from "../frontend/ast";

function eval_program (program: Program): RuntimeVal {
    let lastEvaluated: RuntimeVal = { type: "null", value: "null"} as NullVal;
    for (const statement of program.body) {
        lastEvaluated = evaluate(statement);
    }
    return lastEvaluated;
}

function evaluate_binary_expr (binop: BinaryExpr): RuntimeVal {
    const leftSide = evaluate(binop.left);
    const rightSide = evaluate(binop.right);

    if (rightSide.type == "number" && leftSide.type == "number") {
        return evaluate_numeric_binary_expr(leftSide as NumberVal, rightSide as NumberVal, binop.operator);
    }

    return { type: "null", value: "null" } as NullVal;
}

function evaluate_numeric_binary_expr (ls: NumberVal, rs: NumberVal, operator: string): NumberVal {
    let result = 0;
    if (operator == "+") {
        result = ls.value + rs.value;
    } else if (operator == "-") {
        result = ls.value - rs.value;
    } else if (operator == "*") {
        result = ls.value * rs.value;
    } else if (operator == "/") {
        result = ls.value / rs.value;
    }

    return {type: "number", value: result} as NumberVal;
}

export function evaluate (astNode: Statement): RuntimeVal {
    
    switch (astNode.kind) {
        case "NumericLiteral":
            return { 
                value: ((astNode as NumericLiteral).symbol),
                type: "number",
            } as NumberVal;

        case "NullLiteral":
            return { value: "null", type: "null"} as NullVal;

        case "BinaryExpr":
            return evaluate_binary_expr(astNode as BinaryExpr);

        case "Program":
            return eval_program(astNode as Program);

        default:
            console.error("This AST node still has an unknown interpretation", astNode);
            return { value: "null", type: "null"} as NullVal;
    }
}