import start_menu from "./icons/start_menu.png";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import folder from "./icons/folder.png";
import mozila from "./icons/mozila.png";
import google from "./icons/google.png";
import kubernetes from "./icons/kubernetes.png";
import pdf from "./icons/pdf.png";
import docker from "./icons/docker.png";
import notification from "./icons/notification.png";
import windows_store from "./icons/windows_store.png";
import speaker from "./icons/speaker.png";
import "./App.css";
import { useState } from "react";
import Draggable from "react-draggable";
import CloseIcon from "@mui/icons-material/Close";
import CropSquareIcon from "@mui/icons-material/CropSquare";
import RemoveIcon from "@mui/icons-material/Remove";
import English from "./icons/English.pdf";
import French from "./icons/French.pdf";

function App() {
  const [isHovering, setIsHovering] = useState(false);
  const [isLock, setIsLock] = useState(false);
  // function that open a pdf file on click
  const handleEnglishResume = () => {
    let display = document.getElementsByClassName("Resumes_en")[0];
    display.style.display = "flex";
  };
  const handleFrenchResume = () => {
    let display = document.getElementsByClassName("Resumes_fr")[0];
    display.style.display = "flex";
  };
  const handleWindowClose = () => {
    let display = document.getElementsByClassName("folder_window")[0];
    display.style.display = "none";
  };
  const handleResumeEnClose = () => {
    let display = document.getElementsByClassName("Resumes_en")[0];
    display.style.display = "none";
  };
  const handleResumeFrClose = () => {
    let display = document.getElementsByClassName("Resumes_fr")[0];
    display.style.display = "none";
  };
  const handleWindowOpen = () => {
    let display = document.getElementsByClassName("folder_window")[0];
    display.style.display = "flex";
  };
  const handleStartClick = () => {
    if (isHovering === false) setIsHovering(true);
    else setIsHovering(false);
  };
  const handleLockScreenClick = () => {
    console.log("lock");
    if (isLock === true) setIsLock(false);
    else setIsLock(true);
  };

  // variable filled with real time and date
  let time = new Date().toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
  });
  let date = new Date().toLocaleDateString();
  let dateOnly = new Date().toLocaleDateString("en-GB", {
    month: "numeric",
    year: "numeric",
    weekday: "long",
    day: "numeric",
  });

  date = date.split("/").join(".") + "\n" + time;
  return (
    <>
      {!isLock && (
        <div className="lockscreen" onClick={handleLockScreenClick}>
          <div className="lockscreen_date">
            <label>{time + "\n"}</label>
            <label>{dateOnly}</label>
          </div>
        </div>
      )}

      <div className="Windows">
        <Draggable>
          <div className="Resumes_en">
            <div className="top_of_windowR">

              <div className="right_buttons">
                <div className="close_button" onClick={handleResumeEnClose}>
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
                <img src={pdf} alt="folder" />
                <p>Resume</p>
              </div>
            </div>
            <div className="Resumes_embed">
              <embed src={English} width="100%" height="100%" />
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="Resumes_fr">
            <div className="top_of_windowR">

              <div className="right_buttons">
                <div className="close_button" onClick={handleResumeFrClose}>
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
    
                <img src={pdf} alt="folder" />
                <p>Resume</p>
              </div>
            </div>
            <div className="Resumes_embed">
              <embed src={French} width="100%" height="100%" />
            </div>
          </div>
        </Draggable>
        <Draggable>
          <div className="folder_window">
            <div className="top_of_window">
              {/* </div> */}
              {/* close button of window of windows 10 */}
              <div className="right_buttons">
                <div className="close_button" onClick={handleWindowClose}>
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
                <p>Documents</p>
              </div>
            </div>
            <div className="under_top_of_window">
              <div className="window_menu_titles">
                <p>File</p>
                <p>Home</p>
                <p>Share</p>
                <p>View</p>
              </div>
            </div>
            <div className="Quick_access">
              <p>Quick access</p>
              <p>Desktop</p>
              <p>Downloads</p>
              <p>Documents</p>
              <p>Pictures</p>
              <p>Music</p>
              <p>Porn</p>
              <p>personal_Items</p>
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
            <img src={folder} alt="start menu" />
            <div className="desktop_icon_title">1337</div>
          </div>
          <div className="desktop_icons">
            <img onClick={handleEnglishResume} src={pdf} alt="start menu" />
            <div className="desktop_icon_title">Resume En</div>
          </div>
          <div className="desktop_icons">
            <img onClick={handleFrenchResume} src={pdf} alt="start menu" />
            <div className="desktop_icon_title">Resume Fr</div>
          </div>
          <div className="desktop_icons">
            <img onClick={handleWindowOpen} src={folder} alt="start menu" />
            <div className="desktop_icon_title">Projects</div>
          </div>

          <div className="desktop_icons">
            <img src={docker} alt="start menu" />
            <div className="desktop_icon_title">docker</div>
          </div>
          <div className="desktop_icons">
            <img src={kubernetes} alt="start menu" />
            <div className="desktop_icon_title">kubernetes</div>
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
          <img onClick={handleWindowOpen} src={folder} alt="folder" />
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
