@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  color-scheme: light;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  min-height: 100vh;
  font-family: Arial, Helvetica, sans-serif;
  background: #f5f5f4;
}

img {
  display: block;
  max-width: 100%;
}

button,
input,
textarea {
  font: inherit;
}

* {
  box-sizing: border-box;
}

::selection {
  background: rgba(234, 125, 45, 0.3);
}
