import React from "react"
import styled, { createGlobalStyle } from "styled-components"

// https://colorpalettes.net/color-palette-4214/

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #00243f;
    color: #f9f9f9;
    font-size: 16px;
    font-family: Oswald;
    margin: 0 auto;
    max-width: 650;
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
