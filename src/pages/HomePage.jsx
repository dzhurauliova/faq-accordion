import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { CollapseBox } from "../components/Faq"

import { text } from "../components/Faq/text"

export const HomePage = () => {
    return(
        <>
            < Header />
            {text.map((item, index) => (
        <CollapseBox
          key={index}
          title={item.question}
          text={item.answer}
        />
      ))}
            < Footer />
        </>
    )
}