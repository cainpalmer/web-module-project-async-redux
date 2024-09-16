import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getMon} from '../actions/index';

const PokeDex = (props) => {
    const {pokemon, error} = props;
        useEffect(() => {
            props.getMon();
        }, []);

    const handleClick = () => {
        props.getMon();
    };

    return (
        <div>
            <li>
                {props.pokemon.map(pokemon => (
                    <h3 key = {pokemon.url}>You could choose {pokemon.name}, find out more information here: {pokemon.url}</h3>
                ))}
            </li>
            <div>
                <button onClick = {handleClick}>Get Your New Pocket Monster!</button>
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        pokemon: state.pokemon,
        error: state.error,
    }
};

export default connect(mapStateToProps, {getMon})(PokeDex);