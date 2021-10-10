import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  ActivityIndicator,
  TextInput,
  ScrollView,
} from "react-native";
import { Header, Image, ListItem, Avatar } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { listRoom } from "../../db/db.js";

class DetailRoom extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      data: [],
    };
  }
  componentDidMount = async () => {
    let obj = await listRoom.filter((a) => a.id == this.props.route.params.id);
    await this.setState({
      item: obj,
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
          leftComponent={this.left()}
          backgroundColor="#694fad"
          centerComponent={{
            text: "CHI TIẾT PHÒNG",
            style: { color: "white" },
          }}
        />
        <ScrollView>
          {this.state.item.map((l, i) => (
            <View key={i}>
              <View
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: l.image,
                  }}
                  style={{ width: 350, height: 200, marginTop: 20 }}
                  PlaceholderContent={<ActivityIndicator />}
                />
                <Text
                  style={{ fontSize: 30, fontWeight: "bold", marginTop: 10 }}
                >
                  {l.nameHotel}
                </Text>
                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                >
                  {l.title}
                </Text>
              </View>
              <View style={{ padding: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                  - Mô tả :
                </Text>
                <Text
                  style={{
                    lineHeight: 25,
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize: 18,
                  }}
                >
                  + {l.des}
                </Text>

                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                >
                  - Giá:
                </Text>
                <Text
                  style={{
                    lineHeight: 25,
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize: 18,
                  }}
                >
                  + {l.price}
                </Text>

                <Text
                  style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}
                >
                  - Địa chỉ:
                </Text>
                <Text
                  style={{
                    lineHeight: 25,
                    marginLeft: 10,
                    marginTop: 10,
                    fontSize: 18,
                  }}
                >
                  + {l.address}
                </Text>
              </View>
              <View
                style={{ flexDirection: "row", padding: 10, marginTop: 10 }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 20 }}>
                  Lượt đánh giá:
                </Text>
                <Text style={{ color: "red" }}>*</Text>
              </View>
              <View
                style={{
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                  display: "flex",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    width: "60%",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <AntDesign name="star" size={24} color="#FFD700" />
                  <AntDesign name="star" size={24} color="#FFD700" />
                  <AntDesign name="star" size={24} color="#FFD700" />
                  <AntDesign name="staro" size={24} color="#FFD700" />
                  <AntDesign name="staro" size={24} color="#FFD700" />
                </View>
                <TouchableOpacity
                  onPress={() =>
                    this.props.navigation.navigate("OrderRoom", { id: l.id })
                  }
                  style={{
                    height: 50,
                    width: 200,
                    backgroundColor: "#694fad",
                    borderRadius: 5,
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: 10,
                  }}
                >
                  <Text
                    style={{ color: "#ffff", fontWeight: "bold", fontSize: 17 }}
                  >
                    Đặt phòng
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    );
  }
}

export default DetailRoom;
