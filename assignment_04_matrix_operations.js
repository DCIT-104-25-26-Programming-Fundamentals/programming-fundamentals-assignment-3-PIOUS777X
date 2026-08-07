// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
//
// Write a JavaScript program that performs three operations on matrices
// (2D arrays), each implemented in its own function.
//
// In JavaScript, a matrix is represented as an array of arrays:
//   let matrix = [[1, 2, 3], [4, 5, 6]];   // 2 rows, 3 columns
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_04_matrix_operations.js
//
// -----------------------------------------------------------------------------
// PART A — Transpose a Matrix
// -----------------------------------------------------------------------------
// - Read an M x N matrix from the user.
// - Compute and display its transpose (rows become columns, columns become rows).
//
// Example (2 x 3 input):
//
//   Original Matrix:      Transposed Matrix:
//   1  2  3               1  4
//   4  5  6               2  5
//                         3  6
//
// -----------------------------------------------------------------------------
// PART B — Add Two Matrices
// -----------------------------------------------------------------------------
// - Read two matrices of exactly the same size (M x N).
// - Compute their element-wise sum and display the result.
//
// -----------------------------------------------------------------------------
// PART C — Multiply Two Matrices
// -----------------------------------------------------------------------------
// - Read matrix A of size M x N and matrix B of size N x P.
//   (Number of COLUMNS in A must equal number of ROWS in B.)
// - Compute and display the matrix product A x B (result is M x P).
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT FORMAT
// -----------------------------------------------------------------------------
// When entering a row, the user types all values on one line separated by spaces:
//
//   Enter number of rows: 2
//   Enter number of columns: 3
//   Enter row 1: 1 2 3
//   Enter row 2: 4 5 6
//
// Hint: Use row.split(' ').map(Number) to convert a line of text into an array
// of numbers.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Use nested loops for all operations (no external libraries).
// - Each operation must be in its own function (see scaffold below).
// - Display each matrix in a neat, aligned grid format.
// - Tip: Complete Part A first, then Parts B and C.
//

const readlineSync = require("readline-sync");

function readMatrix(rows, columns) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let row = readlineSync.question("Enter row " + (i + 1) + ": ");
        let values = row.trim().split(/\s+/).map(Number);

        while (values.length !== columns) {
            console.log("Please enter exactly " + columns + " numbers.");
            row = readlineSync.question("Enter row " + (i + 1) + ": ");
            values = row.trim().split(/\s+/).map(Number);
        }

        matrix.push(values);
    }

    return matrix;
}

function transposeMatrix(matrix) {
    let rows = matrix.length;
    let columns = matrix[0].length;
    let result = [];

    for (let i = 0; i < columns; i++) {
        result[i] = [];

        for (let j = 0; j < rows; j++) {
            result[i][j] = matrix[j][i];
        }
    }

    return result;
}

function addMatrices(matrixA, matrixB) {
    let result = [];

    for (let i = 0; i < matrixA.length; i++) {
        result[i] = [];

        for (let j = 0; j < matrixA[i].length; j++) {
            result[i][j] = matrixA[i][j] + matrixB[i][j];
        }
    }

    return result;
}

function multiplyMatrices(matrixA, matrixB) {
    let rowsA = matrixA.length;
    let columnsA = matrixA[0].length;
    let columnsB = matrixB[0].length;

    let result = [];

    for (let i = 0; i < rowsA; i++) {
        result[i] = [];

        for (let j = 0; j < columnsB; j++) {
            result[i][j] = 0;

            for (let k = 0; k < columnsA; k++) {
                result[i][j] += matrixA[i][k] * matrixB[k][j];
            }
        }
    }

    return result;
}

function displayMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = "";

        for (let j = 0; j < matrix[i].length; j++) {
            row += String(matrix[i][j]).padStart(6);
        }

        console.log(row);
    }
}

function main() {
    console.log("PART A - Matrix Transpose");

    const rows = readlineSync.questionInt("Enter number of rows: ");
    const columns = readlineSync.questionInt("Enter number of columns: ");

    if (rows <= 0 || columns <= 0) {
        console.log("Rows and columns must be positive.");
        return;
    }

    const matrix = readMatrix(rows, columns);

    console.log("\nOriginal Matrix:");
    displayMatrix(matrix);

    const transposed = transposeMatrix(matrix);

    console.log("\nTransposed Matrix:");
    displayMatrix(transposed);

    console.log("\nPART B - Matrix Addition");

    const addRows = readlineSync.questionInt("Enter number of rows: ");
    const addColumns = readlineSync.questionInt("Enter number of columns: ");

    if (addRows <= 0 || addColumns <= 0) {
        console.log("Rows and columns must be positive.");
        return;
    }

    console.log("\nEnter Matrix A:");
    const matrixA = readMatrix(addRows, addColumns);

    console.log("\nEnter Matrix B:");
    const matrixB = readMatrix(addRows, addColumns);

    const sum = addMatrices(matrixA, matrixB);

    console.log("\nMatrix A + Matrix B:");
    displayMatrix(sum);

    console.log("\nPART C - Matrix Multiplication");

    const rowsA = readlineSync.questionInt("Enter rows for Matrix A: ");
    const columnsA = readlineSync.questionInt("Enter columns for Matrix A: ");

    const rowsB = readlineSync.questionInt("Enter rows for Matrix B: ");
    const columnsB = readlineSync.questionInt("Enter columns for Matrix B: ");

    if (rowsA <= 0 || columnsA <= 0 || rowsB <= 0 || columnsB <= 0) {
        console.log("Rows and columns must be positive.");
        return;
    }

    if (columnsA !== rowsB) {
        console.log("Error: Columns of Matrix A must equal rows of Matrix B.");
        return;
    }

    console.log("\nEnter Matrix A:");
    const matrixA2 = readMatrix(rowsA, columnsA);

    console.log("\nEnter Matrix B:");
    const matrixB2 = readMatrix(rowsB, columnsB);

    const product = multiplyMatrices(matrixA2, matrixB2);

    console.log("\nMatrix A x Matrix B:");
    displayMatrix(product);
}

main();
// =============================================================================
// YOUR CODE BELOW — remove the // symbols from the scaffold and fill it in
// =============================================================================

const readlineSync = require('readline-sync');

