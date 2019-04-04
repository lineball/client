import styled, { createGlobalStyle } from 'styled-components';

export const Global = createGlobalStyle`
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #282c34;
}

a:any-link {
  color: inherit;
  text-decoration: none;
}

#root,
html,
body {
  height: 100%;
  width: 100%;
  min-height: 100%;
  min-width: 100%;
  overflow: hidden;
}
`;

export const AppContainer = styled.div`
  max-width: 960px;
  margin: auto;
  overflow-y: auto;
  height: 100vh;
`;

export const FullPage = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  overflow: hidden;
  width: 100vw;
  height: 100vh;
`;

export const colors = {
  background: '#282c34',
  logo: {
    yellow: '#ff0',
    red: '#f00'
  }
};

export default {
  AppContainer
};
