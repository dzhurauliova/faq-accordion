import { Header } from "../components/Header"
import { CollapseBox } from "../components/Faq"

import { text } from "../components/Faq/text"

export const HomePage = () => {
    return(
        <>
            <div className="container">
                < Header />
                {text.map((item, index) => (
                    <CollapseBox
                    key={index}
                    title={item.question}
                    text={item.answer}
                    />
                ))}
            </div>
        </>
    )
}