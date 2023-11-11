verilator -cc \
    -I./rtl \
    ./rtl/CPU.v \
    ./rtl/InstructionPointer.v \
    ./rtl/Control.v