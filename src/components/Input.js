import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Ant from 'react-native-vector-icons/AntDesign';

export default function Input() {
    return (
        <View style={styles.container}>
            <Ant style={styles.searchIcon} name='search1' size={30} color='red'/>
            <TextInput placeholder="Search" style={styles.input}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#ddd",
        margin: 20,
        borderRadius: 10,
        flexDirection: 'row'
    },
    input: {
        backgroundColor: '#ddd',
        
        borderRadius: 10,
        fontSize: 20,
        fontWeight: "bold",
        color: '#777'
    },
    searchIcon: {
        margin: 10,
        color: 'black'
    }
})
