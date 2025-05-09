export type NodeType = "Program" | "NumericLiteral" | "Id" | "BinaryExpr";

// chucnk of code (won't return a value)
// statements don't include expressions
export interface Statement {
    kind: NodeType;
}

// program = array of all statements (chunks of code)
export interface Program extends Statement {
    kind: "Program";
    body: Statement[];
}

// expressions return values, statements do not
export interface Expr extends Statement {}

// operators
export interface BinaryExpr extends Expr {
    kind: "BinaryExpr";
    left: Expr;
    right: Expr;
    operator: string;
}

// variable names
export interface Id extends Expr {
    kind: "Id";
    symbol: string;
}

// number values
export interface NumericLiteral extends Expr {
    kind: "NumericLiteral";
    symbol: number;
}
