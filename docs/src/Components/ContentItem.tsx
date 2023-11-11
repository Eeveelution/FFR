import { ReactNode } from "react";

interface ContentItemProps {
    children: ReactNode,
    title: string
    id?: string
}

export default function ContentItem(props: ContentItemProps) {
    return (<>
        <div className="content-item" id={props.id}>
            <h2>
                {props.title} &nbsp;

                {props.id !== 'top' && (<>
                    <a href="#top">^</a>
                </>)}
            </h2>

            {props.children}
        </div>
    </>)
}