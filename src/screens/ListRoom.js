import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import {
  Header,
  Image,
  ListItem,
  Avatar,
  SearchBar,
  ScrollView,
} from "react-native-elements";
import { listRoom } from "../../db/db.js";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
class ListRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
    };
  }

  componentDidMount = () => {
    this.setState({
      data: listRoom,
    });
  };
  left = () => {
    return (
      <TouchableOpacity
        onPress={() => this.props.navigation.goBack()}
        style={{ marginLeft: 15, width: 50 }}
      >
        <Ionicons
          style={{ marginTop: 1 }}
          name="ios-arrow-back"
          size={24}
          color="#ffff"
        />
      </TouchableOpacity>
    );
  };
  render() {
    return (
      <View>
        <Header
          leftComponent={() => this.left()}
          backgroundColor="#694fad"
          centerComponent={{
            text: " DANH SÁCH PHÒNG ",
            style: { color: "white" },
          }}
        />

        <View style={styles.container}>
          {this.state.data.map((l, i) => (
            <View key={i} style={styles.item}>
              <Image
                style={styles.image}
                source={{
                  uri: l.image,
                }}
              />
              <TouchableOpacity
                onPress={() =>
                  this.props.navigation.navigate("DetailRoom", { id: l.id })
                }
                style={{
                  flexDirection: "column",
                  marginTop: 20,
                  marginLeft: 5,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                  {l.title}
                </Text>
                <Text style={{ fontWeight: "bold", color: "#aaaaaa" }}>
                  Giá: {l.price}
                </Text>
              </TouchableOpacity>
              <View style={styles.body}>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("OrderRoom", { id: l.id })
                  }
                  style={styles.button}
                >
                  <AntDesign name="pluscircleo" size={24} color="#ffff" />
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    );
  }
}

export default ListRoom;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 160,
    padding: 10,
  },
  item: {
    borderWidth: 1,
    height: 100,
    marginTop: 10,
    borderRadius: 5,
    borderColor: "#694fad",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  body: {
    marginLeft: 10,
    width: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: 50,
    backgroundColor: "#694fad",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
});
