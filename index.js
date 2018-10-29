import { isIphoneX } from "react-native-iphone-x-helper"
import { Platform, StatusBar, Dimensions } from "react-native"

export default function RFPercentage(percent) {
  const heightPercent = percent * deviceHeight / 100
  return Math.round(heightPercent)
}

export default function RFValue(fontSize) {
// guideline height for standard 5" device screen
  const standardScreenHeight = 680
  const heightPercent = fontSize * deviceHeight / standardScreenHeight
  return Math.round(heightPercent)
}

// helpers
const { height, width } = Dimensions.get("window")

const deviceHeight = isIphoneX()
? height * 0.9
: Platform.OS === "android" ? height - StatusBar.currentHeight : height
