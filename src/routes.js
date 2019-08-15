import { createAppContainer, createStackNavigator } from 'react-navigation'

import Feed from './pages/Feed';

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    })
);

export default Routes;