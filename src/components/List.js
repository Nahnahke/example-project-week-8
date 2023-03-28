import React from 'react';
import { Link } from 'react-router-dom';

const List = ({ pokemons }) => {
  return (
    <section className="List">
      {pokemons.map((pokemon) => {
        return (
          <Link
            key={pokemon.name}
            to={`/details/${pokemon.name}`}
            className="list-element">{pokemon.name}
          </Link>
        )
      })}
    </section>
  )
};

export default List;