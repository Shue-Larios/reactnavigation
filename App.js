// Para instalar React Navigation y las dependencias
// npm install @react-navigation/native
// npm install react-native-screens 
// npm install react-native-safe-area-context 
// npm install @react-navigation/native-stack
// import 'react-navigate-gesture-handler';


import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

//React Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Inicio } from './views/Inicio';
import { Nosotros } from './views/Nosotros';

//esto tiene todos los metodos que ocupamos para trabajar con Stack
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <>
      {/* mis navegaciones siempre tienen que estar dentro de esto */}
      <NavigationContainer>
        {/* definimos el tipo de navegacion en este caso stack cada uno de estos seria una pantalla */}
        <Stack.Navigator
          // para decirle cual es la de inicio
          initialRouteName='Inicio'
          // si ocupo poner estilo igual a todos los header de las pantallas lo pongo aca
          // screenOptions={
          //   {
          //     // para poner un titulo al header
          //     title: 'Componente Principal',
          //     // para poner el texto en el centro
          //     headerTitleAlign: 'center',
          //     // para dar estilos al header nativo de cada OS
          //     headerStyle: {
          //       backgroundColor: '#F4511E'
          //     },
          //     // para cambiar el color de la letra del header
          //     headerTintColor: '#FFF',
          //     // para dar estilo al titulo
          //     headerTitleStyle: {
          //       fontWeight: 'bold'
          //     }
          //   }
          // }
        >
          <Stack.Screen
            name='Inicio'
            component={Inicio}
            options={{
              // para poner un titulo al header
              title: 'Componente Principal',
              // para poner el texto en el centro
              headerTitleAlign: 'center',
              // para dar estilos al header nativo de cada OS
              headerStyle: {
                backgroundColor: '#F4511E'
              },
              // para cambiar el color de la letra del header
              headerTintColor: '#FFF',
              // para dar estilo al titulo
              headerTitleStyle: {
                fontWeight: 'bold'
              }
            }}
          />

          <Stack.Screen
            name='Nosotros'
            component={Nosotros}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
