import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import Layout from "../components/layout"

import { dimensions } from "../style-constants"
import { SiteLink } from "../components/Link"

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

const Title = styled.h1`
  font-size: ${dimensions.fontSize.xxl}rem;
  font-family: Montserrat, Arial, Helvetica, sans-serif;
`

const PresentationText = styled.p`
  font-size: ${dimensions.fontSize.m}rem;
`

const LinkDescription = styled.p`
  font-size: ${dimensions.fontSize.s}rem;
  max-width: 500px;
`

const LinkContainer = styled.div`
  padding-top: ${dimensions.containerPadding.regular};
  padding-bottom: ${dimensions.containerPadding.regular};
`

export default () => (
  <Layout>
    <Helmet>
      <meta charSet="utf-8" />
      <title>adamalenius</title>
      <link rel="icon" href="./static/favicon.ico" type="image/x-icon" />
    </Helmet>
    <CenteringDiv>
      <Title>
        <p>
          adam
          <br />
          alenius
        </p>
      </Title>
      <PresentationText>
        Welcome! I write code and stuff. In this page I will collect links to my
        small projects that I do for fun.
      </PresentationText>
      <LinkContainer>
        <h2>links</h2>
        <SiteLink
          title="MovieRandomizer"
          url="https://aa-movie-list.netlify.app"
        />
        <LinkDescription>
          This is a page that helps you find a movie to watch. It presents you
          with a random movie from IMDB's top 250 highest rated list.
        </LinkDescription>
        <SiteLink title="qviz" url="https://qviz-game.herokuapp.com" />
        <LinkDescription>
          A simple quiz app where you can create your own quizzes or play other
          peoples quizzes.
        </LinkDescription>
      </LinkContainer>
    </CenteringDiv>
  </Layout>
)
