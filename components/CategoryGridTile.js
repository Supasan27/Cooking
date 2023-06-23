import { Text, View, Pressable, StyleSheet, Platform } from "react-native"

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={styles.gridTile}>
            <Pressable  
                style={({ pressed }) => [ 
                    styles.button, pressed ? styles.buttonOnPressed : null ]}
                onPress={onPress}
            >
                <View style={[styles.innerContainer, {backgroundColor: color}]} >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    gridTile:{
        flex: 1,
        margin: 16,
        height: 150,
        backgroundColor: 'black',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowRadius: 8,
        shadowOffset: {  width: 0, height: 2 },
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    button: {
        flex: 1
    },
    buttonOnPressed:{
        opacity: 0.5
    },
    innerContainer: {
        borderRadius: 8,
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',

    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    }
})

export default CategoryGridTile;