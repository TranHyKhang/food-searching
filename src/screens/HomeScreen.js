import React,{useEffect} from 'react'
import { View, Text, Image, ScrollView,Button } from 'react-native'
import Input from '../components/Input';
import List from '../components/List';
import axios from 'axios';

// const mockData = [
//     {   
//         id: 0,
//         header: 'Cost Effective',
//         data: [
//             {
//                 id:"1",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"2",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"3",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"4",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//         ]
//     },
//     {   
//         id: 0,
//         header: 'Bit Pricer',
//         data: [
//             {
//                 id:"1",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"2",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"3",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"4",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//         ]
//     },
//     {   
//         id: 0,
//         header: 'Bit Spender!',
//         data: [
//             {
//                 id:"1",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"2",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"3",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//             {
//                 id:"4",
//                 img: 'https://blog.chodalat.vn/wp-content/uploads/2020/02/1_result-5.jpg',
//                 title: 'Fish City',
//                 subTitle: '4.5 Stars, 932 Reviews'
//             },
//         ]
//     }
// ]


const api = axios.create({
    baseURL:'https://api.yelp.com/v3/businesses'
})
const getApi = async () => {
    const res = await api.get('/search?location=california',{
        headers:{
            Authorization: 'Bearer owzvjvtFJ-AKuqrgzBhtBORgTqJs7ktzLIOgjySNREWwZqr42YHFTikgSGMtvBa75MXQYQiImfTogprJQ9gAHkmtHjMEoMVEXZZAoWf8J5g2OC3v1ZiJspjP00tQX3Yx',
            'Access-Control-Allow-Origin': true
        }
    })
    console.log(res);
}                           

const getApi2 = () => {
    const url = 'https://api.yelp.com/v3/businesses/search?location=california';
    fetch(url, {
        method: 'GET',
        headers: {
            Authorization: 'Bearer owzvjvtFJ-AKuqrgzBhtBORgTqJs7ktzLIOgjySNREWwZqr42YHFTikgSGMtvBa75MXQYQiImfTogprJQ9gAHkmtHjMEoMVEXZZAoWf8J5g2OC3v1ZiJspjP00tQX3Yx'
        }
    }).then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err);
    })
}

export default function HomeScreen(props) {
 
    
    const {navigation} = props;
    
    return (
        <ScrollView>
            <Input/>
            <Text/>
            <Button onPress={getApi} title='GET'/>
        </ScrollView>
    )
}
