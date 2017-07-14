import React from 'react';
import './App.css';
import {Form} from './Components/Form';
import {List} from './Components/List';
import cosmonauts from "./data.json";
import {reset} from 'redux-form';
import store from './store';


export class App extends React.Component {

    AddNewCosmonaut = (newCosmonaut) => {
        cosmonauts.push(newCosmonaut);
        store.dispatch(reset('Form'));
        this.forceUpdate();
    };

    render() {
        return (
            <div className="container-fluid">
                <Form onSubmit={this.AddNewCosmonaut.bind(this)}/>
                <List/>
            </div>
        );
    }
}

