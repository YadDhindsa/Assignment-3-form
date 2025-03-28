// screens/SignInScreen.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import SignInForm from '../components/SignInForm';

export default function SignInScreen() {
  return (
    <View style={styles.container}>
      <SignInForm />
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
