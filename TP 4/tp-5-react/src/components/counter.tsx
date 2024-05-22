import { useState } from 'react'

export function Counter() {
    const [Number, setNumber] = useState<number>(0)

    function upNumber() {
        setNumber(Number+1)
    }

    function downNumber() {
        setNumber(Number-1)
    }

    return <>
    <button onClick={upNumber}>
		+
	</button>

    <p>{Number}</p>

    <button onClick={downNumber}>
		-
	</button>

    </>

}

export default Counter