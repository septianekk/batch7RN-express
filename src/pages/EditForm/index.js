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
const EditForm = ({route, navigation}) => {
  const data = route.params.item;
  const [username, setUsername] = useState(data.username);
  const [email, setEmail] = useState(data.email);
  const [phone, setPhone] = useState(data.phone);
  const [address, setAddress] = useState(data.address);

  const updateData = () => {
    axios
      .put(`https://rest-reactnative.herokuapp.com/api/users/${data.id}`, {
        username: username,
        email: email,
        phone: phone,
        address: address,
      })
      .then((res) => {
        console.log(res);
        navigation.navigate('User');
        Alert.alert('Berhasil diUpdate');
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
        <TouchableOpacity style={styles.buttonContainer} onPress={updateData}>
          <Text
            style={{
              fontSize: 12,
              fontWeight: 'bold',
              color: 'white',
              textTransform: 'uppercase',
              textAlign: 'center',
            }}>
            Update
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default EditForm;

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
