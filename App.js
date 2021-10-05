import React, { Component } from "react";
import { View, StyleSheet, Text, Button } from "react-native";

class ViewComponent extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View style={myStyles.wadahUtama}>
        <View style={myStyles.wadahKecil1}>
          <Text style={myStyles.teksBiasa}>Header</Text>
        </View>
        <View style={myStyles.wadahKecil2}>
          {/* <Text style={myStyles.teksBiasa}>Content</Text> */}
          <View style={myStyles.wadahButton}>
            <Button title="Click Me" color="#005b96" />
          </View>
          <View style={myStyles.wadahBanyakButton}>
            <Button title="Button One" color="#005b96" />
            <Button title="Button Two" color="#005b96" />
            <Button title="Button Three" color="#005b96" />
          </View>
        </View>
        <View style={myStyles.wadahKecil3}>
          <Text style={myStyles.teksBiasa}>Footer</Text>
        </View>
      </View>
    );
  }
}

const App = () => {
  return <ViewComponent />;
};

export default App;

const myStyles = StyleSheet.create({
  wadahUtama: {
    flex: 1,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    backgroundColor: "#5f3b97",
  },
  wadahKecil1: {
    flex: 0.1,
    backgroundColor: "#011f4b",
    justifyContent: "center",
  },
  wadahKecil2: {
    flex: 0.8,
    backgroundColor: "#b3cde0",
    justifyContent: "center",
  },
  wadahKecil3: {
    flex: 0.1,
    backgroundColor: "#005b96",
    justifyContent: "center",
  },
  teksBiasa: {
    fontSize: 18,
    color: "#ffffff",
    textAlign: "center",
  },
  wadahButton: {
    margin: 16,
  },
  wadahBanyakButton: {
    margin: 16,
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
