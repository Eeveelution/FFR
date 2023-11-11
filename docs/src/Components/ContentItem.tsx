import { ReactNode } from "react";

interface ContentItemProps {
    children: ReactNode,
    id?: string
}

export default function ContentItem(props: ContentItemProps) {
    return (<>
        <div className="content-item" id={props.id}>
            {props.children}
        </div>
    </>)
}