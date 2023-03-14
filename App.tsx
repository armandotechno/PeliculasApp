import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { Navegation } from './src/navegation/Navegation';
import { FadeScreen } from './src/screens/FadeScreen';
import { GradientProvider } from './src/context/GradientContext';

const AppState = ({ children }: any ) => {
  
  return (
    <GradientProvider>
      { children }
    </GradientProvider>
  )
}

const App = () => {
  return (
    <NavigationContainer>
        <AppState>
          <Navegation />
          {/* <FadeScreen /> */}
        </AppState>
    </NavigationContainer>
  )
}

export default App;