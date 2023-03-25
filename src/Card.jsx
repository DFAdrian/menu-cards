import React from 'react'


function Card(props){
    return(
        <article className='card'>
        <figure className='figure'>
            <img src={props.info.img} className='card__img' alt=''></img>
        </figure>
        <div className='card__info'>
            <div className='card__header'>
            <h4 class="card__name">{props.info.title.toUpperCase()}</h4>
            <span class="card__price">${props.info.price}</span>
            </div>
        <p className='card__text'>{props.info.desc}</p>
        </div>
        <span className='card__stock'>{(props.info.stock)? `${props.info.stock} in stock`: 'Out of Stock'}</span>
        </article>
    )
}

export default Card