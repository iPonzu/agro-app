import { Card, Text, Button } from "react-native-paper";
import { ScrollView, View } from "react-native-web";
import '../components/_global.jsx'

export default function homepage({ navigation }){
    
    const BackToLogin = () => {
        navigation.navigate('login')
    }
    
    return(
        <ScrollView>
            <Text 
                variant='titleMedium'
                style={styles.title}
            >
                Epagri - Empresa de Pesquisa Agropecuária e Extensão Rural de Santa Catarina
            </Text>
            <View style={styles.container2}>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text variant="bodyMedium">Agricultura de SC leva 40 empreendimentos rurais para a Exposuper 2024</Text>
                        <Text variant="bodySmall"
                            style={{marginBottom: 10}}>
                                A Secretaria da Agricultura e Pecuária de SC e as empresas vinculadas Ceasa, Cidasc e Epagri estarão presentes com 40 empreendimentos rurais na Exposuper 2024. A feira de negócios será de 18 a 20 de junho, na Expocentro Balneário Camboriú. Serão mais de 280 expositores que vão apresentar os últimos lançamentos em produtos, serviços e tecnologias para o setor supermercadista. 
                        </Text>
                            <Card.Cover
                                source={require('../components/images/materia1.jpg')}
                                style={{width: 250, height: 250}}
                            />
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text variant="bodyMedium">Programa Leite Bom SC entra na fase de elaboração de projetos para financiamento de investimentos no meio rural</Text>
                        <Text variant="bodySmall"
                            style={{marginBottom: 10}}>
                                As medidas voltadas aos financiamentos e subvenção de juros do Programa Leite Bom Santa Catarina, por meio do Pronampe Leite SC e Financia SC Leite, estão em operação no Estado. Os produtores já receberam as orientações nos escritórios locais da Epagri e agora a fase é de elaboração dos projetos para acessar esses programas, que irão tramitar pela Secretaria de Estado da Agricultura e Pecuária (SAR).                            
                        </Text>
                            <Card.Cover
                                source={require('../components/images/materia2.jpg')}
                                style={{width: 250, height: 250}}
                            />
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text variant="bodyMedium">Epagri fomenta cadeia produtiva do alho em Frei Rogério</Text>
                        <Text variant="bodySmall"
                            style={{marginBottom: 10}}>
                                Frei Rogério é o segundo maior produtor de alho de Santa Catarina. Adriana Francisco, extensionista rural da Epagri, conta que a colheita da safra 2023/24 no município, que foi de 1.625 toneladas, frustrou as famílias agricultoras. Segundo ela, as chuvas acima da média registradas entre setembro e dezembro comprometeram a produção. 
                        </Text>
                            <Card.Cover
                                source={require('../components/images/materia3.jpg')}
                                style={{width: 250, height: 250}}
                            />
                    </Card.Content>
                </Card>
                <Card style={styles.card}>
                    <Card.Content>
                        <Text variant="bodyMedium">Extensionista da Epagri conhece produção de pitaia no Vietnã</Text>
                        <Text variant="bodySmall"
                            style={{marginBottom: 10}}>
                                O extensionista do escritório municipal da Epagri em Maracajá, Ricardo Martins, coordenou uma missão técnica ao Vietnã. Ele conheceu o modelo de produção de pitaia daquele país e ministrou palestra. 
                        </Text>
                            <Card.Cover
                                source={require('../components/images/materia4.jpg')}
                                style={{width: 250, height: 250}}
                            />
                    </Card.Content>
                </Card>
            </View>
        </ScrollView>
    )
}