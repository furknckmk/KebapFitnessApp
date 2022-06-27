/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {

    function goToMemberSign(){
navigation.navigate('MemberSignScreen');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Kebap Fitness Salonu</Text>
<Button text="Uye Kaydi Olustur" onPress={goToMemberSign}/>
        </View>);
}

export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',

    },
    header: {
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#e040fb',
        margin: 10,

    },
});


