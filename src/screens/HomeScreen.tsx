import { ActivityIndicator, Text, View } from 'react-native';

import { useMovies } from '../hooks/useMovies';

export const HomeScreen = () => {
  
    const { peliculasEnCine, isLoading } = useMovies();

    if ( true ) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator color='purple' size={ 100 } />
        </View>
      )
    }
    

    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    )
}
