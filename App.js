import React from 'react';
import Form from './Form';
import { DefaultTheme, Colors, Provider as PaperProvider } from 'react-native-paper';

console.disableYellowBox = true;

const theme = {
    ...DefaultTheme,
    roundness: 2,
    fonts: 'light',
    colors: {
        ...DefaultTheme.colors,
        primary: Colors.white,
        accent: '#f1c40f'
    },
};

export default function App() {
    
    return (
        <PaperProvider theme={theme}>
            <Form theme={theme} />
        </PaperProvider>
    );

}