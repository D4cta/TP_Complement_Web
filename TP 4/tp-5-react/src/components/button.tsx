import { useState } from 'react'

export function Button() {
    const [bool, setBool] = useState<boolean>(false)

    function changeBool() {
        setBool(!bool)
    }

    return <>
    <button onClick={changeBool}>
		Clique sur moi ({bool ? "true" : "false"})
	</button> 
    
    <p>{bool ? "Je suis visible !!" : ""}</p>

    </>

}

export default Button