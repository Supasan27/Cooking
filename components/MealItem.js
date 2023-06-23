import { StyleSheet, View, Text, Pressable, Image, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetails from "./MealDetails";

function MealItem ({id, title, imageUrl, duration, complexity, affordability}) {
    const navigation = useNavigation();

    function selectMealItemHandler(){
        navigation.navigate('MealDetail', {
        mealID: id
    });
    }

    return (
        <View style={styles.mealItem}>
            <Pressable style={({ pressed }) => [ 
                    styles.button, pressed ? styles.buttonOnPressed : null ]}
                    onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                <View>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails duration={duration} 
                             affordability={affordability} 
                             complexity={complexity}/>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        backgroundColor: 'white',
        borderRadius: 8,
        shadowColor: 'black',
        shadowOpacity: 0.35,
        shadowRadius: 8,
        shadowOffset: {  width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },
    button: {
        flex: 1
    },
    buttonOnPressed:{
        opacity: 0.5
    },
    image:{
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        margin: 8
    },
})

export default MealItem;