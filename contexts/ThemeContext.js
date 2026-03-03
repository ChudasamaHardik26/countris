import {useState, createContext} from "react";
export const ThemeContext = createContext();
export default function ThemeProvider({children})
{
    const [isDark,setIsDark] = useState(JSON.parse(localStorage.getItem("isMode")));
    return (
        <ThemeContext.Provider value={[isDark,setIsDark]}>
            {children}
        </ThemeContext.Provider>
    )
}
    