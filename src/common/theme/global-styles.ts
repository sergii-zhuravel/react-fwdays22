import { dimensions, colors, breakpoints } from "./constants";
import { getEmSize } from "./utils";
import "semantic-ui-css/semantic.min.css";

export default `
  @font-face {
    font-family: "Avenir Black";
    src: url("../fonts/Avenir/Avenir-Black.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Black-Oblique";
    src: url("../fonts/Avenir/Avenir-BlackOblique.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Book";
    src: url("../fonts/Avenir/Avenir-Book.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Book-Oblique";
    src: url("../fonts/Avenir/Avenir-BookOblique.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Heavy";
    src: url("../fonts/Avenir/Avenir-Heavy.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Heavy-Oblique";
    src: url("../fonts/Avenir/Avenir-HeavyOblique.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Light";
    src: url("../fonts/Avenir/Avenir-LightOblique.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: "Avenir-Medium";
    src: url("../fonts/Avenir/Avenir-Medium.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Medium-Oblique";
    src: url("../fonts/Avenir/Avenir-MediumOblique.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Oblique";
    src: url("../fonts/Avenir/Avenir-Oblique.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: "Avenir-Roman";
    src: url("../fonts/Avenir/Avenir-Roman.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    font-size: ${dimensions.fontSize.regular}px !important;
    line-height: ${dimensions.lineHeight.regular} !important;
  }

  body {
    width: 100%;
    overflow-x: hidden;
    overflow-y: scroll;
    font-family: 'Avenir-Book' !important;
    color: ${colors.brand.black} !important;
    background-color: ${colors.brand.white} !important;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: ${colors.brand.blue} !important;
    text-decoration: none;

    &:hover,
    &:focus {
      color: ${colors.brand.teal} !important;
      text-decoration: underline;
    }
  }

  img {
    max-width: 100%;
    object-fit: contain;
    position: relative;
  }

  figure {
    margin: 2rem 0;
  }

  figcaption {
    font-size: 80%;
  }

  table {
    width: 100%;
    margin-bottom: 1rem;
    border: 1px solid ${colors.ui.light};
    font-size: 85%;
    border-collapse: collapse;
  }

  td,
  th {
    padding: .25rem .5rem;
    border: 1px solid ${colors.ui.light};
  }

  th {
    text-align: left;
  }

  tbody {
    tr {
      &:nth-of-type(odd) {
        td {
          background-color: ${colors.ui.whisper};
        }
        tr {
          background-color: ${colors.ui.whisper};
        }
      }
    }
  }

  h1, h2, h3, h4, h5, h6 {
    color: ${colors.brand.black};
    font-family: 'Avenir-Black' !important;
    letter-spacing: -0.01em !important;
    font-weight: 900 !important;
    line-height: ${dimensions.lineHeight.heading} !important;
    text-rendering: optimizeLegibility;
  }

  h1 {
    margin-top: 0;
    font-size: ${dimensions.headingSizes.h1}rem !important;
  }

  h2 {
    font-size: ${dimensions.headingSizes.h2}rem !important;
  }

  h3 {
    font-size: ${dimensions.headingSizes.h3}rem !important;
  }

  h4, h5, h6 {
    font-size: ${dimensions.headingSizes.h4}rem !important;
  }

  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: #000;
  }

  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  dt {
    font-weight: bold;
  }

  dd {
    margin-bottom: .5rem;
  }

  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid ${colors.ui.light};
  }

  blockquote {
    margin: .8rem 0;
    padding: .5rem 1rem;
    border-left: .25rem solid ${colors.brand.lightGrey};
    color: ${colors.brand.black};
    background-color: ${colors.ui.light};

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }

    @media (min-width: ${getEmSize(breakpoints.md)}em) {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
`;
