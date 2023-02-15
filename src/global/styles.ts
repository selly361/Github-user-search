import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

* {
  transition: all 0.2s ease-in-out;
  font-family: 'Space Mono', sans-serif;
  box-sizing: border-box;
  text-decoration: none;
  list-style: none;
  margin: 0;
  padding: 0;
}

:root {
  scroll-behavior: smooth;
  font-size: 16px;

  /* Typography */
  
  --h1: 1.625rem;
  --h1-lh: 38px;

  --h2: 1.375rem;
  --h2-lh: 33px;

  --h3: 1rem;
  --h3-lh: 24px;

  --h4: 0.813rem;
  --h4-lh: 20px;

  --body: 0.938rem;
  --body-lh: 25px;

  --body-s: 0.813rem;
  --body-s-lh: 18px;
}

body, #root {
  width: 100vw;
  min-height: 100vh;
  background-color: ${(props) => props.theme.bg};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  gap: 20px;
}


h1 {
  font-size: var(--h1);
  line-height: var(--h1-lh);
  font-weight: 700;
}

h2 {
  font-size: var(--h2);
  line-height: var(--h2-lh);
  font-weight: 700;
}

h3 {
  font-size: var(--h3);
  line-height: var(--h3-lh);
  font-weight: 400;
}

h4 {
  font-size: var(--h4);
  line-height: var(--h4-lh);
  font-weight: 400;
}


button, fieldset {
  outline: none;
  background: none;
  border: none;
}

button {
  cursor: pointer;

}

input {
  border: none;
  background: none;
  outline: none;
}



@media (max-width: 650px) {
  
  :root {
    
  /* Typography */
    
  --h1: 1rem;
  --h1-lh: 24px;

  --h2: 1rem;
  --h2-lh: 24px;

  --h3: 0.813rem;
  --h3-lh: 19px;

  --h4: 0.688rem;
  --h4-lh: 16px;

  --body: 0.813rem;
  --body-lh: 25px;
  }

  body {
    padding: 32px 24px 80px 24px;
  }
}


`;

export default GlobalStyles;
