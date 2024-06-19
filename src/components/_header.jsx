import { Image } from "react-native-web";
import { View, Linking } from "react-native";

export default function _header(){

    const handlePress = () => {
        Linking.openURL('https://github.com/iPonzu')
    }

    return(
        <View>
            <Image
                source={{uri: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'}}
                style={styles.logo}
                onPress={handlePress}
            />
        </View>
    )
}