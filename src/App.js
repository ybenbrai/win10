import start_menu from "./icons/start_menu.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import folder from "./icons/folder.png";
import mozila from "./icons/mozila.png";
import google from "./icons/google.png";
import kubernetes from "./icons/kubernetes.png";
import docker from "./icons/docker.png";
import notification from "./icons/notification.png";
import vlc from "./icons/vlc.png";
import windows_store from "./icons/windows_store.png";
import speaker from "./icons/speaker.png";
import "./App.css";
import { useState } from "react";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RemoveIcon from "@mui/icons-material/Remove";
function App() {
  const [isHovering, setIsHovering] = useState(false);
  const handleStartClick = () => {
    if (isHovering === false) setIsHovering(true);
    else setIsHovering(false);
  };

  // on click on the openFolder function, it will open a dragable window
  const openFolder = () => {
    const folder = document.getElementById("folder");
    folder.style.display = "block";
  };
  // variable filled with real time and date
  let time = new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  let date = new Date().toLocaleDateString();

  date = date.split("/").join(".") + "\n" + time;
  return (
    <>
      <div className="Windows">
        <Draggable className="dragable">
          <div className="folder_window">
            <div className="top_of_window">
              {/* </div> */}
              {/* close button of window of windows 10 */}
              <div className="right_buttons">
                <div className="close_button">
                  <CloseIcon fontSize="small" style={{ color: "white" }} />
                </div>
                <div className="bigger_reduce">
                  <CropSquareIcon fontSize="small" style={{ color: "white" }} />
                </div>
                <div className="bigger_reduce">
                  <RemoveIcon fontSize="small" style={{ color: "white" }} />
                </div>
              </div>
              <div className="window_title">
                {/* <div className="window_title_left"> */}
                <img src={folder} alt="folder" />
                <p>Folder</p>
              </div>
            </div>
          </div>
        </Draggable>
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
        {isHovering && (
          <div className="start_menu">
            <div className="start_menu_top">
              <img src={windows_store} alt="start menu" />
            </div>
          </div>
        )}
      </div>
      <div className="taskbar">
        <div className="icons">
          <img
            onClick={handleStartClick}
            className="start_hover"
            src={start_menu}
            alt="start menu"
          />
          <div className="Search">
            <input type="text" placeholder="Use Cartona to search" />
          </div>
          <img src={folder} alt="folder" />
          <img src={google} alt="google" />
        </div>
        {/* div that containe date and time as windows 10 taskbar */}
        <div className="control_center">
          <div>
            <img src={notification} alt="notification" />
          </div>

          {/* windows 10 date and time */}
          <label>{date}</label>
          {/* div that containe speaker icon */}
          <div className="speaker">
            <img src={speaker} alt="speaker" />
          </div>
          <ArrowDropUpIcon className="arrow" />
        </div>
      </div>
    </>
  );
}

export default App;
