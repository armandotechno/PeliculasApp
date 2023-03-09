import { useNavigation } from '@react-navigation/native';
import { Button, Text, View } from 'react-native';

export const HomeScreen = () => {
    
    const navigation = useNavigation()

    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    )
}
