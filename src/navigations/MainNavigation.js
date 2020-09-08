import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import HomeStack from './HomeStack';

const MainNavigation = () => {
    return (
        <NavigationContainer>
            <HomeStack/>
        </NavigationContainer>
    )
}

export default MainNavigation;