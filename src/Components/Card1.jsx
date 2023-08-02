import Card1Css from './styles/Card1Styles.css'

export default function Card1({Conteudo, Titulo}){
    return(
        <div className="container">
            <h4>New!</h4>
            <div className="info">
                <h3 className='TittleCard'>{Titulo}</h3>
            </div>
            <div className='Conteudo'>
                <p>Lorem ipsum dolor sit amet <tag className="FCWM">adipisicing elit</tag>. Nulla rerum nostrum ipsam nemo consectetur reprehenderit. Aspernatur veritatis debitis voluptatem nihil, non, fugit sequi repellat velit perferendis nostrum necessitatibus rerum facilis?</p>
            </div>
        </div>
    )
}