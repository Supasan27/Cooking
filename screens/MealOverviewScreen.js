import { useLayoutEffect } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";

function MealOverviewScreen({route, navigation}){
    const catID = route.params.categoryID;

    const displayedMeals =MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
            (category) => category.id === catID).title;

        navigation.setOptions({
        title: categoryTitle
    })
    }, [catID, navigation])

    function renderMealItem(itemData) {
        const mealItemProps = {
            id: itemData.item.id,
            title: itemData.item.title,
            imageUrl: itemData.item.imageUrl,
            duration: itemData.item.duration,
            affordability: itemData.item.affordability,
            complexity: itemData.item.complexity
        }

        return <MealItem {...mealItemProps}/>
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={renderMealItem}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})

export default MealOverviewScreen