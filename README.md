## SET UP

1. npx create-expo-app my-app
2. npm install
3. npx expo start y tener ya abierto el android studio.
4. Crear estructura de carpetas como los componentes, screens, etc..

## ENRUTAMIENTO

4. Para configurar las rutas a las screens: npm install @react-navigation/native
5. npm install @react-navigation/native-stack
6. En donde se vaya a configurar el enrutamiento( en este caso en AppNavigation) :
   import {NavigationContainer} from "@react-navigation/native"
   import {createNativeStackNavigator} from "@react-navigation/native-stack"
   const Stack = createNativeStackNavigator();
7. Crear el componente del enrutamiento como se muestra en AppNavigation.

## ESTILOS NATIVEWILD/TAILWIND

1. npm install nativewind
2. npm install --save-dev tailwindcss@3.3.2
3. npx tailwindcss init to create a tailwind.config.js file
4. Agregar esta linea al tailwind.config :
   content: [
   './App.{js,jsx,ts,tsx}',
   './screens/**/*.{js,jsx,ts,tsx}',
   './components/**/*.{js,jsx,ts,tsx}',
   ],

## ICONOS

1. Para los iconos usaremos npm i react-native-heroicons react-native-svg
2. Ejemplo:
   import {Bars3CenterLeftIcon} from "react-native-heroicons outline"
   <Bars3CenterLeftIcon size={30} color="white" strokeWidth={2} />

## NAVEGACIÓN:

1. npm install @react-navigation/native
2. En el componente:
   import { useNavigation } from '@react-navigation/native';
   const navigation = useNavigation()
