import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navegation } from './src/navegation/Navegation';

const App = () => {
  return (
    <NavigationContainer>
        <Navegation />
    </NavigationContainer>
  )
}

export default App;