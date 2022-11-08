import start_menu from "./icons/start_menu.png";
import folder from "./icons/folder.png";
import mozila from "./icons/mozila.png";
import google from "./icons/google.png";
import kubernetes from "./icons/kubernetes.png";
import docker from "./icons/docker.png";
import notification from "./icons/notification.png";
import vlc from "./icons/vlc.png";
import "./App.css";

function App() {
  // variable filled with real time and date
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  date = date.split("/").join(".") + "\n" + time;
  return (
    <>
      <div className="Windows">
        <desktop>
          <div className="desktop_icons">
            <img src={google} alt="start menu" />
            <div className="desktop_icon_title">Google</div>
          </div>
          <div className="desktop_icons">
            <img src={mozila} alt="start menu" />
            <div className="desktop_icon_title">firefox</div>
          </div>
          <div className="desktop_icons">
            <img src={folder} alt="start menu" />
            <div className="desktop_icon_title">vagrant machines</div>
          </div>

          <div className="desktop_icons">
            <img src={docker} alt="start menu" />
            <div className="desktop_icon_title">docker</div>
          </div>
          <div className="desktop_icons">
            <img src={kubernetes} alt="start menu" />
            <div className="desktop_icon_title">kubernetes</div>
          </div>
          <div className="desktop_icons">
            <img src={vlc} alt="start menu" />
            <div className="desktop_icon_title">vlc media player</div>
          </div>
        </desktop>
      </div>
      <div className="taskbar">
        <div className="icons">
          <img src={start_menu} alt="start menu" />
          <img src={folder} alt="folder" />
          <img src={google} alt="google" />
        </div>
        {/* div that containe date and time as windows 10 taskbar */}
        <div className="control_center">
          <img src={notification} alt="notification" />

          {/* windows 10 date and time */}
          <div className="date_time">{date}</div>
        </div>
      </div>
    </>
  );
}

export default App;
