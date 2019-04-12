import React, {Component} from 'react';

class DetailsPoke extends Component {

    constructor(props) {
        super(props);
        this.state = {
            abilityData: [],
            movesData: [],
        }
    }

    componentDidMount() {
        console.log(this.props.pokeID);
        // console.log(this.props.pokeURL);
        this.loadData();
    }

    loadData = () => {
        fetch(this.props.pokeURL)
            .then(data => data.json())
            .then(jsonData => this.setState({abilityData: jsonData.abilities[0].ability,movesData:jsonData.moves[0].move}))
            .then(()=>console.log(this.state.abilityData))
            .then(()=>console.log(this.state.movesData))
    };

    render() {

        return(
            <div>
                <h2>Details</h2>
                <h3>
                    ID: {this.props.pokeID}
                </h3>
                <h3>
                    Ability: {this.state.abilityData.name}
                </h3>
                <h3>
                    Move: {this.state.movesData.name}
                </h3>
            </div>

        )
    }
}

export default DetailsPoke;