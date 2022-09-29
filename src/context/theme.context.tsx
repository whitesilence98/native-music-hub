import * as React from 'react';
import {Appearance} from 'react-native';
import {darkTheme, lightTheme} from '@styles/theme.style';

export const ThemeContext = React.createContext({
  isDark: false,
  theme: lightTheme,
});

export const ThemeProvider = (props: any) => {
  const [isDark, setIsDark] = React.useState(true);
  const theme = React.useMemo(() => {
    return isDark ? darkTheme : lightTheme;
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{isDark, theme}}>
      {props.children}
    </ThemeContext.Provider>
  );
};

// Custom hook to get the theme object returns {isDark, colors, setScheme}
export const useTheme = () => React.useContext(ThemeContext);
