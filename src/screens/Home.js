import React, { Component } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  ScrollView,
  Dimensions,
  ActivityIndicator,
  FlatList,
} from "react-native";
import {
  Header,
  Image,
  ListItem,
  Avatar,
  SearchBar,
} from "react-native-elements";
import { Feather } from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
const { height, width } = Dimensions.get("window");
import { listRoom, location } from "../../db/db.js";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: "",
      location: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      data: listRoom,
      location: location,
    });
  };

  render() {
    return (
      <View
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <Header
          leftComponent={() => <Feather name="menu" size={24} color="#ffff" />}
          backgroundColor="#694fad"
          centerComponent={{
            text: " TRANG CHỦ ",
            style: { color: "white" },
          }}
          rightComponent={() => (
            <FontAwesome name="search" size={24} color="#ffff" />
          )}
        />
        <ScrollView>
          <View>
            <View
              style={{
                width: "100%",
                paddingLeft: 15,
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  marginTop: 5,
                  fontSize: 15,
                  color: "#694fad",
                }}
              >
                Hi, bạn !
              </Text>
            </View>

            <View style={styles.viewimage}>
              <Swiper>
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://lh3.googleusercontent.com/proxy/s3nKFS3yQQpjS0_TACVU45swLty2Y1sKr1s4KzS7lW43ZrXSq5cRGdjWnrGnNHzDcwaoF-74frA9uQB1uWFPnpz4J5oPryzghQgLWkw4DsSQseCyHyw-Jj2xwfrfgX-1FuowAtBLRjQYDACnCLY2hjj7EXZ5NaI01zy1ZpNY7nW3UQxD2vL9vePpQckjwjdKPA",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://cdn3.ivivu.com/2014/01/SUPER-DELUXE2.jpg",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2018/05/ho-boi-spa.png",
                  }}
                />
                <Image
                  style={styles.image}
                  source={{
                    uri: "https://designs.vn/wp-content/images/15-04-2015/ph%C3%B2ng-ng%E1%BB%A7-kh%C3%A1ch-s%E1%BA%A1n-Suite%20(27).jpg",
                  }}
                />
              </Swiper>
            </View>
            <View
              style={{
                padding: 10,
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
              }}
            >
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    marginRight: 20,
                    justifyContent: "center",
                    alignItems: "center",
                    height: 100,
                  }}
                >
                  <View style={styles.item2}>
                    <Entypo name="location" size={24} color="red" />
                  </View>
                  <Text style={{ color: "#808080", marginTop: 3 }}>
                    Gần bạn
                  </Text>
                </View>
                {this.state.location.map((l, i) => (
                  <View
                    key={i}
                    style={{
                      marginRight: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={{
                        uri: l.image,
                      }}
                      style={styles.item1}
                    />
                    <Text style={{ color: "#808080", marginTop: 3 }}>
                      {l.title}
                    </Text>
                  </View>
                ))}
              </ScrollView>
            </View>
            <View
              style={{
                width: "100%",
                paddingLeft: 10,
              }}
            >
              <Text
                style={{ fontSize: 15, color: "#694fad", fontWeight: "bold" }}
              >
                Đề xuất :
              </Text>
            </View>
            <View style={styles.recommend}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              >
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View style={styles.loading}>
                    <Image
                      style={styles.imageRecommend}
                      source={{
                        uri: "https://noithatmyhouse.com/wp-content/uploads/2019/05/nguy-ly-thiet-ke-khach-san_4.jpg",
                      }}
                    />
                  </View>
                  <View style={styles.loading}>
                    <Image
                      style={styles.imageRecommend}
                      source={{
                        uri: "https://lh3.googleusercontent.com/proxy/POrEM5TkFBI9QiMiC6_Dh0TtndM16lqoDOh-NOkeyrWsseDjEYLt4QgwK85HG1sFVOeogTK7PkNXiohrqS0pQGlF9EXeRuaJsfqo2-xx7s8bo-VyWYH_JNtJqQ3G",
                      }}
                    />
                  </View>
                  <View style={styles.loading}>
                    <Image
                      style={styles.imageRecommend}
                      source={{
                        uri: "https://emthomestay.com/wp-content/uploads/2018/07/cac-thiet-ke-noi-that-phong-ngu-khach-san-emt-homestay-o-hue-hinh-anh-6.jpg",
                      }}
                    />
                  </View>
                  <View style={styles.loading}>
                    <Image
                      style={styles.imageRecommend}
                      source={{
                        uri: "https://lh3.googleusercontent.com/proxy/NkeQ6zYKOj7OqoP1n7Dvrtk-uxuN5mSqpZEj1LW8RhP4Kg87LJhjsSvsgBfkad9POy0aQSVZJSrcctjnc0w",
                      }}
                    />
                  </View>
                </View>
              </ScrollView>
            </View>
            <View
              style={{
                width: "100%",
                paddingLeft: 15,
                marginTop: 5,
                marginBottom: 10,
                flexDirection: "row",
                justifyContent: "space-between",
                width: "83%",
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  fontSize: 15,
                  color: "#694fad",
                }}
              >
                Danh sách phòng:
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("ListRoom")}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    fontSize: 15,
                    color: "blue",
                    borderBottomWidth: 1,
                  }}
                >
                  Xem thêm phòng
                </Text>
              </TouchableOpacity>
            </View>
            {this.state.data.map((l, i) => (
              <View key={i} style={styles.item}>
                <View
                  style={{
                    width: "100%",
                    height: 60,
                    borderBottomWidth: 1,
                    position: "absolute",
                    top: 0,
                    borderColor: "#bbbbbb",
                    padding: 5,
                    flexDirection: "row",
                  }}
                >
                  <View style={{ width: 60, marginLeft: 10 }}>
                    <Image
                      source={{
                        uri: l.logo,
                      }}
                      style={{
                        width: 50,
                        height: 50,
                        borderRadius: 50,
                        marginRight: 10,
                      }}
                    />
                  </View>

                  <View style={{ flexDirection: "column", padding: 5 }}>
                    <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                      {l.nameHotel}
                    </Text>
                    <Text
                      style={{
                        color: "#aaaaaa",
                        fontWeight: "bold",
                        marginTop: 5,
                      }}
                    >
                      {l.date}
                    </Text>
                  </View>
                  <View style={{ position: "absolute", top: -20, right: -10 }}>
                    <Foundation name="burst-new" size={60} color="#694fad" />
                  </View>
                </View>
                <View
                  style={{
                    width: "100%",
                    height: 50,
                    borderTopWidth: 1,
                    position: "absolute",
                    bottom: 0,
                    borderColor: "#bbbbbb",
                    flexDirection: "row",
                  }}
                >
                  <View
                    style={{
                      width: "50%",
                      borderRightWidth: 1,
                      borderColor: "#bbbbbb",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="hearto" size={24} color="#694fad" />
                    <Text style={{ fontWeight: "bold", color: "#694fad" }}>
                      Like
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("OrderRoom", { id: l.id })
                    }
                    style={{
                      width: "50%",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <AntDesign name="pluscircleo" size={24} color="#694fad" />
                    <Text style={{ fontWeight: "bold", color: "#694fad" }}>
                      Đặt phòng
                    </Text>
                  </TouchableOpacity>
                </View>
                <View style={{ height: 280, marginTop: 65 }}>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate("DetailRoom", { id: l.id })
                    }
                    style={{ alignItems: "center" }}
                  >
                    <Image
                      style={styles.image1}
                      source={{
                        uri: l.image,
                      }}
                    />
                  </TouchableOpacity>
                  <View style={{ marginLeft: 10, marginTop: 10 }}>
                    <Text style={{ fontWeight: "bold", fontSize: 15 }}>
                      {l.title}
                    </Text>
                    <Text
                      style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }}
                    >
                      {l.des}
                    </Text>
                    <Text
                      style={{ fontSize: 14, marginLeft: 10, marginTop: 5 }}
                    >
                      Giá: {l.price}
                    </Text>
                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                      <Entypo name="location" size={24} color="red" />
                      <Text
                        style={{
                          fontSize: 14,
                          marginLeft: 10,
                          marginTop: 5,
                          fontWeight: "bold",
                        }}
                      >
                        {l.address}
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Home;
const styles = StyleSheet.create({
  item1: {
    borderRadius: 50,
    height: 50,
    width: 50,
  },
  item2: {
    borderRadius: 50,
    borderColor: "#808080",
    borderWidth: 1,
    height: 50,
    width: 50,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: width - 30,
    height: height * 0.3,
    borderRadius: 10,
  },
  image1: {
    width: width - 40,
    height: height * 0.2,
    borderRadius: 10,
  },
  imageRecommend: {
    width: 120,
    height: height * 0.2,
    borderRadius: 8,
  },
  viewimage: {
    width: width - 30,
    height: height * 0.3,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    marginHorizontal: 16,
    marginVertical: 10,
    elevation: 3,
    borderTopColor: "#71B7B7",
    backgroundColor: "#EEEEEE",
    zIndex: 1,
    borderRadius: 10,
  },
  item: {
    width: width - 30,
    height: 450,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    marginHorizontal: 16,
    marginVertical: 10,
    elevation: 3,
    borderTopColor: "#71B7B7",
    backgroundColor: "#ffff",
    zIndex: 1,
    borderRadius: 10,
  },
  loading: {
    backgroundColor: "#EEEEEE",
    borderRadius: 8,
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 20,
    shadowOffset: { width: 0, height: 0 },
    shadowColor: "green",
    shadowOpacity: 0.1,
    elevation: 4,
    width: 120,
    height: height * 0.2,
  },
  recommend: {
    height: height * 0.25,
    marginTop: 10,
    marginRight: 10,
    marginLeft: 10,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    backgroundColor: "#ffff",
    borderRadius: 15,
    elevation: 2,
    borderColor: "#694fad",
    borderWidth: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    zIndex: 1,
  },
});
