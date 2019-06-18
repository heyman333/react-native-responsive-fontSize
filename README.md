## react-native-responsive-fontsize

[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/heyman333/react-native-responsive-fontSize/pulls)
[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/heyman333/react-native-responsive-fontSize/blob/master/LICENSE)

<strong>Use this library if you have a small problem with the font size 🎉</strong>

<hr />

#### How to install

```shell
yarn add react-native-responsive-fontsize
# or
npm install react-native-responsive-fontsize --save
```

#### How it looks on different device sizes

|                                                               iPhone SE                                                                |                                                               iPhone X                                                                |
| :------------------------------------------------------------------------------------------------------------------------------------: | :-----------------------------------------------------------------------------------------------------------------------------------: |
| <img src="https://raw.githubusercontent.com/heyman333/react-native-responsive-fontSize/master/images/SE.png" width="320" height="568"> | <img src="https://raw.githubusercontent.com/heyman333/react-native-responsive-fontSize/master/images/X.png" width="385" height="812"> |

#### Usage

```js
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

const styles = StyleSheet.create({
  welcome: {
    fontSize: RFValue(24),
    textAlign: "center",
    margin: 10,
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: RFPercentage(5),
  },
});
```
