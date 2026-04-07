import 'react-native-gesture-handler';

import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import IconButton from './components/UI/IconButton';
import GerenciarDespesa from './screens/GerenciarDespesa';
import DespesaRecentes from './screens/DespesaRecentes';
import TodasDespesas from './screens/TodasDespesas';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabScreen() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'list';

          if (route.name === 'DespesaRecentes') {
            iconName = 'hourglass';
          }

          if (route.name === 'TodasDespesas') {
            iconName = 'calendar';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name="DespesaRecentes"
        component={DespesaRecentes}
        options={{ title: 'Recentes' }}
      />
      <Tab.Screen
        name="TodasDespesas"
        component={TodasDespesas}
        options={{ title: 'Todas' }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Despesas"
            component={BottomTabScreen}
            options={({ navigation }) => ({
              title: 'Despesas',
              headerRight: ({ tintColor }) => (
                <IconButton
                  icon="add"
                  color={tintColor}
                  onPress={() => navigation.navigate('GerenciarDespesa')}
                />
              ),
            })}
          />
          <Stack.Screen
            name="GerenciarDespesa"
            component={GerenciarDespesa}
            options={{ title: 'Gerenciar Despesa' }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
