import logged from "./logged.js";
import preLoad from '../../utils/preload.js';

window.onpaint = preLoad(
  logged.setCurrentLoggedUser,
  logged.toggleLogOut,
);