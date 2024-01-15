import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';

// Import images directly (assuming they are in the same folder as this component file)
const logoImage = require('./logo.png');
const groupPhoto = require('./groupPhoto.png');
const announcementImage = require('./announcement.png');
const mapImage = require('./map.png');

export default function App() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View style={{ alignItems: 'center', padding: 20 }}>
        <Image source={logoImage} style={{ width: 200, height: 100, resizeMode: 'contain' }} />
        <Text style={{ textAlign: 'center', marginVertical: 20 }}>
        "Taekwondo Victory Club adalah sebuah klub yang menyuarakan semangat dan dedikasi dalam mengembangkan seni bela diri Taekwondo. Dengan fokus pada pengembangan atlet, klub ini bukan hanya tempat untuk latihan teknis, tetapi juga sebagai wadah bagi individu untuk mengasah keterampilan, mentalitas juang, dan nilai-nilai kejujuran serta disiplin.”
        </Text>
        <Image source={groupPhoto} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
        <Text style={{ textAlign: 'center', marginVertical: 20 }}>
        "Taekwondo Victory Club telah mengukir prestasi gemilang dengan 14 medali emas, 4 perak, dan 1 perunggu dalam kompetisi Taekwondo. Prestasi ini menandai keunggulan klub dalam menghasilkan atlet-atlet unggul di tingkat lokal maupun nasional."

        </Text>
        <Image source={announcementImage} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
       
        <Image source={mapImage} style={{ width: '100%', height: 200, resizeMode: 'cover' }} />
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity 
        style={{ backgroundColor: 'blue', padding: 10, marginBottom: 10 }}
        onPress={() => Linking.openURL('tel:+6281234567890')}>
        <Text style={{ color: 'white' }}>Hubungi via Telepon/WA</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={{ backgroundColor: 'green', padding: 10 }}
        onPress={() => Linking.openURL('mailto:contoh@gmail.com')}>
        <Text style={{ color: 'white' }}>Kirim Email</Text>
      </TouchableOpacity>
    </View>
      </View>
    </ScrollView>
  );
}
