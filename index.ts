import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default function RF(percent: number) {
  const deviceHeight = isIphoneX()
    ? height - 78 // iPhone X style SafeAreaView size in portrait
    : Platform.OS === "android"
    ? height - StatusBar.currentHeight!
    : height;

  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}
