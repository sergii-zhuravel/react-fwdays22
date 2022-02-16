import {
  colors,
  fonts,
  widths,
  breakpoints,
  dimensions,
  heights,
  opacity,
} from "./constants";

import { getEmSize, padAll, padX, padY } from "./utils";

export default {
  screens: {
    // max-widths in pixels
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  breakpoints,
  colors,
  dimensions,
  fonts,
  heights,
  opacity,
  widths,
  utils: {
    getEmSize,
    padY,
    padX,
    padAll,
  },
};
