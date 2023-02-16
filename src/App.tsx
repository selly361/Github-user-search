import { Header, Main, SearchField } from "components";
import React, { Fragment, useState } from "react";
import { useFetch, useTheme } from "hooks";

import GlobalStyles from "global/styles";
import { ThemeProvider } from "styled-components";
import themeStyles from "global/theme";

function App() {
  const [query, setQuery] = useState("");

  const { theme, setTheme } = useTheme();

  const { fetchData, loading, user, error } = useFetch();

  const currentThemeStyles = themeStyles[theme];

  const toggleTheme = () => setTheme(theme == "light" ? "dark" : "light");


  

  return (
    <ThemeProvider theme={currentThemeStyles}>
      <GlobalStyles />
      <Header
        toggleTheme={toggleTheme}
        theme={theme}
        icon={currentThemeStyles.icon}
      />
      <SearchField
        fetchData={fetchData}
        query={query}
        setQuery={setQuery}
        error={error}
      />
      <Main user={user} />
    </ThemeProvider>
  );
}

export default App;
