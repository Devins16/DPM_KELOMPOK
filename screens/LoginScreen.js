import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
  ImageBackground

} from "react-native";
import React, { useState, useEffect } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import image from "../assets/1.jpeg";



const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigation();
  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = await AsyncStorage.getItem("authToken");

        if (token) {
          setTimeout(() => {
            navigation.replace("Main");
          }, 400);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    checkLoginStatus();
  }, []);
  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("http://10.0.2.2:3000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.navigate("Main");
      })
      .catch((error) => {
        Alert.alert("Login error                                                                     Pastikan Data Anda Benar");
        console.log("error ", error);
      });
  };

  return (
    
    <SafeAreaView 
      style={{ flex: 1 }}
    >
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <View style={{alignItems: 'center'}}>
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 150, resizeMode: "contain" }}
          source={{
              uri: "https://scontent.fdjb3-1.fna.fbcdn.net/v/t39.30808-6/305032974_104815729038075_7692569095737820654_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeHm2WXB4af8dPk_wwgv33ex9xjZNrQ5_uH3GNk2tDn-4fBBA4m62_E7937-W3N9Q8XOYsxFmrFgJUYkQgsDBIBf&_nc_ohc=e8oPvG7Y_PUAX-Srhtp&_nc_ht=scontent.fdjb3-1.fna&oh=00_AfBgQPyi-VYpabcIaoDASzcVadPRK6RDHl-dOW81LV7PwQ&oe=65887662",
            
          }}
        />
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "left", justifyContent: "center" }}>
          <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 25,textAlign:'left'}}>
            Login
          </Text>
        </View>

        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
              backgroundColor:"white"
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={"black"}
              style={{
                color: "black",
                marginVertical: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Email Anda"
            />
          </View>

          <View style={{ marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
              backgroundColor:"white"

              }}
            >
              <AntDesign
                style={{ marginLeft: 8 }}
                name="lock"
                size={24}
                color="black" 
              />
              <TextInput
                secureTextEntry={true}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholderTextColor={"black"}
                style={{
                  color: "black",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                placeholder="Password Anda"
              />
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 12,
            }}
          >
            <Text>Tetap Login</Text>
            <Text style={{ fontWeight: "500", color: "#007FFF" }}>
              Lupa Password
            </Text>
          </View>
        </View>

        <View style={{ marginTop: 45 }} />

        <Pressable
          onPress={handleLogin}
          style={{
            width: 300,
            backgroundColor: "#0FD047",
            padding: 15,
            marginTop: 10,
            marginLeft: "auto",
            marginRight: "auto",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Login
          </Text>
        </Pressable>

        <Pressable
          onPress={() => navigation.navigate("Register")}
          style={{ marginTop: 10 }}
        >
          <Text style={{ textAlign: "center", fontSize: 16 }}>
            Belum Punya Akun? Sign up
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
      </View>
      </ImageBackground>
    </SafeAreaView>
   
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  image: {
    flex: 1,
    justifyContent: 'center',
    width:"100%",
    height:"100%",
    resizeMode:"cover"
  },
});
