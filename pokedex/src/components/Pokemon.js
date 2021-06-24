import React from 'react';

class Pokemon extends React.Component {
 render() {
  const {pokemonInfo} = this.props;
  return (
   <div className="card" style={{width: "15rem"}}>
  <img src={pokemonInfo.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h4 className="card-title">{pokemonInfo.name}</h4>
    <p className="card-text">{pokemonInfo.type}</p>
    <p className="card-text">Average weight: {pokemonInfo.averageWeight.value} {pokemonInfo.averageWeight.measurementUnit}</p>
    <a target="_blank" href={pokemonInfo.moreInfo} className="btn btn-outline-info">More Info!</a>
  </div>
</div>
  );
 }
}

export default Pokemon;