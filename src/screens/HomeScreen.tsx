import { ActivityIndicator, Dimensions, FlatList, ScrollView, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

import Carousel from 'react-native-snap-carousel';

import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  
    const { peliculasEnCine, isLoading } = useMovies();
    const { top } = useSafeAreaInsets()

    if ( isLoading ) {
      return (
        <View
          style={{ flex: 1, justifyContent: 'center', alignContent: 'center' }}>
          <ActivityIndicator color='purple' size={ 100 } />
        </View>
      )
    }
    

    return (

      <ScrollView>
        <View style={{ marginTop: top + 20 }}>

          {/* Caousel Principal */}
          <View style={{ height: 450 }}>
            <Carousel 
                data={ peliculasEnCine }
                renderItem={ ({ item }: any) => <MoviePoster movie={ item }/> }
                sliderWidth={ windowWidth }
                itemWidth={ 300 }
            />
          </View>

          {/* Películas populares */}
          <View style={{ height: 260, backgroundColor: 'red' }}>
            <Text style={{ fontSize: 30, fontWeight: 'bold' }}>En cines</Text>
            <FlatList 
                data={ peliculasEnCine }
                renderItem={ ({ item }: any) => (
                    <MoviePoster movie={ item } height={ 200 } width={ 120 }/>
                ) }
                keyExtractor={ (item) => item.id.toString() }
                horizontal={ true }
                showsHorizontalScrollIndicator={ false }
            />
          </View>

        </View>
      </ScrollView>
    )
}
