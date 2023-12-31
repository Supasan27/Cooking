import { Text, View, Image, StyleSheet, ScrollView, Button } from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";

function MealDetailScreen ({route, navigation}) {
    const mealID = route.params.mealID

    const selectedMeal = MEALS.find((meal) => meal.id === mealID)

    function headerButtonPressHandler() {
        console.log('pressed')
    }

    useLayoutEffect( () => {
        navigation.setOptions({
            headerRight: () => {
                return <IconButton icon="star" color="white" onPress={headerButtonPressHandler}/>
            }
        })
    }, [navigation, headerButtonPressHandler])

    return <ScrollView style={styles.rootContainer}>
    <View>
        <Image style={styles.image} source={{uri: selectedMeal.imageUrl}}/>
        <Text style={styles.title}>{selectedMeal.title}</Text>
        <MealDetails duration={selectedMeal.duration} 
                     complexity={selectedMeal.complexity}
                     affordability={selectedMeal.affordability}
                     textStyle={styles.detailText}/>
        <View style={styles.listOuterContainer}>
            <View style={styles.listContainer}>
                <Subtitle>Ingredients</Subtitle>
                <List data={selectedMeal.ingredients}/>
                <Subtitle>Steps</Subtitle>
                <List data={selectedMeal.steps} />
            </View>
        </View>
    </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    rootContainer:{
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer:{
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})

export default MealDetailScreen;