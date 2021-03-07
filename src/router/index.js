import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {User, UserForm, EditForm} from '../pages';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="User"
        component={User}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="UserForm"
        component={UserForm}
        options={{title: 'Input Form'}}
      />
      <Stack.Screen name="EditForm" component={EditForm} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
