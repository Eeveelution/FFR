`include "Defines.v"

/*
    This module contains the Instruction Pointer

    The value of the Instruction Pointer is always outputted by `out`
    And can be adjusted using `adjust` and then pulling `updateEnable` high.
    Resetting is done through `resetEnable`
*/
module InstructionPointer (
    clk,           /* Clock signal */
    resetEnable,   /* Reset signal */
    out,           /* Output Value for the IP */
    adjust,        /* How much to adjust by */
    updateEnable,  /* When high, adjusts value by `adjust` */
    setEnable      /* When high, sets value to `adjust` */
);
    output reg [`GR_SIZE] out = 0;

    input wire signed [`GR_SIZE] adjust;
    input wire clk, updateEnable, resetEnable, setEnable;

    always @(posedge clk) begin
        if(resetEnable) begin
            // Reset Instruction Pointer
            out <= 0;
        end else if(updateEnable) begin
            // Adjust Instruction Pointer 
            out <= out + adjust;
        end else if(setEnable) begin
            // Set Instruction Pointer
            out <= adjust;
        end
    end
endmodule