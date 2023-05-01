import { Home } from "./src/screens/Home";
import { 
  useFonts, 
  Roboto_400Regular, 
  Roboto_500Medium, 
  Roboto_700Bold 
} from '@expo-google-fonts/roboto'
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from "react";
import { ThemeProvider } from "styled-components/native";
import THEME from './src/theme';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular, 
    Roboto_500Medium, 
    Roboto_700Bold
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return <></>
  }

  return (
    <ThemeProvider theme={THEME}>
      <Home onLayout={onLayoutRootView} />
    </ThemeProvider>
  );
}

