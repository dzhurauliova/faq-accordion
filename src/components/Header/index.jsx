import './style.css'

export const Header = ({icon}) => {
    return(
        <>
            <section className="header">
                <img className='header-img' src={icon} alt="icon-star"/>
                <h1>FAQs</h1>
            </section>
        </>
    )
}