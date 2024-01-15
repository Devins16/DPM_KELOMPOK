import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ScheduleScreen = () => {
  const navigation = useNavigation();
  const [scheduleList, setScheduleList] = useState([]);
  const [newSchedule, setNewSchedule] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  // Load data jadwal dari AsyncStorage saat komponen dimount
  useEffect(() => {
    const loadScheduleData = async () => {
      try {
        const storedSchedule = await AsyncStorage.getItem('scheduleList');
        if (storedSchedule) {
          setScheduleList(JSON.parse(storedSchedule));
        }
      } catch (error) {
        console.error('Gagal mengambil data jadwal:', error.message);
      }
    };

    loadScheduleData();
  }, []);

  // Fungsi untuk menyimpan data jadwal ke AsyncStorage
  const saveScheduleData = async (data) => {
    try {
      await AsyncStorage.setItem('scheduleList', JSON.stringify(data));
    } catch (error) {
      console.error('Gagal menyimpan data jadwal:', error.message);
    }
  };

  const handleAddSchedule = () => {
    if (newSchedule && selectedDate) {
      // Menambahkan jadwal baru ke dalam daftar
      const updatedList = [...scheduleList, { date: selectedDate, event: newSchedule }];
      setScheduleList(updatedList);

      // Menyimpan data jadwal ke AsyncStorage
      saveScheduleData(updatedList);

      // Mengosongkan input setelah menambahkan jadwal
      setNewSchedule('');
      setSelectedDate('');
    }
  };

  const handleDeleteSchedule = (index) => {
    // Menampilkan konfirmasi sebelum menghapus
    // Di sini, Anda dapat menggunakan modal atau konfirmasi lainnya

    // Hapus jadwal dari daftar
    const updatedList = [...scheduleList];
    updatedList.splice(index, 1);
    setScheduleList(updatedList);

    // Simpan data jadwal yang baru ke AsyncStorage
    saveScheduleData(updatedList);
  };

  const handleNavigateToAbsensi = (date, event) => {
    // Show pop-up message when "Absen" button is pressed
    Alert.alert(
      'Absen Berhasil',
      'Anda berhasil melakukan absen.',
      [
        {
          text: 'OK',
          onPress: () => {
            // Handle the "OK" button press if needed
          },
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Custom Header with Back Button */}
      <View>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ position: 'absolute', left: 10, top: 50 }}
        >
          <Ionicons name="arrow-back" size={40} color="black" />
        </TouchableOpacity>
      </View>

      {/* Main Content */}
      <View style={{ flex: 1, padding: 20, margin: 40, top: 40 }}>
        {/* Input untuk Tambah Jadwal */}
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Tambah Jadwal</Text>
        <TextInput
          placeholder="Jadwal Acara"
          value={newSchedule}
          onChangeText={(text) => setNewSchedule(text)}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 5 }}
        />
        <TextInput
          placeholder="Tanggal (e.g., November 23)"
          value={selectedDate}
          onChangeText={(text) => setSelectedDate(text)}
          style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20, padding: 5 }}
        />
        <TouchableOpacity onPress={handleAddSchedule} style={{ backgroundColor: 'lightblue', padding: 10 }}>
          <Text style={{ fontSize: 16, color: 'black' }}>Tambah Jadwal</Text>
        </TouchableOpacity>

        {/* Daftar Jadwal */}
        <ScrollView style={{ marginTop: 20 }}>
          {scheduleList.map((schedule, index) => (
            <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
              <Text>{schedule.date} - {schedule.event}</Text>
              <TouchableOpacity onPress={() => handleNavigateToAbsensi(schedule.date, schedule.event)}>
                <Text style={{ color: 'green' }}>Absen</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ScheduleScreen;
