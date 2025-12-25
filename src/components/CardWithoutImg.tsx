import { Card } from "./card"

export function CardWithoutImg() {
    const text = "Some quick example text to build on the card title and make up the bulk of the card’s content."
    
    return (
        <>
            <Card title="Card title" textCard={text}/>
        </>
    )
}