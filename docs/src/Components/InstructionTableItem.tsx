interface InstructionTableItemProps {
    name: string,
    opcode: number,
    extensions: string[],
    operation: string
}

export function InstructionTableItem(props: InstructionTableItemProps) {
    const extensionJsx = props.extensions.map((extension) => {
        return <td>{extension}</td>
    })
    
    return (<>
        <tr>
            <td>{props.name}</td>
            <td>{props.opcode}</td>

            {extensionJsx}

            <td>{props.operation}</td>
        </tr>
    </>)
}