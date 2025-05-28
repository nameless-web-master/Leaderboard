import './styles.css';
import Api from './modules/api';
import consoleText from './modules/terminalFx';

const refreshButton = document.querySelector('.refresh-btn');
refreshButton.addEventListener('click', () => {
  Api.getScores();
});


document.onreadystatechange = function () {
  if (document.readyState !== "complete") {
    document.querySelector("body").style.visibility = "hidden";
    document.querySelector("#preloader").style.visibility = "visible";
  } else {
    setTimeout(() => {
      document.querySelector("#preloader").style.display = "none";
    }, 3500);
    document.querySelector("body").style.visibility = "visible";
  }
};
