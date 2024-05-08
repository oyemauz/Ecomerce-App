import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {

    --color-category: #40a829;

    --color-slate-100:rgb(241 ,245 ,249);
    --color-slate-200:rgb(226 ,232 ,240);

    --color-zinc-400: rgb(168 162 158);
    --color-zinc-800: rgb(39, 39, 42);
    --color-zinc-900:rgb(24 ,24, 27);
    --color-zinc-950:rgb(9 ,9 ,11);

    --color-neutral-800: rgb(38, 38 ,38);
    --color-neutral-900: rgb(23 ,23, 23);

    --color-stone-800: rgb(41 ,37 ,36);
    --color-stone-900: rgb(28 ,25, 23);

    --color-lime-500: rgb(132, 204, 22);
    --color-lime-600: rgb(101, 163, 13);

    --color-grey-0: #fff;
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;

    --color-blue-100: #e0f2fe;
    --color-blue-700: #0369a1;

    --color-green-100: #dcfce7;
    --color-green-700: #15803d;

    --color-yellow-100: #fef9c3;
    --color-yellow-700: #a16207;

    --color-silver-100: #e5e7eb;
    --color-silver-700: #374151;

    --color-indigo-100: #e0e7ff;
    --color-indigo-700: #4338ca;

    --color-red-100: #fee2e2;
    --color-red-700: #b91c1c;
    --color-red-800: #991b1b;

    --backdrop-color: rgba(255, 255, 255, 0.1);

    --shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.04);
    --shadow-md: 0px 0.6rem 2.4rem rgba(0, 0, 0, 0.06);
    --shadow-lg: 0 2.4rem 3.2rem rgba(0, 0, 0, 0.12);
    
    --image-grayscale: 0;
    --image-opacity: 100%;
  }
    
  html {
    font-size: 10px;
  }

  input,
  textarea,
  select {
    font: inherit;
  }

  button {
    cursor: pointer;
  }

  *:disabled {
    cursor: not-allowed;
  }

  select:disabled,
  input:disabled {
    background-color: var(--color-grey-200);
    color: var(--color-grey-500);
  }

  input:focus,
  button:focus,
  textarea:focus,
  select:focus {
    outline-offset: -1px;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    overflow-wrap: break-word;
    hyphens: auto;
  }

  img {
    max-width: 100%;
  }

}
`;

export default GlobalStyles;
