import React, { Component } from 'react';
import './App.css'
import { dataType } from './data';
import ButtonComponent from './ButtonComponent'

type IProps = {
    data: dataType;
    length: number;
    index: number;
    setIndex: (num: number) => void;
}
type IState = {}

class UserComponent extends Component<IProps, IState> {
    render() {
        return (
            <div className="container">
                <div className="userComponentContainer">
                    <div className="headerInline">
                        <h1>{this.props.data.name.first} {this.props.data.name.last}</h1>
                        <h1>{this.props.data.id}/{this.props.length}</h1>
                    </div>
                    <div className="inlineText">
                        <h2>From: </h2>
                        <p>{this.props.data.city}, {this.props.data.country}</p>
                    </div>
                    <br />
                    <div className="inlineText">
                        <h2>Employer: </h2>
                        <p>{this.props.data.employer}</p>
                    </div>
                    <br />
                    <br />
                    <h2 style={{marginLeft: "10px"}}>Favorite Movies:</h2>
                    <ol>
                        {
                            this.props.data.favoriteMovies.map(movie => (
                                <li>{movie}</li>
                            ))
                        }
                    </ol>
                </div>
                <ButtonComponent setIndex={this.props.setIndex} index={this.props.index} length={this.props.length} />
            </div>
        );
    }
}
export default UserComponent;