`include "Defines.v"

module InstructionDecode (
    clk,
    instructionData,
    decodeEnable,

    //Outputs:
    opcode,
    predicate
);

    input wire clk, decodeEnable;
    input reg [`GR_SIZE] instructionData;

    output reg [8-1:0] opcode;
    output reg [6-1:0] predicate;

    assign opcode = instructionData[7:0];
    assign predicate = instructionData[63:64-6];
endmodule