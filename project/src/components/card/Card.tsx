import React from 'react';
import { CardData } from '../../types';

function CardFilm({title, link }: CardData): JSX.Element {
  return (
    <article className='small-film-card catalog__films-card'>
      <div className='small-film-card__image'>
        <img src={ link } alt={ title } width='280' height='175' />
      </div>
      <h3 className='small-film-card__title'>
        <a className='small-film-card__link' href='film-page.html'>{ title }</a>
      </h3>
    </article>
  );
}

export default CardFilm;
