import React from 'react';
import Pokemon from './Pokemon';
import pokemons from '../data';

class Pokedex extends React.Component {
  constructor() {
    super();
    this.state = {
      pokemonTypeFilter: 'All',
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = (event) => {
    this.setState({ pokemonTypeFilter: event.target.innerText });
  };

  render() {
    const { pokemonTypeFilter } = this.state;
    return (
      <div>
        <section>
          <button className="btn btn-danger" onClick={this.handleClick}>
            All
          </button>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Fire
          </button>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Electric
          </button>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Bug
          </button>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Poison
          </button>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Psychic
          </button>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Normal
          </button>
          <button className="btn btn-primary" onClick={this.handleClick}>
            Dragon
          </button>
        </section>
        <section>
          {pokemons
            .filter((pokemon) => {
              if (pokemonTypeFilter === 'All') return true;
              return pokemon.type === pokemonTypeFilter;
            })
            .map((pokemon) => (
              <Pokemon key={pokemon.id} pokemonInfo={pokemon} />
            ))}
        </section>
      </div>
    );
  }
}

export default Pokedex;
