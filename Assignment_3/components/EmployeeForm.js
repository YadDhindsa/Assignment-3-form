// components/EmployeeForm.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

export default function EmployeeForm() {
  const EmployeeSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    phone: Yup.string().required('Phone number is required'),
    department: Yup.string().required('Department is required'),
  });

  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        department: '',
      }}
      validationSchema={EmployeeSchema}
      onSubmit={(values) => {
        console.log('Employee Info:', values);
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
        <View style={styles.form}>
          <TextInput
            style={styles.input}
            placeholder="First Name"
            onChangeText={handleChange('firstName')}
            onBlur={handleBlur('firstName')}
            value={values.firstName}
          />
          {touched.firstName && errors.firstName && (
            <Text style={styles.error}>{errors.firstName}</Text>
          )}
          
          <TextInput
            style={styles.input}
            placeholder="Last Name"
            onChangeText={handleChange('lastName')}
            onBlur={handleBlur('lastName')}
            value={values.lastName}
          />
          {touched.lastName && errors.lastName && (
            <Text style={styles.error}>{errors.lastName}</Text>
          )}
          
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && (
            <Text style={styles.error}>{errors.email}</Text>
          )}
          
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            onChangeText={handleChange('phone')}
            onBlur={handleBlur('phone')}
            value={values.phone}
          />
          {touched.phone && errors.phone && (
            <Text style={styles.error}>{errors.phone}</Text>
          )}
          
          <TextInput
            style={styles.input}
            placeholder="Department"
            onChangeText={handleChange('department')}
            onBlur={handleBlur('department')}
            value={values.department}
          />
          {touched.department && errors.department && (
            <Text style={styles.error}>{errors.department}</Text>
          )}
          
          <Button title="Submit" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  form: {
    padding: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
