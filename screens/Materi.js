import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Materi = () => {
  const navigation = useNavigation();
  const [selectedMateri, setSelectedMateri] = useState(null);
  const [selectedText, setSelectedText] = useState(null);

  const seogiText = 'Teknik kuda-kuda (Seogi)\n1. AP koobi: Ini merupakan salah satu teknik kuda-kuda yang paling umum dan seringkali mendasari banyak gerakan dalam seni beladiri. Kaki depan menghadap ke depan sementara kaki belakang berada di posisi tumpul atau agak miring dari garis lurus antara kedua kaki dengan berat badan yang seimbang pada kedua kaki.\n2. Ap Seogi: Teknik posisi ini adalah dengan mengarahkan paha ke atas dan bahu ke arah lawan atau target serangan adalah bagian terbuka lawan tanding.\n3. Moa Seogi: Ini adalah kuda-kuda dengan kaki berposisi rapat dengan lutut sedikit menekuk dan kepala di posisi tegak lurus terhadap lantai. Keseimbangan tubuh sangat penting untuk teknik ini agar tidak mudah jatuh ketika menerima serangan musuh atau ketika melakukan serangan balik.\n4. Dwit Koobi: Ini merupakan gerakan kuda-kuda dengan membuka lebar kedua bahu dan posisi tumpu ke depan sambil menekukkan badan ke arah';
  
  const jireugiText = '1. Apkoobi junbi: Lankah awal gerak poomse ini ada sejumlah variasi yang berbeda-beda tergantung pada tingkat kesulitan dan kompleksitas gerakan yang akan dilakukan selanjutnya.\n2. Apkoobi joonbi: Lankah awal gerak poomse ini juga memiliki sejumlah variasi yang berbeda-beda tergantung pada tingkat kesulitan dan kompleksitas gerakan yang akan dilakukan selanjutnya.\n3. Ap seogi: Pada posisi ini kaki depan lurus ke depan sementara kaki belakang menopang tubuh dengan posisi agak miring ke samping.\n4. Moa seogi junbi: Pada posisi ini kedua kaki rapat dan kedua tangan di depan dada dengan posisi telapak tangan menghadap ke atas.\n5. Orun ap seogi: Pada posisi ini kaki kanan di depan';

  const chagiText = 'Untuk bisa melakukan gerakan tendangan ini, perlu dilakukan dengan memutar tubuh ke belakang hingga 360 derajat. Oleh sebab itu teknik tendangan ini terkadang juga disebut sebagai tendangan tornado.\nAdapun untuk melakukan tendangan ini, karena tendangn ini juga sdi sebut sebagai tendangan ganda. Maka yang bisa dilakukan ke samping dan secara langsung sebelum kaki yang lain turun menyentuh pada permukaan tanah atau lantai.\nGerakan tendangan ini perlu dilakukan ke arah depan, karena sasaranya biasanya pada bagian perut dan kepala. Untuk tendangan ini bisa dilakukan dengan menggunakan ujung depan telapak kaki. Dan biasanya kaki yang digunakan untuk menendang benar-benar harus bisa lurus dengan arah keatas apabila sebagai target sasarannya adalah bagian kepala. Luruskanjuga kaki tepat ke depam jika memang target tendangan adalah pada bagian perut lawan.';

  const makkiText = 'Gerakan tangkisan ini diarahkan ke bagian bawah dengan menggunakan kepalan tangan. Perlu diketahui, dalam taekwondo tak hanya cukup mengerti bagaimana cara memukul, menedang namun juga terkait cara menangkis pukulan dari lawan yang datang dari arah manapun. \nGerakan tangkisan ini dilakukan dari tengah ke dalam dengan mamakai bagian luar lengan bawah. Ada kesamaan dengan gerakan pukulan Chi Jireugi, hanya saja pada gerakan ini tujuannya adalah untuk menangkis. Dan pada saat lawan menyerang dari arah depan secara langsung dan lurus ke bagian dada atau perut atau leher, maka gerakan ini bisa digunakan untuk melindungi diri. \nGerakan tangkisan ini adalah ke atas dan target yang menjadi sasaran bagian kepala. Pada saat lawan mencoba memukul pada daerah kepala, terutama kepala bagian atas. Maka secara sigap teknik gerakan ini bisa di pergunakan demi menangkis serangan lawan tersebut. Kepalkan tangan sebelah kiri dan langsung bawa ke atas yang bisa menangkis serangan dari atas atu juga dari samping kepala.'

  const chigiText = 'Gerakan ini merupakan upaya atau tindakan sabetan yang dilakukan dengan memakai lutut dengan mengarah ke posisi samping. \nGerakan ini merupakan upaya untuk melakukan tusukan atau juga cekikan dengan obyek sasaran pada bagian leher lawan.\nGerakan ini merupakan upaya untuk bisa melakukan gerakan tusukan dengan sasaran pada bagian leher lawan dengan menggunakan 4 bagiana ujung jari. '
  return (
    <View style={{ flex: 1, justifyContent: 'left', alignItems: 'left', top:50 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()} // Go back to the previous screen
        style={{ flexDirection: 'row', alignItems: 'center', padding: 10 }}
      >
        <Ionicons name="arrow-back" size={40} color="black" />
        <Text style={{ marginLeft: 10,fontSize:20 }}>Materi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {setSelectedMateri('Seogi'); setSelectedText(seogiText);}}
        style={{ backgroundColor: 'lightgrey', padding: 10, marginBottom: 10 }}
      >
        <Text>Seogi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {setSelectedMateri('Jireugi'); setSelectedText(jireugiText);}}
        style={{ backgroundColor: 'lightgrey', padding: 10, marginBottom: 10 }}
      >
        <Text>Jireugi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {setSelectedMateri('Chagi'); setSelectedText(chagiText);}}
        style={{ backgroundColor: 'lightgrey', padding: 10, marginBottom: 10 }}
      >
        <Text>Chagi</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {setSelectedMateri('Makki'); setSelectedText(makkiText);}}
        style={{ backgroundColor: 'lightgrey', padding: 10, marginBottom: 10 }}
      >
        <Text>Makki</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {setSelectedMateri('Chigi'); setSelectedText(chigiText);}}
        style={{ backgroundColor: 'lightgrey', padding: 10, marginBottom: 10 }}
      >
        <Text>Chigi</Text>
      </TouchableOpacity>
      {selectedMateri && (
        <View style={{ marginTop: 20 }}>
          <Text>{selectedMateri}</Text>
          <Text>{selectedText}</Text>
        </View>
      )}
    </View>
  );
}

export default Materi;
