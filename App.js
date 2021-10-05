import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

class ViewComponent extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false,
    };
  }

  bukaModal(show) {
    this.setState({ isVisible: show });
  }

  bukaAlert = () => {
    alert("Alert dengan satu tombol");
  };

  bukaAlert2Tombol = () => {
    Alert.alert(
      "Hello!",
      "Alert dengan dua tombol",
      [
        { text: "Ok", onPress: () => console.log("Menekan tombol Ok") },
        {
          text: "Cancel",
          onPress: () => console.log("Menekan tombol cancel"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
  };

  bukaAlert3Tombol = () => {
    Alert.alert(
      "Hello!",
      "Alert dengan tiga tombol",
      [
        { text: "Ok", onPress: () => console.log("Menekan tombol Ok") },
        {
          text: "Cancel",
          onPress: () => console.log("Menekan tombol cancel"),
        },
        {
          text: "Ask me later",
          onPress: () => console.log("Menekan tombol ask me later"),
        },
      ],
      {
        cancelable: false,
      }
    );
  };

  render() {
    return (
      <View style={myStyles.wadahUtama}>
        <View style={myStyles.wadahKecil1}>
          <Text style={myStyles.teksBiasa}>Header</Text>
        </View>
        <View style={myStyles.wadahKecil2}>
          <View style={myStyles.wadahModal}>
            <Modal
              visible={this.state.isVisible}
              animationType={"slide"}
              transparent={false}
              onRequestClose={() => {
                Alert.alert("Modal ditutup!");
              }}
            >
              <Image
                style={myStyles.gambar}
                source={require("./assets/image_1.jpg")}
              />
              <Text style={myStyles.teksWarna}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec
                justo in ipsum sodales eleifend. Vestibulum ante ipsum primis in
                faucibus orci luctus et ultrices posuere cubilia curae;
              </Text>
              <Text> </Text>
              <TouchableOpacity
                style={myStyles.wadahTouchable}
                onPress={() => {
                  this.bukaModal(!this.state.isVisible);
                }}
              >
                <Text style={myStyles.teksBiasa}>Close Modal</Text>
              </TouchableOpacity>
            </Modal>
          </View>

          <View style={myStyles.wadahButton}>
            <Button title="Click Me" color="#005b96" />
          </View>
          <View style={myStyles.wadahBanyakButton}>
            <Button
              title="Button One"
              color="#005b96"
              onPress={this.bukaAlert}
            />
            <Button
              title="Button Two"
              color="#005b96"
              onPress={this.bukaAlert2Tombol}
            />
            <Button
              title="Button Three"
              color="#005b96"
              onPress={this.bukaAlert3Tombol}
            />
          </View>
          <View style={myStyles.wadahButton}>
            <TouchableOpacity
              style={myStyles.wadahTouchable}
              onPress={() => {
                this.bukaModal(true);
              }}
            >
              <Text style={myStyles.teksBiasa}>Buka Modal</Text>
            </TouchableOpacity>
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
  teksWarna: {
    fontSize: 18,
    color: "#005b96",
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
  wadahTouchable: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    height: 60,
    width: "100%",
    borderRadius: 10,
    backgroundColor: "#005b96",
    shadowOpacity: 0.8,
    shadowRadius: 24,
  },
  wadahModal: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    justifyContent: "center",
  },
  gambar: {
    margin: 18,
    padding: 18,
    width: "90%",
    height: 350,
  },
});
