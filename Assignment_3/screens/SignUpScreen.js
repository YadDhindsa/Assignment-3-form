// screens/SignUpScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignUpForm from '../components/SignUpForm';

export default function SignUpScreen() {
  return (
    <View style={styles.container}>
      <SignUpForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    padding: 16 
  },
});
