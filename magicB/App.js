import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from "react-native";
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function App() {
  const [joke, setJoke] = useState([]);
  useEffect(() => {
    getJoke();
  }, []); // Sans les crochets ça tourne en boucle

  const getJoke = async () => {
    await axios.get("https://random-data-api.com/api/v2/users").then((res) => {
      setJoke(res.data);
      console.log(res);
    });
  };
  // console.log(joke);
  return (
    <View style={styles.container}>
      <Text style={{ textAlign: "center", fontSize: 20 }}>
        {joke.first_name}
      </Text>

      <Button
        onPress={getJoke}
        title="Joke prédiction"
        color="#841584"
        accessibilityLabel="Magic Chuck prédiction"
      />
      <StatusBar style="auto" />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
