import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "app": {
        "font": "14px 'Helvetica Neue', Helvetica, Arial, sans-serif",
        "color": "#4d4d4d",
        "minWidth": 550,
        "maxWidth": 850,
        "marginTop": 0,
        "marginRight": "auto",
        "marginBottom": 0,
        "marginLeft": "auto"
    },
    "jumbotron": {
        "marginTop": 20,
        "marginRight": 0,
        "marginBottom": 0,
        "marginLeft": 0
    },
    "a": {
        "fontSize": 16,
        "lineHeight": 1.6
    },
    "aactive": {
        "color": "orange"
    },
    "nav": {
        "paddingTop": 20
    }
});