`define WORD_SIZE 64
`define GR_SIZE `WORD_SIZE-1:0

module CPU (
    input clk,
    input reset
);
    reg [`GR_SIZE] REG_PC;

    always @(posedge clk, negedge reset) begin
        
    end
endmodule