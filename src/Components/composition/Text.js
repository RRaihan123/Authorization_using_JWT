/* export default function Text({addEmoji}){
    let text = " 2 3 ";
    return <div> {addEmoji?addEmoji(text,"***"):text} </div>
} */

export default function Text({addEmoji,addBracket}){
    let text = " 2 3 ";

    if(addEmoji){
        text=addEmoji(text,"*")
    }
    if(addBracket){
        text=addBracket(text)
    }
    return <h1> {text} </h1>
}