import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"

const CenteringDiv = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: left;
  font-size: 2rem;
`

const TextDiv = styled.div``

export default () => (
  <Layout>
    <CenteringDiv>
      <TextDiv>
        <p>
          adam
          <br />
          alenius
        </p>
      </TextDiv>
    </CenteringDiv>
  </Layout>
)
