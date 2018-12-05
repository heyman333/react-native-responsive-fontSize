import { isIphoneX } from "react-native-iphone-x-helper";
import { Platform, StatusBar, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");

export default function RF(percent: number) {
  if(height > width){
    const deviceHeight = isIphoneX()
      ? height - 78 // iPhone X style SafeAreaView size in portrait
      : Platform.OS === "android"
      ? height - StatusBar.currentHeight!
      : height;

    const heightPercent = (percent * deviceHeight) / 100;
    return Math.round(heightPercent);
  }
  else{
    const deviceWidth = isIphoneX()
      ? width - 78
      : Platform.OS === 'android'
      ? width - StatusBar.currentWidth!
      : width;
    
    const widthPercent = percent * deviceWidth / 100;
    return Math.round(widthPercent);
  }
}
