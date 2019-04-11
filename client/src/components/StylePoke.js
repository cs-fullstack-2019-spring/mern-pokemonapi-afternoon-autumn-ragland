import React, { Component } from 'react';

class StylePoke extends Component {

    render() {
        //split url to grab pokemon id
        let splitPoke = this.props.pokemon.url.split('/');
        //render pokemon name and image
        return (
            <div className="pokemon">
                <h3>{this.props.pokemon.name.toUpperCase()}</h3>
                <img src= {'/images/' + splitPoke[6] + '.png'}  alt={this.props.pokemon.name + ' image'}/>
            </div>
        );
    }
}

export default StylePoke;