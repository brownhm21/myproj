import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import SignIn from "../components/SignIn";
import SignUp from "../components/SignUp";
import Home from "../components/Home";
import Cart from "../components/Cart";


const screens = {
    SignIn: {
        screen: SignIn,
    },
    SignUp: {
        screen: SignUp,
    },
    Cart :{
        screen: Cart,
    },
    HomeScreen: {
        screen: Home,
    }
   
}
const homeStack = createStackNavigator(
    screens,
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: "#163b37",
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                textAlign:'center',
                fontWeight: 'bold',
                justifyContent: 'center',
                alignItems: 'center',
            },
        },
    },
    {initialRouteName:'SignUp'}
    );

export default createAppContainer(homeStack);

