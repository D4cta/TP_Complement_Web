import { ReactNode } from "react"

type Props = {
    children?: ReactNode;
}


function Paragraph({children} : Props){
    return (
        <>
        <p>{children}</p>
        </>

    )
}


export default Paragraph