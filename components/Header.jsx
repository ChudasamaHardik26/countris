import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

export default function Header() {
  const [isDark,setIsDark] = useContext(ThemeContext)
  if(isDark)
  {
    localStorage.setItem("isMode",isDark);
  }
  else
  {
    localStorage.setItem("isMode",isDark);
  }
    return (
    <header className={`header-container ${isDark ? "dark" : ""}`} >
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the worlds?</a>
        </h2>
        <p onClick={()=>
          {
            !isDark ? setIsDark(true) : setIsDark(false);
          }
        }>
          <i className={`fa-solid ${isDark ? 'fa-sun' : 'fa-moon'}`}></i>
          &nbsp;&nbsp;{isDark ? "Light" : "Dark"} Mode
        </p>
      </div>
    </header>
  );
}