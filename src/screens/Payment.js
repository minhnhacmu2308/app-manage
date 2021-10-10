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
  CheckBox,
} from "react-native-elements";
import { FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
      data: [],
      checked1: false,
      checked: true,
    };
  }
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
  onChange = () => {
    if (this.state.checked1 == true) {
      this.setState({
        checked: true,
        checked1: false,
      });
    }
  };
  onChange1 = () => {
    if (this.state.checked == true) {
      this.setState({
        checked1: true,
        checked: false,
      });
    }
  };
  render() {
    return (
      <View>
        <Header
          leftComponent={this.left()}
          backgroundColor="#694fad"
          centerComponent={{
            text: "THANH TOÁN",
            style: { color: "white" },
          }}
        />
        <ScrollView>
          <View>
            <CheckBox
              title="Thanh toán tại quầy lễ tân"
              checked={this.state.checked}
              checkedColor="#694fad"
              onPress={() => this.onChange()}
            />

            <CheckBox
              title="Thanh toán online"
              checkedColor="#694fad"
              onPress={() => this.onChange1()}
              checked={this.state.checked1}
            />
          </View>
          {this.state.checked1 ? (
            <View>
              <View
                style={{
                  borderWidth: 1,
                  height: 80,
                  margin: 10,
                  borderRadius: 5,
                  backgroundColor: "#ffff",
                  borderColor: "#694fad",
                  justifyContent: "center",
                  paddingLeft: 10,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>
                  Link to credit card, debit card
                </Text>
                <Text
                  style={{
                    marginTop: 10,
                    fontWeight: "300",
                    fontSize: 16,
                    borderBottomWidth: 1,
                    width: 90,
                    color: "blue",
                  }}
                >
                  Add connective
                </Text>
              </View>
              <View style={{ margin: 5 }}>
                <Input placeholder="Số thẻ" />
                <Input placeholder="Tên chủ thẻ" />
                <Input placeholder="Ngày hết hạn" />
                <Input placeholder="CVV" />
              </View>
              <View style={{ justifyContent: "center", alignItems: "center" }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "70%",
                  }}
                >
                  <View style={styles.menhgia1}>
                    <Text style={styles.textmoney}>100.000</Text>
                  </View>
                  <View style={styles.menhgia}>
                    <Text style={styles.textmoney}>200.000</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "70%",
                    marginTop: 15,
                  }}
                >
                  <View style={styles.menhgia1}>
                    <Text style={styles.textmoney}>500.000</Text>
                  </View>
                  <View style={styles.menhgia}>
                    <Text style={styles.textmoney}>1.000.000</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "center",
                    width: "70%",
                    marginTop: 15,
                  }}
                >
                  <View style={styles.menhgia1}>
                    <Text style={styles.textmoney}>2.000.000</Text>
                  </View>
                  <View style={styles.menhgia}>
                    <Text style={styles.textmoney}>5.000.000</Text>
                  </View>
                </View>
              </View>
            </View>
          ) : null}

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
        </ScrollView>
      </View>
    );
  }
}

export default Payment;
const styles = StyleSheet.create({
  menhgia1: {
    width: 100,
    height: 40,
    borderWidth: 1,
    marginRight: 20,
    borderColor: "#694fad",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  textmoney: {
    fontWeight: "bold",
  },
  menhgia: {
    width: 100,
    height: 40,
    borderWidth: 1,
    marginLeft: 20,
    borderColor: "#694fad",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
  },
});
