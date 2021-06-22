import React from 'react';
import pokemons from '../data';

class Pokemon extends React.Component {
 render() {
  return (
   <div class="card" style={{width: "18rem"}}>
  <img src={pokemons[0].image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{pokemons[0].name}</h5>
    <p class="card-text">{pokemons[0].type}</p>
    <p class="card-text">Average weight: {pokemons[0].averageWeight.value} {pokemons[0].averageWeight.measurementUnit}</p>
    <a target="_blank" href={pokemons[0].moreInfo} class="btn btn-primary">More Info!</a>
  </div>
</div>
  );
 }
}

export default Pokemon;