import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout from "../components/layout"

import { dimensions } from "../style-constants"

const CenteringDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: left;
  padding-left: ${dimensions.containerPadding.regular}rem;
  padding-right: ${dimensions.containerPadding.regular}rem;

  @media (max-width: 900px) {
    padding-left: ${dimensions.containerPadding.small}rem;
    padding-right: ${dimensions.containerPadding.small}rem;
  }
`

const NameDiv = styled.div`
  font-size: ${dimensions.fontSize.xl}rem;
  font-family: Arial, Helvetica, sans-serif;
`

const PresentationText = styled.p`
  font-size: ${dimensions.fontSize.m}rem;
  font-family: Arial, Helvetica, sans-serif;
`

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>adamalenius</title>
      <link rel="icon" href="./static/favicon.ico" type="image/x-icon" />
    </Helmet>
    <CenteringDiv>
      <NameDiv>
        <p>
          adam
          <br />
          alenius
        </p>
      </NameDiv>
      <PresentationText>
        Welcome! I write code and stuff. In this page I will collect links to my
        small projects that I do for fun.
      </PresentationText>
    </CenteringDiv>
  </Layout>
)
