import start_menu from "./start_menu.png";
import folder from "./folder.png";
import google from "./google.png";
import "./App.css";

function App() {
  return (
    <div className="Windows">
      {/* <div className="desktop_icons">
          <img src={start_menu} alt="start menu" />

      </div> */}
      <div className="taskbar">
        <div className="icons">
          <img src={start_menu} alt="start menu" />
          <img src={folder} alt="folder" />
          <img src={google} alt="google" />
        </div>
      </div>
    </div>
  );
}

export default App;
