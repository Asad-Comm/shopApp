import React , { useEffect, useState} from 'react';
import { Image, TouchableOpacity, View, ScrollView,ActivityIndicator} from 'react-native';
import { icons } from '../../assets/images';
import FeedBackModal from '../../components/FeedBackModal';
import TextRegular from '../../components/text-regular';
import TextSemiBold from '../../components/text-semibold';
import { SCREEN_HEIGHT, SCREEN_WIDTH } from '../../utils/metrics';
import styles from './styles';
 
const HomeScreen: React.FC<null> = (props) => {


    const [data,setData] = useState([]);
    const [visible,setVisible] = useState(true);


    useEffect(() => {
        onFocus();
      },[])


      const onFocus = async  () => {
        let products = await getProducts();
        console.log("Products get success: ",products);
        setData(products);
      }

    const getProducts = async () => {
        try {
          let response = await fetch('https://fakestoreapi.com/products/',{
            method:'get'
          })
          const jsonResponse = await response.json();

          return Promise.resolve(jsonResponse);
        } catch (error) {
          console.log("Products get error: ",error);
          return  Promise.reject(error)
        }
            } 

    const renderHeader = (): JSX.Element => {
        return <View style={styles.header}>
            <View />
            <View style={styles.headerLeft}>
                <TouchableOpacity onPress={()=>props.navigation.navigate("CartScreen")}>
                    <Image source={icons.cart} style={styles.icon} />
                </TouchableOpacity>
            </View>
        </View>
    }


    const renderProducts = () => React.Children.toArray(data.map(renderProductCard))

    const renderProductCard = (item,index) => {
        return <TouchableOpacity onPress={() => {
            props.navigation.navigate("ProductDetailScreen", { product: item });
        }} style={{ borderRadius: 10,marginVertical: 50,backgroundColor:'#ffffff',paddingVertical:20,paddingHorizontal:20, flexDirection:'row', justifyContent:'space-between'}}>
           <Image source={{uri:item?.image}} style={{
               height: 100,
               width: 100
           }} />
           <View>
           <TextSemiBold
                text={item?.title}
                style={styles.setPassword}
            />
           <TextSemiBold
                text={"Price  " + item?.price}
                style={{
                    marginVertical:10,marginHorizontal:10,
                    color: "black"

                }}
            />
          </View>
        </TouchableOpacity>
    }


    return <View style={styles.container}>
        {renderHeader()}
        <ScrollView>
        <TouchableOpacity onPress={() => props.navigation.navigate("QRScreen")} style={styles.body}>
            <Image
                source={icons.qrCode}
                style={styles.chat}
            />
            <TextRegular
                text={"Scan QR of a product"}
                style={styles.startNow}
            />
        </TouchableOpacity>
        <View style={{justifyContent:'center',alignItems:'center'}}>
        <TextRegular
                text={"Preferred Products"}
                style={{
                    color:"white",
                    fontSize: 25,
                    marginTop: 40,
                    fontWeight:'bold'
                }}
            />
        </View>
        {Array.isArray(data) && data.length > 0 ? renderProducts() : <ActivityIndicator size={"large"} />}
        </ScrollView>
    </View>
};

export default HomeScreen;