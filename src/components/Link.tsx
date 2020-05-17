import React from "react"
import styled from "styled-components"

import { colors, dimensions } from "../style-constants"

const Link = styled.a`
  font-size: ${dimensions.fontSize.m}rem;
  color: ${colors.white};
`

export const SiteLink = ({ title, url }) => {
  return (
    <Link href={url} target="_blank" rel="noreferrer">
      {title}
    </Link>
  )
}
