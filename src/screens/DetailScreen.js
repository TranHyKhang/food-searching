import React from 'react'
import { View, Text, Image } from 'react-native'

export default function DetailScreen({route}) {
    const {item} = route.params;
    return (
        <View>
            <Image source={{uri: item.img}} style={{height: 200, width: 200}}/>
            <Text>{item.title}</Text>
        </View>
    )
}
