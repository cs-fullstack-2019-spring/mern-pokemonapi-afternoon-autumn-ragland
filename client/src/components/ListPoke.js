import React, {Component} from 'react';
//import rendered components
import StylePoke from "./StylePoke";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import DetailsPoke from "./DetailsPoke";

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
            let splitPoke = eachPoke.url.split('/');
            return (
                <Router>
                    <div key={eachPoke.name}>
                        <StylePoke pokemon={eachPoke} />
                    </div>
                    <Route
                        path='/details'
                        component={() => <DetailsPoke pokeID={splitPoke[6]} pokeURL={eachPoke.url} />}
                    />
                    {/*<Route*/}
                    {/*    path='/details'*/}
                    {/*    render={(props) => <DetailsPoke {...props} pokeURL={eachPoke.url} />}*/}
                    {/*/>*/}
                </Router>

            )
        });

        return (mapPoke);
    }
}

export default ListPoke;