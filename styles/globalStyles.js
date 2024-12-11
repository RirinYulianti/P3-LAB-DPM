// styles/globalStyles.js
import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5', // Pastikan ada backgroundColor yang terlihat
  },
  title: {
    fontSize: 20, // Ubah sesuai ukuran yang diinginkan
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#ffffff', // Pastikan backgroundColor card tidak putih transparan
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  cardPrice: {
    fontSize: 16,
    color: '#666',
  },
  blueButton: {
    backgroundColor: 'blue', // Set background color for the button
    paddingVertical: 12, // Adjust vertical padding for button height
    paddingHorizontal: 20, // Adjust horizontal padding for button width
    borderRadius: 5, // Optional: Adds rounded corners
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 5, // Optional: Adds space between buttons
    color: 'white', // Text color of the button
  },
  
  imageStyle: {
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 20,
  },
});
