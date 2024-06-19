import { Text } from "react-native-web";
import { View } from "react-native";
import { Button } from "react-native-paper";

export default function _footer({ navigation }){

    const BackToLogin = () => {
        navigation.navigate('login')
    }

    return(
        <View styles={styles.footer}>
            <Button
                mode='outlined'
                styles={styles.button_footer}
                onPress={BackToLogin}
            
            >
                Sair
            </Button>
            <Text>Produzido utilizando React-Native e Expo GO para auxílio</Text>
        </View>
    )
}