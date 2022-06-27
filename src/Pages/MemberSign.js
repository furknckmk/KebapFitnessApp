/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View,Alert } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
function MemberSign({navigation}){
    const [userName, setUserName] = useState(null);
    const [userSurName, setUserSurName] = useState(null);
    const [userAge, setUserAge] = useState(null);
    const [userEmail, setUserEmail] = useState(null);

function handleSubmit(){
    if ( !userName ||
        !userSurName ||
        !userAge ||
        !userEmail) {
            Alert.alert('Kebap Fitness Salonu','Bilgiler Bos Birakilamaz');
            return;

    }
   const user = {
    userName,
    userSurName,
    userAge,
    userEmail,
   };
navigation.navigate("MemberResaultScreen",{user});

}


    return (
        <View>
            <Input label="Uye Adi" placeholder="Uye Ismini Giriniz..." onChangeText={setUserName}/>
            <Input label="Uye Soyadi" placeholder="Uye SoyIsmini Giriniz..." onChangeText={setUserSurName}/>
            <Input label="Uye Yasi" placeholder="Uye Yasini Giriniz..." onChangeText={setUserAge}/>
            <Input label="E-posta" placeholder="E-Posta Giriniz..." onChangeText={setUserEmail}/>
            <Button text="Kaydi Tamamla" onPress={handleSubmit}/>
        </View>
    );
}

export default MemberSign;
