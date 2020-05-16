import React from "react"
import styled, { createGlobalStyle } from "styled-components"

// https://colorpalettes.net/color-palette-4214/

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #00243f;
    color: #f9f9f9;
    font-size: 16px;
    font-family: Oswald, Helvetica, Arial, sans-serif ;
    margin: 0 auto;
    max-width: 90%;
    padding: 0 1rem;
  }
`

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  )
}
