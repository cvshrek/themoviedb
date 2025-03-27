/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {App} from './src';
import {name as appName} from './app.json';
import FastImage from '@d11/react-native-fast-image';

FastImage.clearDiskCache();

AppRegistry.registerComponent(appName, () => App);
