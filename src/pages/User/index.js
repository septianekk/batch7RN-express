import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList, Text, TouchableOpacity} from 'react-native';
import axios from 'axios';
import {InputData} from '../../components';
import {Picker} from '@react-native-picker/picker';
import {faEdit, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
const User = ({navigation}) => {
  const [Datauser, setDatauser] = useState([]);
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState('');

  useEffect(() => {
    getData();
  }, [Datauser]);

  const getData = () => {
    axios
      .get('https://rest-reactnative.herokuapp.com/api/users')
      .then((response) => {
        console.log(response.data);
        setDatauser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const searchButton = () => {
    axios
      .get(
        `https://rest-reactnative.herokuapp.com/api/users/${searchBy}/${search}`,
      )
      .then((response) => {
        console.log(response.data);
        setDatauser(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const AddForm = () => {
    navigation.navigate('UserForm');
  };
  return (
    <>
      <View style={{marginTop: 10, marginHorizontal: 20}}>
        <InputData
          label="Search"
          placeholder="Type Here"
          value={search}
          onChangeText={(value) => setSearch(value)}
        />
        <View style={styles.container}>
          <Picker
            style={styles.pick}
            selectedValue={searchBy}
            onValueChange={(itemValue) => setSearchBy(itemValue)}>
            <Picker.Item label="Username" value="username" />
            <Picker.Item label="Email" value="email" />
            <Picker.Item label="Phone" value="phone" />
            <Picker.Item label="Address" value="address" />
          </Picker>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity style={styles.buttonContainer} onPress={AddForm}>
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
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={searchButton}>
            <Text
              style={{
                fontSize: 12,
                fontWeight: 'bold',
                color: 'white',
                textTransform: 'uppercase',
                textAlign: 'center',
              }}>
              Search
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={Datauser}
        renderItem={({item}) => (
          <View style={styles.listItem}>
            <View style={styles.listContent}>
              <Text>Username: {item.username}</Text>
              <Text>Email: {item.email}</Text>
              <Text>Phone: {item.phone}</Text>
              <Text>Address: {item.address}</Text>
              <View style={styles.icon}>
                <FontAwesomeIcon
                  icon={faEdit}
                  color={'orange'}
                  size={50}
                  onPress={() => navigation.navigate('EditForm', {item})}
                />
              </View>
            </View>
          </View>
        )}
      />
    </>
  );
};

export default User;

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    backgroundColor: '#FFF',
    width: '80%',
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5,
    borderColor: 'black',
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,

    elevation: 12,
    marginVertical: 10,
    flexBasis: '42%',
    marginHorizontal: 10,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 30,
    alignSelf: 'center',
  },
  listContent: {
    flex: 1,
    marginLeft: 20,
  },
  buttonContainer: {
    elevation: 8,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginBottom: 25,
    marginTop: 20,
    marginRight: 20,
    marginLeft: 5,
  },
  icon: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginTop: -70,
    marginBottom: 30,
  },
  pick: {
    borderColor: 'black',
    fontSize: 14,
    color: 'black',
    textAlignVertical: 'top',
  },
  container: {
    // flex: 1,
    borderRadius: 10,
    borderWidth: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 10,
  },
});
