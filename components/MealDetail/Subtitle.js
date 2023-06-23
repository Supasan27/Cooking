import { View, Text, StyleSheet } from "react-native";

function Subtitle({children}){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    subtitle: {
        color: 'gray',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    subtitleContainer: {
        padding: 6,
        borderBottomColor: 'white',
        borderBottomWidth: 2,
        marginHorizontal: 12,
        marginVertical: 4
    }
})

export default Subtitle;