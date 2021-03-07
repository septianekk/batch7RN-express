import axios from 'axios';
import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import {InputData} from '../../components';
const UserForm = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const saveData = () => {
    axios
      .post('https://rest-reactnative.herokuapp.com/api/users/', {
        username: username,
        email: email,
        phone: phone,
        address: address,
      })
      .then((res) => {
        console.log(res);
        navigation.navigate('User');
        Alert.alert('Berhasil Diinput');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <View style={{margin: 20}}>
      <ScrollView>
        <InputData
          label="Username"
          placeholder="Masukkan Username"
          onChangeText={(value) => setUsername(value)}
          value={username}
        />
        <InputData
          label="Email"
          placeholder="Masukkan Email"
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
        <InputData
          label="Phone"
          placeholder="Masukkan Phone"
          onChangeText={(value) => setPhone(value)}
          value={phone}
        />
        <InputData
          label="Address"
          placeholder="Masukkan Address"
          onChangeText={(value) => setAddress(value)}
          value={address}
        />
        <TouchableOpacity style={styles.buttonContainer} onPress={saveData}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Input
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default UserForm;

const styles = StyleSheet.create({
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 25,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },
});
