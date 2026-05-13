/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './scr/App';
import { name as appName } from './app.json';
// Sem essa configuração, como é uma lib de desenvolvimento,
// quando fechar o binário, o Reactotron não irá se conectar, e isso pode causar erros e o app pode não funcionar corretamente.
// Então, é importante ter essa configuração para garantir que o Reactotron funcione corretamente durante o desenvolvimento.

if (__DEV__) {
  require('./ReactotronConfig');
}

AppRegistry.registerComponent(appName, () => App);
