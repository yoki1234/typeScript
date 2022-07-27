type Greetprops = {
    name: string,
    messagenum: number
}

export const Greet = (props:Greetprops)=>{
    return(
        <div>
            <h2>welcome {props.name}!, you have {props.messagenum} unreaded messages.</h2>
        </div>
    )
}