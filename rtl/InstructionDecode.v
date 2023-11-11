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

    always @(posedge clk) begin
        if(decodeEnable) begin
            opcode = instructionData & 255;
            predicate = (instructionData >> 58) & 63; 
        end
    end

endmodule