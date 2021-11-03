import React from 'react';
import {connect} from 'react-redux';
import {getMon} from '../actions/index';

const PokeDex = props => {
    const pullMon = (event) => {
        event.preventDefault();
    };

    return (
        <div>
            <div>
                <h1>Kanto PokeDex</h1>
            </div>
            <div>
                {props.pokemon.map(pokemon => (
                    <h3 key = {pokemon.url}>{pokemon.name}</h3>
                ))}
            </div>
            <div>
                {props.error && <p className = 'error'>{props.error}</p>}
            </div>
            <button onClick = {pullMon}>Get Your New Pocket Monster!</button>
        </div>
    );
};

const mapStateToProps = state => ({
    pokemon: state.pokemon,
    error: state.error
});

export default connect(mapStateToProps, {getMon})(PokeDex);