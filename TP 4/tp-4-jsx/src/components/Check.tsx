
type Props = {
    checked : boolean;
}


function Check({checked} : Props){
    return (
        <>
        <input type="checkbox" checked={checked}/>
            {checked ? "je suis cochée !" : "j’aimerais être cochée…" }
        </>

    )
}


export default Check