import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';

const WinnerGuesser = ({players}) => {
    const length = players.length;
    const pos = random(length - 1);
    return (
        <View style={style.view}>
            <Text style={style.text}>The winner will be { players[pos] }</Text>
        </View>
    );
} 

function random(max) {
    return Math.floor(Math.random() * max);
}

const style = StyleSheet.create({
    view: {
        padding: 20,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
        flex: .10
    },
    text: {
        fontSize: 28, 
        color: 'white'
    }
});

export default WinnerGuesser;