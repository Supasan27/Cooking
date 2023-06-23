import { View, FlatList } from "react-native";
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from "../components/CategoryGridTile";


function CategoriesScreen({navigation}) {

    function renderCategoryItem (itemData) {
        function pressHandler(){
            return navigation.navigate('MealOverview', {
                categoryID: itemData.item.id,
            });
        }
        return <CategoryGridTile 
            title = {itemData.item.title} 
            color ={itemData.item.color}
            onPress={pressHandler}
            />
    }

    return (
        <View>
        <FlatList 
            data = {CATEGORIES}
            keyExtractor={ (item) => item.id}
            renderItem={renderCategoryItem}
            numColumns={2}
        />
        </View>
    )
}

export default CategoriesScreen;