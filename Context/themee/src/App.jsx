import "./App.css";
import ThemeSwitch from "./Components/ThemeSwitch";
import { useTheme } from './Components/ThemeContext';

const App = () => {
  const { theme } = useTheme();

  return (
    <div
      style={{
        padding: '20px',
        backgroundColor: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
      }}
    >
      <h1>Theme Switch App</h1>
      <p>This is a simple app to demonstrate theme switching using React Context API.</p>
      <ThemeSwitch />
    </div>
  );
};

export default App;
