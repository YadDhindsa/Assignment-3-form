// screens/EmployeeScreen.js
import React from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import EmployeeForm from '../components/EmployeeForm';

export default function EmployeeScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <EmployeeForm />
      <View style={styles.buttonContainer}>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Go to Sign In" 
            onPress={() => navigation.navigate('SignIn')} 
          />
        </View>
        <View style={styles.buttonWrapper}>
          <Button 
            title="Go to Sign Up" 
            onPress={() => navigation.navigate('SignUp')} 
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 16 
  },
  buttonContainer: {
    marginTop: 20,
  },
  buttonWrapper: {
    marginBottom: 10, 
  },
});
