import React from 'react';
import pokemons from '../data';

class Pokemon extends React.Component {
 render() {
  const {pokemonInfo} = this.props;
  return (
   <div class="card" style={{width: "15rem"}}>
  <img src={pokemonInfo.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h4 class="card-title">{pokemonInfo.name}</h4>
    <p class="card-text">{pokemonInfo.type}</p>
    <p class="card-text">Average weight: {pokemonInfo.averageWeight.value} {pokemonInfo.averageWeight.measurementUnit}</p>
    <a target="_blank" href={pokemonInfo.moreInfo} class="btn btn-primary">More Info!</a>
  </div>
</div>
  );
 }
}

export default Pokemon;