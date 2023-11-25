`include "Defines.v"

module InstructionDecode (
    clk,
    instructionData,
    decodeEnable,

    //Outputs:
    opcode,
    predicate,

    
    regOp,
    regOpperand1,
    regOpperand2,
    regDest
);
    input wire clk, decodeEnable;
    input reg [`GR_SIZE] instructionData;

    output wire [8-1:0] opcode;
    output wire [6-1:0] predicate;
    output wire [4-1:0] regOp;
    output wire [6-1:0] regOpperand1;
    output wire [6-1:0] regOpperand2;
    output wire [6-1:0] regDest;

    assign opcode    = instructionData[63:56];
    assign predicate = instructionData[5:0];

    assign regOp        = instructionData[55:52];
    assign regOpperand1 = instructionData[51:46];
    assign regOpperand2 = instructionData[45:40];
    assign regDest      = instructionData[39:34];
endmodule