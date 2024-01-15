import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Text, TouchableOpacity, Image, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Materi from './Materi'; // Import the Materi component
import Jadwal from './Jadwal';

const jadwalImage = require('./Jadwal.png');
const materiImage = require('./Materi.png');

const HomeStack = createStackNavigator();

const Home = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ headerShown: false }} // Add this line
      />
      <HomeStack.Screen 
        name="Materi" 
        component={Materi} 
        options={{ headerShown: false }} // Add this line
      />
      <HomeStack.Screen 
        name="Jadwal" 
        component={Jadwal} 
        options={{ headerShown: false }} // Add this line
      />
    </HomeStack.Navigator>
  );
}


const HomeScreen = () => {
  const navigation = useNavigation();

  const handleJadwal = () => {
    navigation.navigate('Jadwal');
  };

  const handleMateri = () => {
    navigation.navigate('Materi'); // This will now navigate to the Materi screen in the HomeStack
  };

  return (
    <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center', paddingTop: 50, marginTop: 50 }}>
      <Ionicons name="notifications" size={24} color="black" />
      <View style={{ backgroundColor: 'grey', width: '100%', padding: 60 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' }}>
          Pengumuman
        </Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <TouchableOpacity onPress={handleJadwal} style={{ backgroundColor: '#00ECFF', padding: 20, marginBottom: 30, marginTop: 50, width: 300, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 20 }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: "bold" }}>Jadwal</Text>
          <Image source={jadwalImage} style={{ width: 50, height: 50, resizeMode: 'contain' }} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleMateri} style={{ backgroundColor: '#00ECFF', padding: 10, marginBottom: 10, width: 300, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 1, borderColor: 'black', borderRadius: 20 }}>
          <Text style={{ color: 'black', fontSize: 20, fontWeight: "bold" }}>Materi</Text>
          <Image source={materiImage} style={{ width: 70, height: 70, resizeMode: 'contain' }} />
        </TouchableOpacity>
      </View>
     
    </View>
  );
}

export default Home;


