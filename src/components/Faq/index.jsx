import { useState } from "react"
import './style.css'

export const CollapseBox = ({title, text}) => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleBox = () => {
        setIsOpen(!isOpen)
    }

    return(
        <div className="collapse-box">
            <button className="collapse-header" onClick={toggleBox}>
                <h2 className="collapse-title">{title}</h2>
                <span className={`arrow ${isOpen ? "open" : ""}`} />
            </button>
            <p>{isOpen && <div className="collapse-content">{text}</div>}</p>
        </div>
    )
}