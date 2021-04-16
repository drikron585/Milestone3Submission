import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../Screens/home_tab'
import MyPlans from '../Screens/my_plans_tab'
import Workout from '../Screens/workout_tab'
import workout_choose from '../Screens/workout_choose'
import workout_start1 from '../Screens/workout_start1'
import Settings from '../Screens/settings_tab'
import Add_Workout from '../Screens/add_workout_tab'
import Add_New_Exercise from '../Screens/add_new_exercise_tab'
import Add_Existing_Exercise from '../Screens/add_existing_exercise_tab'
import Analytics from '../Screens/exercise_analytics_tab'
import Analytics_Select from '../Screens/analytics_selection_tab'
import workout_start2 from '../Screens/workout_start2'
import workout_start3 from '../Screens/workout_start3'

const screens = {
    home_tab: {
        screen: Home,
        navigationOptions: {
            headerShown: false
        },
    },
    my_plans_tab: {
        screen : MyPlans,
        navigationOptions: {
            headerShown: false
        },
    },
    workout_tab: {
        screen : Workout,
        navigationOptions: {
            headerShown: false
        },
    },
    workout_choose: {
        screen : workout_choose,
        navigationOptions: {
            headerShown: false
        },
    },
    workout_start1: {
        screen : workout_start1,
        navigationOptions: {
            headerShown: false
        },
    },
    workout_start2: {
        screen : workout_start2,
        navigationOptions: {
            headerShown: false
        },
    },
    workout_start3: {
        screen : workout_start3,
        navigationOptions: {
            headerShown: false
        },
    },
    settings_tab: {
        screen : Settings,
        navigationOptions: {
            headerShown: false
        },
    },
    add_workout_tab: {
        screen : Add_Workout,
        navigationOptions: {
            headerShown: false
        },
    },
    add_new_exercise: {
        screen : Add_New_Exercise,
        navigationOptions: {
            headerShown: false
        },
    },
    add_existing_exercise: {
        screen : Add_Existing_Exercise,
        navigationOptions: {
            headerShown: false
        },
    },
    exercise_analytics_tab: {
        screen: Analytics,
        navigationOptions: {
            headerShown: false
        },
    },
    analytics_selection_tab: {
        screen : Analytics_Select,
        navigationOptions: {
            headerShown: false
        },
    },
}

const HomeStack = createStackNavigator(screens);
export default createAppContainer(HomeStack);