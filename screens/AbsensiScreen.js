// AbsensiScreen.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const AbsensiScreen = ({ route }) => {
  const { date, event } = route.params;
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {/* Custom Header with Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: 'absolute', left: 10, top: 50 }}
      >
        <Ionicons name="arrow-back" size={40} color="black" />
      </TouchableOpacity>

      {/* Main Content */}
      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Absensi - {date}</Text>
        <Text style={{ fontSize: 20 }}>{event}</Text>

        {/* Your Absensi Content Goes Here */}
        {/* For example, you can add buttons or components related to attendance */}
      </View>
    </View>
  );
}

export default AbsensiScreen;
