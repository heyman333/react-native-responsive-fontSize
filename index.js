import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const standardLength = width > height ? width : height;

const deviceHeight = isIphoneX()
  ? standardLength - 78 // iPhone X style SafeAreaView size in portrait
  : Platform.OS === "android"
  ? standardLength - StatusBar.currentHeight
  : standardLength;

export function RFPercentage(percent) {
  const heightPercent = (percent * deviceHeight) / 100;
  return Math.round(heightPercent);
}

// guideline height for standard 5" device screen is 680
export function RFValue(fontSize, standardScreenHeight = 680) {
  const heightPercent = (fontSize * deviceHeight) / standardScreenHeight;
  return Math.round(heightPercent);
}
