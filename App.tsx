import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navegation } from './src/navegation/Navegation';
import { FadeScreen } from './src/screens/FadeScreen';

const App = () => {
  return (
    <NavigationContainer>
        <Navegation />
        {/* <FadeScreen /> */}
    </NavigationContainer>
  )
}

export default App;