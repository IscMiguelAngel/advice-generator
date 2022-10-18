import icon_dice from "../assets/icon-dice.svg"
import divisor from "../assets/pattern-divider-desktop.svg"
import { useEffect, useState } from "react"

const Card = () => {
    
    const [advice, setAdvice] = useState({ id: 0, advice: "" })
    const [isLoading, setIsLoading] = useState(true);

    const handleAdvice = async () => {
        setIsLoading(true)
        await fetch("https://api.adviceslip.com/advice").then(response => response.json()).then(data => {
            const { slip } = data
            setAdvice(slip)
            setIsLoading(false);
        })
    }

    useEffect(() => {
        handleAdvice()
    }, [])
    

    return (
        <div className="card">
            <div className="card-header">
                <h1>ADVICE # <span>{ advice.id }</span></h1>
            </div>
            <div className="card-body">
                <p><q>{ advice.advice }</q></p>
                <img src={ divisor } alt="Divider" />
            </div>
            <div className="card-footer">
                <button type="button" onClick={ () => handleAdvice() } className={`${isLoading ? "load" : ""}`}>
                    <img src={ icon_dice } alt="Icon button" /><p style={ { display: "none" } }>Click to generate</p>
                </button> 
            </div>
        </div>
    )
}


export default Card