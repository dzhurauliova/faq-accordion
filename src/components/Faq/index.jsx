import { useState } from "react"
import './style.css'

export const CollapseBox = ({title, text}) => {
    const [open, setOpen] = useState(false)

    return(
        <div className="collapse-box">
            <button className="collapse-header" onClick={() => setOpen(!open)}>
                <h2>{title}</h2>
                 <span className={`arrow ${open ? "open" : ""}`}>▼</span>
            </button>
            <p>{open && <div className="collapse-content">{text}</div>}</p>
        </div>
    )
}