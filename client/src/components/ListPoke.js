import React, {Component} from 'react';
//import rendered components
import StylePoke from "./StylePoke";

class ListPoke extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        this.loadData();
    }
    //fetch data
    loadData = () => {
        fetch("https://pokeapi.co/api/v2/pokemon?limit=18")
            .then(data => data.json())
            .then(jsonData => this.setState({data: jsonData.results}))
    };
    //pass data to StylePoke
    render() {

        let mapPoke = this.state.data.map((eachPoke) => {
            return (
                <div key={eachPoke.name}>
                    <StylePoke pokemon={eachPoke} />
                </div>
            )
        });

        return (mapPoke);
    }
}

export default ListPoke;