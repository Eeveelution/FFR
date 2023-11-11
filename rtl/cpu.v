`include "Defines.v"

module CPU (
    input wire clk,
    input wire reset
);
    reg [`GR_SIZE] REG_PC;     // Instruction Pointer Register
    reg [`GR_SIZE] ADJ_REG_PC; // By how much to adjust the Instruction Pointer Register

    // Control signals, each stage of the Pipeline
    wire 
        doFetch, 
        doDecode,
        doNext, 
        doReset;

    InstructionPointer IP(clk, doReset, REG_PC, ADJ_REG_PC, doNext);
endmodule