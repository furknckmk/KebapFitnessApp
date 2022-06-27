/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Text,StyleSheet } from 'react-native';

function MemberResault({route}) {
   const {user} = route.params;
  return (
    <View style={styles.container}>
    <Text style={styles.title}>Kayit Tamamlandi!</Text>
    <View style={styles.innerContainer}>
      <Text style={styles.label}>Uye Adi: {user.userName} </Text>
      <Text style={styles.label}>Uye Soyadi: {user.userSurName}</Text>
      <Text style={styles.label}>Uye Yasi: {user.userAge} </Text>
      <Text style={styles.label}>Uye Email:{user.userEmail} </Text>
      </View>
    </View>
  );
}

export default MemberResault;

const styles = StyleSheet.create({
    container: {flex: 1,margin:10, padding:10,alignItems: 'center',justifyContent: 'center'},
    innerContainer: {borderWidth:1,borderColor:'#5cc0eb',borderRadius:5},
    label: { fontSize: 24, fontWeight: 'bold',margin:5, },
    title: { fontSize: 40, fontWeight: 'bold', textAlign: 'center', color: '##1089b1'},
});
