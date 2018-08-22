// @flow

// #region imports
import { injectGlobal } from 'styled-components';
// #endregion

const injectGlobalStyle = () => injectGlobal`
  html, body {
    margin: 0;
    height: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: #2E3436;
    color: #D3D7CF;
  }

  * {
    box-sizing: border-box;
  }

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      text-decoration: none;
    }
  }
`;

export default injectGlobalStyle;
