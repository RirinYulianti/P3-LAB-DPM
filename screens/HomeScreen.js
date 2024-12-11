import React, { useEffect, useState } from "react";
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from "react-native";
import LaundryCard from "../components/LaundryCard";
import { globalStyles } from "../styles/globalStyles";

export default function HomeScreen({ navigation }) {
  const [laundryOptions, setLaundryOptions] = useState([]);

  useEffect(() => {
    // Set daftar opsi laundry
    setLaundryOptions([
      { 
        id: "1", 
        name: "Cuci dan Gosok", 
        description: "Dijamin Wangi dan Bersih", 
        image: require('../assets/Logo1.png'), // Pastikan jalur file benar
      },
      { 
        id: "2", 
        name: "Gosok Saja", 
        description: "Dijamin Rapih dan Bersih", 
        image: require('../assets/Logo2.png'), // Pastikan jalur file benar
      },
      { 
        id: "3", 
        name: "Cuci Saja", 
        description: "Dijamin Wangi dan Segar", 
        image: require('../assets/Logo3.png'), // Pastikan jalur file benar
      },
    ]);
  }, []);

  // Pastikan data opsi laundry terisi dengan benar
  console.log("Laundry options:", laundryOptions);

  return (
    <View style={globalStyles.container}>
      {/* Kotak Selamat Datang dan Logo */}
      <View style={styles.welcomeBox}>
        {/* Teks Selamat Datang */}
        <Text style={[globalStyles.title, styles.welcomeText]}>
          Selamat Datang di
        </Text>

        {/* Logo */}
        <Image 
          source={require('../assets/Logo.png')} // Pastikan jalur file benar
          style={styles.logo}
        />
      </View>

      {/* Daftar Laundry Options */}
      <FlatList
        data={laundryOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <LaundryCard
            name={item.name}
            description={item.description}
            image={item.image}
            onPress={() => navigation.navigate("Order", { service: item })}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.emptyMessage}>Tidak ada opsi tersedia.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  welcomeBox: {
    backgroundColor: '#ffffff', // Warna latar belakang kotak
    padding: 20, // Padding di dalam kotak
    marginBottom: 30, // Ruang bawah kotak
    borderRadius: 10, // Sudut melengkung pada kotak
    alignItems: 'center', // Agar konten (teks dan logo) sejajar tengah
    justifyContent: 'center', // Sejajarkan konten secara vertikal
    // Bayangan pada kotak untuk platform iOS
    shadowColor: '#000', // Warna bayangan
    shadowOffset: { width: 0, height: 2 }, // Offset bayangan
    shadowOpacity: 0.5, // Opasitas bayangan
    shadowRadius: 4, // Jari-jari bayangan
    // Bayangan pada kotak untuk platform Android
    elevation: 5, // Efek bayangan pada Android
  },
  welcomeText: {
    fontSize: 20,
    color: '#00008B',
    textAlign: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 300,
    height: 200,
    alignSelf: 'center',
    marginBottom: 30,
  },
  emptyMessage: {
    fontSize: 16,
    color: 'gray',
    textAlign: 'center',
    marginTop: 20,
  },
});
