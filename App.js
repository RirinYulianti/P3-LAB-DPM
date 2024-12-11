import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen'; // Pastikan jalur impor benar
import OrderScreen from './screens/OrderScreen'; // Pastikan jalur impor benar
import SummaryScreen from './screens/SummaryScreen'; // Pastikan jalur impor benar

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#f5f5f5', // Warna background header
          },
          headerTintColor: '#00796b', // Warna teks pada header
          headerTitleStyle: {
            fontWeight: 'bold', // Menambahkan style teks header
          },
        }}
      >
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            title: 'Beranda', // Judul khusus untuk Home Screen
          }}
        />
        <Stack.Screen 
          name="Order" 
          component={OrderScreen} 
          options={{
            title: 'Pilih Layanan', // Judul khusus untuk Order Screen
          }}
        />
        <Stack.Screen 
          name="Summary" 
          component={SummaryScreen} 
          options={{
            title: 'Ringkasan Pesanan', // Judul khusus untuk Summary Screen
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
