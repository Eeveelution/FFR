`include "Defines.v"

module control (
    clk,

    doFetch,
    doRegisterLoad,
    doRegisterStore,
    doIntegerAluOp,
    doFloatAluOp,
    doMemoryLoad,
    doMemoryStore,
    doNext,
    doReset,

    controlState
);
    input wire clk;

    output wire
        doFetch,
        doRegisterLoad,
        doRegisterStore,
        doIntegerAluOp,
        doFloatAluOp,
        doMemoryLoad,
        doMemoryStore,
        doNext,
        doReset;

    output reg [3:0] controlState;

    always @(posedge clk) begin
        case (controlState)
            : 
            default: 
        endcase
    end
endmodule