interface AsmInstProps {
    inst: string
}

export function AsmInst(props: AsmInstProps) {
    return <span style={{ color: "greenyellow" }}> {props.inst} </span>
}

interface AssignFromTwoProps {
    op1: number,
    op2: number,
    dest: number
}

export function AssignFromTwo(props: AssignFromTwoProps) {
    return (<>
        <span style={{ color: "coral" }}> $r{props.op1}</span>,
        <span style={{ color: "coral" }}> $r{props.op2} </span> =
        <span style={{ color: "coral" }}> $r{props.dest} </span>
    </>)
}

interface NumberProps {
    n: number
}

export function Predicate(props: NumberProps) {
    return <span style={{ color: "blueviolet" }}> ({props.n}) </span>
}

export function Register(props: NumberProps) {
    return <span style={{ color: "coral" }}> $r{props.n} </span>
}

export function Literal(props: NumberProps) {
    return <span style={{ color: "yellow" }}> #{props.n} </span>
}

interface HexLiteralProps {
    n: string | number
}

export function HexLiteral(props: HexLiteralProps) {
    return <span style={{ color: "yellow" }}> #x{props.n} </span>
}