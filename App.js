import { StatusBar } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/es/integration/react';
import { store, persistor } from './src/store';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import MainStack from './src/stacks/MainStack';

const navTheme = DefaultTheme;
navTheme.colors.background = '#FFF';

export default function App() {
	return (
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<NavigationContainer theme={navTheme}>
					<MainStack />
				</NavigationContainer>
			</PersistGate>
			<StatusBar />
		</Provider>
	);
}
