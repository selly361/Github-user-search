import React, { useEffect, useState } from "react";

type TTheme = "light" | "dark";

export const useTheme = () => {
  let defaultTheme: TTheme =
    (localStorage.getItem("theme") as TTheme) ||
    (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  const [theme, setTheme] = useState<TTheme>(defaultTheme);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
