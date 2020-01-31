import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView
} from "react-native";

const EmailAndPassword = () => {
  return (
    <KeyboardAvoidingView style={styles.keyboard} behavior="padding" enabled>
      <ScrollView contentContainerStyle={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Email"
          placeholderTextColor="#242424"
        />
        <TextInput
          style={styles.textInput}
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#242424"
        />
        <TouchableOpacity>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  keyboard: {
    flex: 1
  },
  textInput: {
    width: 300,
    height: 50,
    paddingLeft: 10,
    marginBottom: 30,
    color: "#222",
    borderWidth: 1
  },
  buttonText: {
    textAlign: "center",
    backgroundColor: "#242424",
    color: "#fff",
    paddingVertical: 15,
    marginBottom: 30
  }
});

export default EmailAndPassword;
