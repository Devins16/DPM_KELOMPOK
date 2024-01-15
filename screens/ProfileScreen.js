import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserType } from "../UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const [user, setUser] = useState("");
  const navigation = useNavigation();
  const { userId, setUserId } = useContext(UserType);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://10.0.2.2:3000/profile/${userId}`
        );
        const { user } = response.data;
        setUser(user);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchProfile();
  }, []);

  const logout = () => {
    clearAuthToken();
  };

  const clearAuthToken = async () => {
    await AsyncStorage.removeItem("authToken");
    console.log("Cleared auth token");
    navigation.replace("Login");
  };

  return (
    <View style={{ marginTop: 55, padding: 15, alignItems: "center" }}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/149/149071.png",
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
          Devin
        </Text>
      </View>
      

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <View style={styles.tableContainer}>
          <View style={styles.row}>
            <View style={styles.cell}>
              <Text style={{textAlign:'center'}}>Tingkat</Text>
              <Text></Text>
              <Text style={{textAlign:'center'}}>Geup-2</Text>
            </View>
            <View style={styles.cell}>
            <Image
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            resizeMode: "contain",
          }}
          source={{uri: 'asset:/tingkatan.jpg'}}
          />
            </View>
          </View>
    </View>
        
      </View>
      <Text style={{ color: "gray", fontSize: 15, marginTop: 10, textAlign:'left'}}>
         Progress Saya
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          gap: 20,
          marginTop: 20,
        }}
      >
        <View style={styles.tableContainer1}>
          <View style={styles.row1}>
            <View style={styles.cell1}>
            <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/8215/8215539.png"}}
        />
      </View>
              <Text style={{textAlign:'center'}}>23</Text>
              <Text style={{textAlign:'center'}}>Mengikuti Latihan</Text>
            </View>
            <View style={styles.cell1}>
            <View style={{ alignItems: "center" }}>
        <Image
          style={{
            width: 50,
            height: 50,
            resizeMode: "contain",
          }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/3750/3750043.png "}}
        />
      </View>
              <Text style={{textAlign:'center'}}>1</Text>
              <Text style={{textAlign:'center'}}>Menang Turnamen</Text>
            </View>
          </View>
          <Text style={{margin:13,marginLeft:45, fontWeight:"bold"}}>Bergabung Sejak 2021</Text>
    </View>
        
      </View>
      
      

      <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginTop: 20 }}>
        <Pressable
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text>Edit Profile</Text>
        </Pressable>

        <Pressable
          onPress={logout}
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderRadius: 5,
          }}
        >
          <Text>Logout</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderColor: "black",
    width:400,
    height:100
  },
  row: {
    flexDirection: "row",
  
    width:400,
    height:100
  },
  cell: {
    borderWidth: 1,
    borderColor: "black",
    flex: 1,
    padding: 10,
    width:400,
    height:100
  },
  row1: {
    flexDirection: "row",
  
    width:400,
    height:100,
    borderBottomWidth: 1, 
    borderBottomColor: "black", 
  },
  cell1: {
    flex: 1,
    padding: 10,
    width:400,
    height:100
  },
  tableContainer1: {
    borderWidth: 1,
    borderRadius:20,
    borderColor: "black",
    width:400,
    height:150
  },
});

