import React from 'react'
import { View, Text, FlatList,Image, TouchableOpacity, Button} from 'react-native'

export default function List({array, navigation}) {
    console.log(navigation);
    return (
        <View>
            {/* <Button title="haha" onPress={() => navigation.navigate('DetailScreen')}/> */}
            <Text style={{paddingLeft: 25, fontSize: 24, fontWeight: 'bold'}}>{array.header}</Text>
            <FlatList
            keyExtractor={(item) => item.id}
            data={array.data}
            horizontal
            renderItem={({item}) => {
                    // console.log(this.navigation)
                    return(
                        <TouchableOpacity onPress={() => navigation.navigate('DetailScreen',{item})}>
                            <View style={{paddingLeft: 25}}>
                                <Image source={{uri: item.img}} style={{width: 200, height: 130}}/>
                                <Text style={{fontWeight: 'bold', fontSize: 16}}>{item.title}</Text>
                                <Text style={{color: "#999"}}>{item.subTitle}</Text>
                            </View>
                        </TouchableOpacity>   
                    )
                }
            }
            />
        </View>
    )
}
