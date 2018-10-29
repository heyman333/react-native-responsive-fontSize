import { isIphoneX } from "react-native-iphone-x-helper"
import { Platform, StatusBar, Dimensions } from "react-native"

const { height, width } = Dimensions.get("window")

export default function RFPercentage(percent) {
  const deviceHeight = isIphoneX()
    ? height * 0.9
    : Platform.OS === "android" ? height - StatusBar.currentHeight : height

  const heightPercent = percent * deviceHeight / 100
  return Math.round(heightPercent)
}

export default function RFValue(fontSize) {
  const deviceHeight = isIphoneX()
    ? height * 0.9
    : Platform.OS === "android" ? height - StatusBar.currentHeight : height

// guideline height for standard 5" device screen
  const standardScreenHeight = 680
  const heightPercent = fontSize * height / standardHeight
  return Math.round(heightPercent)
}
