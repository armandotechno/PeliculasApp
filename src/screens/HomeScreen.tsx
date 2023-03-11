import { ActivityIndicator, Dimensions, ScrollView, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context'; 

import Carousel from 'react-native-snap-carousel';

import { HorizontalSlider } from '../components/HorizontalSlider';
import { MoviePoster } from '../components/MoviePoster';
import { useMovies } from '../hooks/useMovies';

const { width: windowWidth } = Dimensions.get('window');

export const HomeScreen = () => {
  
    const { peliculasEnCine, peliculasPopulares, isLoading } = useMovies();
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
                inactiveSlideOpacity={ 0.9 }
            />
          </View>

          <HorizontalSlider title='Populares' movies={ peliculasPopulares } />

        </View>
      </ScrollView>
    )
}
