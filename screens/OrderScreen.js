import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, ScrollView } from 'react-native';

export default function ServiceList({ navigation }) {
  const [quantities, setQuantities] = useState({
    Baju: 0,
    Celana: 0,
    Seprei: 0,
    Boneka: 0,
    Mukena: 0,
  });

  const increaseQuantity = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] + 1,
    }));
  };

  const decreaseQuantity = (item) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [item]: prevQuantities[item] > 0 ? prevQuantities[item] - 1 : 0,
    }));
  };

  const handleViewSummary = () => {
    const selectedItems = Object.entries(quantities).filter(([_, qty]) => qty > 0);

    if (selectedItems.length === 0) {
      alert('Pilih setidaknya satu item!');
      return;
    }

    const service = selectedItems.map(([name, qty]) => ({ name, qty }));
    console.log('Data to send:', service); // Debugging log
    navigation.navigate('Summary', { service });
  };

  return (
    <ScrollView style={styles.container}>
      <ImageButtonWithQuantity
        imageSource={require('../assets/baju.png')}
        title="Baju"
        quantity={quantities.Baju}
        onIncrease={() => increaseQuantity('Baju')}
        onDecrease={() => decreaseQuantity('Baju')}
      />
      <ImageButtonWithQuantity
        imageSource={require('../assets/celana.png')}
        title="Celana"
        quantity={quantities.Celana}
        onIncrease={() => increaseQuantity('Celana')}
        onDecrease={() => decreaseQuantity('Celana')}
      />
      <ImageButtonWithQuantity
        imageSource={require('../assets/seprei.png')}
        title="Seprei"
        quantity={quantities.Seprei}
        onIncrease={() => increaseQuantity('Seprei')}
        onDecrease={() => decreaseQuantity('Seprei')}
      />
      <ImageButtonWithQuantity
        imageSource={require('../assets/boneka.png')}
        title="Boneka"
        quantity={quantities.Boneka}
        onIncrease={() => increaseQuantity('Boneka')}
        onDecrease={() => decreaseQuantity('Boneka')}
      />
      <ImageButtonWithQuantity
        imageSource={require('../assets/mukena.png')}
        title="Mukena"
        quantity={quantities.Mukena}
        onIncrease={() => increaseQuantity('Mukena')}
        onDecrease={() => decreaseQuantity('Mukena')}
      />

      {/* Tombol untuk Lihat Ringkasan */}
      <TouchableOpacity
        style={styles.viewSummaryButton}
        onPress={handleViewSummary}
      >
        <Text style={styles.buttonText}>Lihat Ringkasan</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const ImageButtonWithQuantity = ({ imageSource, title, quantity, onIncrease, onDecrease }) => {
  return (
    <View style={styles.buttonContainer}>
      <Image source={imageSource} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.quantityControls}>
        <TouchableOpacity onPress={onDecrease} style={styles.quantityButton}>
          <Text style={styles.quantityText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity onPress={onIncrease} style={styles.quantityButton}>
          <Text style={styles.quantityText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  buttonContainer: {
    marginVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#00796b',
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    flex: 1,
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    backgroundColor: '#00796b',
    padding: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
  quantityText: {
    fontSize: 18,
    paddingHorizontal: 10,
  },
  viewSummaryButton: {
    backgroundColor: '#00796b',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
  },
});
