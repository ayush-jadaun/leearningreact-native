import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>FlatCards </Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text>Red</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text>Green</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text>Blue</Text>
                </View>
                <View style={[styles.card, styles.cardFour]}>
                    <Text>Yellow</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding:8,
        
    },
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderBottomEndRadius: 10,
        marginVertical: 10
    },
    cardOne: {
        backgroundColor: '#EF5354'
    },
    cardTwo: {
        backgroundColor: '#50C878'
    },
    cardThree: {
        backgroundColor: '#4682B4'
    },
    cardFour: {
        backgroundColor: '#FFD700'
    }
});