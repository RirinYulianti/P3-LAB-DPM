import React from 'react';
import { TouchableOpacity, Text, View, Image, StyleSheet } from 'react-native';
import { globalStyles } from '../styles/globalStyles'; // Mengimpor globalStyles

export default function LaundryCard({ name, image, onPress }) {
  return (
    <TouchableOpacity 
      style={[globalStyles.card, styles.card]} 
      onPress={onPress}
    >
      {/* Gambar di depan teks */}
      <Image 
        source={image} 
        style={styles.icon} 
      />
      
      {/* Teks */}
      <View style={styles.textContainer}>
        <Text style={[globalStyles.cardTitle, styles.cardTitle]}>{name}</Text>
        {/* Ganti harga dengan deskripsi */}
        <Text style={[globalStyles.cardPrice, styles.cardPrice]}>
          Dijamin Wangi dan Bersih
        </Text>
      </View>

      {/* Tombol Pilih */}
      <View style={styles.button}>
        <Text style={styles.buttonText}>Pilih</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row', // Tata letak horizontal
    alignItems: 'center', // Gambar dan teks sejajar vertikal
    padding: 15, // Padding keseluruhan
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    backgroundColor: '#ffffff', // Latar belakang putih untuk kartu
    borderRadius: 10, // Sudut melengkung untuk estetika
    elevation: 2, // Efek bayangan pada Android
    shadowColor: '#000', // Bayangan pada iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  icon: {
    width: 50, // Lebar ikon
    height: 50, // Tinggi ikon
    marginRight: 15, // Spasi antara gambar dan teks
  },
  textContainer: {
    flex: 1, // Membuat teks menempati ruang yang tersisa
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00008B', // Warna biru tua
    marginBottom: 5, // Spasi bawah untuk memisahkan judul dan harga
  },
  cardPrice: {
    fontSize: 16,
    color: '#00796b', // Warna hijau untuk teks harga
  },
  button: {
    backgroundColor: '#e0f7fa', // Warna tombol
    paddingVertical: 10, // Padding atas-bawah
    paddingHorizontal: 15, // Padding kiri-kanan
    borderRadius: 8, // Sudut tombol melengkung
  },
  buttonText: {
    color: '#00796b', // Warna teks tombol
    fontWeight: 'bold', // Teks bold
    fontSize: 14, // Ukuran teks
  },
});
