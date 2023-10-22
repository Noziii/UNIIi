import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import CampusEvents from "../app/CampusEvents";
import Res from "../app/Res";

const screens = {
  CampuEvents: {
    screen: CampusEvents,
  },

  Res: {
    screen: Res,
  },
};
const Home = createStackNavigator(screens);

export default createAppContainer(Home);
