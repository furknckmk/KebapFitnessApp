/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Button from '../components/Button';

function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Welcome</Text>
<Button text="Uye Kaydi Olustur" onPress={null}/>
        </View>);
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        color: '#e040fb',
        margin: 10,
    },
});


