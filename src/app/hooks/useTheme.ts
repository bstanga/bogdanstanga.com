import { useState, useEffect } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check if we're in the browser
    if (typeof window !== "undefined") {
      // Get stored theme or system preference
      const isDarkStored = localStorage.getItem("darkMode");
      const prefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;

      // Use stored preference, fallback to system preference
      const shouldBeDark = isDarkStored ? isDarkStored === "true" : prefersDark;

      // Update state and HTML class
      setIsDark(shouldBeDark);
      document.documentElement.classList.toggle("dark", shouldBeDark);
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setIsDark(newTheme);
    localStorage.setItem("darkMode", String(newTheme));
    document.documentElement.classList.toggle("dark", newTheme);
  };

  return { isDark, toggleTheme };
}
