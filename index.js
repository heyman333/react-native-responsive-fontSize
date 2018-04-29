import { isIphoneX } from "react-native-iphone-x-helper"
import { Platform, StatusBar, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

export default function RF(percent) {
  const deviceHeight = isIphoneX()
    ? height * 0.9
    : Platform.OS === "android" ? height - StatusBar.currentHeight : height

  const heightPercent = percent * deviceHeight / 100
  return Math.round(heightPercent)
}
