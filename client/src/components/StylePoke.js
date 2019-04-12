import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import DetailsPoke from "./DetailsPoke";

class StylePoke extends Component {

    render() {
        //split url to grab pokemon id
        let splitPoke = this.props.pokemon.url.split('/');
        //render pokemon name and image
        return (
            <Router>
                    <div className="pokemon">
                        <h3>{this.props.pokemon.name.toUpperCase()}</h3>
                        <img src={'/images/' + splitPoke[6] + '.png'} alt={this.props.pokemon.name + ' image'}/>
                        <Link to={'/details/'+ splitPoke[6]}>Details</Link>
                    </div>
                <Route
                    exact
                    path='/details'
                    component={() => <DetailsPoke pokeID={splitPoke[6]} pokeURL={this.props.pokemon.url} />}
                />
            </Router>

        );
    }
}

export default StylePoke;