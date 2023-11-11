interface NameSizePair {
    name: string,
    size: number,
    color: string,
    lightColor?: boolean,
}

interface InstructionFormatProps {
    totalSize: number,
    offset?: number,
    elements: NameSizePair[]
}

export default function InstructionFormat(props: InstructionFormatProps) {
    let offsets = [];
    let currentOffset = props.totalSize - (props.offset === undefined ? 0 : props.offset!);

    for (let i = 0; i !== props.elements.length; i++) {
        offsets.push(<>
            <td>
                {currentOffset - 1}
            </td>
        </>)

        currentOffset -= props.elements[i].size;
    }

    let names = props.elements.map((element) => {
        return (<>
            <td style={{ 
                textAlign: "center", 
                height: "40px", 
                width: ((element.size / props.totalSize) * 100).toString() + "%", 
                backgroundColor: element.color, 
                color: element.lightColor === undefined ? "white" : (element.lightColor ? "black" : "white") }}> {element.name} </td>
        </>)
    })

    let sizes = props.elements.map((element) => {
        return (<>
            <td style={{ textAlign: "center" }}>
                {element.size}
            </td>
        </>)
    })

    return (<>
        <table className="format-tables" style={{ width: "100%" }}>
            <tr>
                {offsets}
                <td>0</td>
            </tr>
            <tr>
                {names}
            </tr>
            <tr>
                {sizes}
            </tr>
        </table>
    </>)
}