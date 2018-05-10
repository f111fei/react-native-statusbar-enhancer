import { NativeModules, Platform, StatusBar, StatusBarStyle } from 'react-native';

const StatusBarManager = NativeModules.StatusBarManager;
const StatusBarEnhancer = NativeModules.StatusBarEnhancer;

const originSetStyle = StatusBarManager.setStyle;
const originSetTranslucent = StatusBarManager.setTranslucent;

StatusBarManager.setStyle = (style: StatusBarStyle, animated?: boolean) => {
    if (Platform.OS === 'android') {
        StatusBarEnhancer.setStyle(style);
    } else {
        animated = animated || false;
        originSetStyle(style, animated);
    }
}

StatusBarManager.setTranslucent = (translucent: boolean) => {
    if (Platform.OS === 'android') {
        StatusBarEnhancer.setTranslucent(translucent);
    }
};