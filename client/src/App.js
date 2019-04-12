import React, {Component} from 'react';
import './App.css';
//import rendered components
import ListPoke from "./components/ListPoke";
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import DetailsPoke from "./components/DetailsPoke";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <div className={'titleHeader'}>
                        <h1>POKEMON API</h1>
                        {/*<Link to={'/'} >Home</Link>*/}
                    </div>
                    {/*render ListPoke*/}
                    <div className={'mapGrid'}>
                        <ListPoke/>
                    </div>
                </div>
                {/*<Route path={'/'} exact component={ListPoke}/>*/}
                {/*<Route*/}
                {/*    exact*/}
                {/*    path='/details/:pokeID'*/}
                {/*    render={(props) => <DetailsPoke {...props} pokeURL={this.props.pokeID} />}*/}
                {/*/>*/}
            </Router>


        );
    }
}

export default App;
