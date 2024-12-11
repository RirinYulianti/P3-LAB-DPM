import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView, Alert } from 'react-native';

export default function SummaryScreen({ route, navigation }) {
  const { service } = route.params || {}; // Terima data dari navigasi, atau beri default

  // Tambahkan harga satuan untuk setiap item
  const prices = {
    Baju: 5000,
    Celana: 7000,
    Seprei: 8000,
    Boneka: 10000,
    Mukena: 5000,
  };

  // Pastikan data ada dan valid
  if (!service || !Array.isArray(service) || service.length === 0) {
    Alert.alert('Error', 'Tidak ada data layanan yang tersedia.');
    navigation.goBack(); // Kembali ke layar sebelumnya jika data tidak valid
    return null;
  }

  // Hitung total harga
  const totalPrice = service.reduce((sum, item) => sum + (prices[item.name] || 0) * item.qty, 0);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Ringkasan Pesanan</Text>

      {/* Tampilkan setiap layanan yang dipesan */}
      {service.map((item, index) => (
        <View key={index} style={styles.serviceItem}>
          <Text style={styles.text}>
            {item.name}: {item.qty} x {prices[item.name]} = Rp {prices[item.name] * item.qty}
          </Text>
        </View>
      ))}

      {/* Total Item dan Total Harga */}
      <View style={styles.summaryContainer}>
        <Text style={styles.summaryText}>
          Total Item: {service.reduce((sum, item) => sum + item.qty, 0)}
        </Text>
        <Text style={styles.summaryText}>Total Harga: Rp {totalPrice}</Text>
      </View>

      {/* Tombol untuk kembali ke Beranda */}
      <Button title="Kembali ke Beranda" onPress={() => navigation.navigate('Home')} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  serviceItem: {
    padding: 10,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    marginVertical: 5,
    elevation: 2, // Shadow effect (Android)
    shadowColor: '#000', // Shadow effect (iOS)
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  text: {
    fontSize: 18,
    color: '#00796b',
  },
  summaryContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#e0f7fa',
    borderRadius: 8,
  },
  summaryText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#00796b',
    textAlign: 'center',
    marginVertical: 5,
  },
});
