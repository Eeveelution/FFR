`include "Defines.v"

module InstructionDecode (
    clk,
    instructionData,
    decodeEnable,

    //Outputs:
    opcode,
    predicate,

    aluOp,
    aluOpperand1,
    aluOpperand2,
    aluDest
);

    input wire clk, decodeEnable;
    input reg [`GR_SIZE] instructionData;

    output reg [8-1:0] opcode;
    output reg [6-1:0] predicate;
    output reg [4-1:0] aluOp;
    output reg [6-1:0] aluOpperand1;
    output reg [6-1:0] aluOpperand2;
    output reg [6-1:0] aluDest;

    assign opcode    = instructionData[63:56];
    assign predicate = instructionData[5:0];

    assign aluOp        = instructionData[55:52];
    assign aluOpperand1 = instructionData[51:46];
    assign aluOpperand2 = instructionData[45:40];
    assign aluDest      = instructionData[39:34];
endmodule