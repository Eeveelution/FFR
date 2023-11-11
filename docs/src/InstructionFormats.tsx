import InstructionFormat from "./Components/InstructionFormat";

export function FmtRegisterOperation() {
    return <InstructionFormat totalSize={50} offset={-6} elements={[
        { name: "Op",  size: 4,  color: "cyan", lightColor: true },
        { name: "Opperand 1",  size: 6,  color: "green" },
        { name: "Opperand 2",  size: 6,  color: "green" },
        { name: "Destination", size: 6,  color: "orange", lightColor: true },
        { name: "Remaining",   size: 28, color: "gray" },
    ]} />
}

export function FmtEmpty() {
    return <InstructionFormat totalSize={50} offset={-6} elements={[
        { name: "Remaining", size: 50, color: "gray" }
    ]} />
}