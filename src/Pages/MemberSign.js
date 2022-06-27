/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import { View,Text } from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';
function MemberSign(){
    const [userName, setUserName] = useState('');
    const [userSurName, setUserSurName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userEmail, setUserEmail] = useState('');

function handleSubmit(){
   const user = {
    userName,
    userSurName,
    userAge,
    userEmail,
   };
console.log(user);

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
