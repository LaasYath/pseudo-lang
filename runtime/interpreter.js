"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.evaluate = evaluate;
function eval_program(program) {
    var lastEvaluated = { type: "null", value: "null" };
    for (var _i = 0, _a = program.body; _i < _a.length; _i++) {
        var statement = _a[_i];
        lastEvaluated = evaluate(statement);
    }
    return lastEvaluated;
}
function evaluate_binary_expr(binop) {
    var leftSide = evaluate(binop.left);
    var rightSide = evaluate(binop.right);
    if (rightSide.type == "number" && leftSide.type == "number") {
        return evaluate_numeric_binary_expr(leftSide, rightSide, binop.operator);
    }
    return { type: "null", value: "null" };
}
function evaluate_numeric_binary_expr(ls, rs, operator) {
    var result = 0;
    if (operator == "+") {
        result = ls.value + rs.value;
    }
    else if (operator == "-") {
        result = ls.value - rs.value;
    }
    else if (operator == "*") {
        result = ls.value * rs.value;
    }
    else if (operator == "/") {
        result = ls.value / rs.value;
    }
    return { type: "number", value: result };
}
function evaluate(astNode) {
    switch (astNode.kind) {
        case "NumericLiteral":
            return {
                value: (astNode.symbol),
                type: "number",
            };
        case "NullLiteral":
            return { value: "null", type: "null" };
        case "BinaryExpr":
            return evaluate_binary_expr(astNode);
        case "Program":
            return eval_program(astNode);
        default:
            console.error("This AST node still has an unknown interpretation", astNode);
            return { value: "null", type: "null" };
    }
}
