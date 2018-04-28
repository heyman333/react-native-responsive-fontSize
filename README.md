## react-native-responsive-fontSize

[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen.svg)](https://github.com/heyman333/react-native-responsive-fontSize/pulls)
[![Platform](https://img.shields.io/badge/platform-react--native-lightgrey.svg)](http://facebook.github.io/react-native/)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/heyman333/react-native-responsive-fontSize/blob/master/LICENSE)


#### This is simple method for reponsive font size 

#### Usage 
```js
import RF from "react-native-responsive-fontSize"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: RF(3.5),
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
    fontSize: RF(2.5)
  }
})

```
