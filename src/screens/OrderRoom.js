import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
} from "react-native";
import {
  Header,
  Image,
  ListItem,
  Avatar,
  SearchBar,
  Input,
} from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { listRoom } from "../../db/db.js";

class OrderRoom extends Component {
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
      <View style={{ justifyContent: "center" }}>
        <Header
          leftComponent={this.left()}
          backgroundColor="#694fad"
          centerComponent={{
            text: "TIẾN HÀNH ĐẶT HÀNG",
            style: { color: "white" },
          }}
        />
        <ScrollView>
          <View>
            {this.state.item.map((l, i) => (
              <View key={i} style={{ padding: 10 }}>
                <View style={{ flexDirection: "row", marginTop: 10 }}>
                  <FontAwesome5 name="hotel" size={22} color="#694fad" />
                  <Text
                    style={{ fontWeight: "bold", marginLeft: 10, fontSize: 20 }}
                  >
                    {l.nameHotel}
                  </Text>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    borderRadius: 5,
                    backgroundColor: "#ffff",
                    borderWidth: 1,
                    borderColor: "#694fad",
                    height: 100,
                    padding: 10,
                  }}
                >
                  <Image
                    style={styles.image}
                    source={{
                      uri: l.image,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "column",
                      marginTop: 10,
                      marginLeft: 10,
                    }}
                  >
                    <Text style={{ fontWeight: "bold", fontSize: 16 }}>
                      {l.title}
                    </Text>
                    <Text style={{ fontWeight: "bold", color: "#aaaaaa" }}>
                      Address: {l.address}
                    </Text>
                    <Text style={{ fontWeight: "bold", color: "#aaaaaa" }}>
                      Giá: {l.price}
                    </Text>
                  </View>
                </View>
                <View style={{ marginTop: 10 }}>
                  <Input placeholder="Họ Và Tên" />
                  <Input placeholder="Số điện thoại" />
                  <Input placeholder="Địa chỉ người đặt" />
                  <Input placeholder="Số CMND hoặc CCCD" />
                  <Input placeholder="Ghi chú" />
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    marginTop: 10,
                    padding: 10,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => this.props.navigation.goBack()}
                    style={{
                      borderWidth: 1,
                      width: "45%",
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#694fad",
                      borderRadius: 5,
                    }}
                  >
                    <Text style={{ color: "#694fad", fontWeight: "bold" }}>
                      Trở về
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => this.props.navigation.navigate("Payment")}
                    style={{
                      borderWidth: 1,
                      width: "45%",
                      height: 50,
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 5,
                      backgroundColor: "#694fad",
                    }}
                  >
                    <Text style={{ color: "#ffff", fontWeight: "bold" }}>
                      Thanh toán
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default OrderRoom;
const styles = StyleSheet.create({
  image: {
    width: 100,
    height: 80,
    borderRadius: 10,
    marginBottom: 20,
  },
});
