import { Header } from "../components/Header"
import { CollapseBox } from "../components/Faq"

import { text } from "../components/Faq/text"

import iconImg from '../assets/images/icon-star.svg'

const iconStarImg = iconImg

export const HomePage = () => {
    return(
        <>
            <div className="container">
                < Header icon={iconStarImg}/>
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