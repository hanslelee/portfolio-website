import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/react'

type infoPageProps = {
    "data": {
      "site": {
        "siteMetadata": {
          "author": string,
          "description": string,
          "title": string
        }
      }
    }
  }

const InfoPage: FunctionComponent<infoPageProps> = function ({
    data: {
        site: {
            siteMetadata: { author, description, title },
        },
    },
}) {
    return <div>
        <Global styles={globalStyle} />      
        <div css={TextStyle}>{title}</div>
        {description} {author}
    </div>
}

export default InfoPage


// Tagged Template Literal 방식으로 글로벌 스타일 정의
const globalStyle = css`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 20px;
    }
`

const TextStyle = css`
    font-size: 18px;
    font-weight: 700;
    color: grey;
`

export const metadataQuery = graphql `
    {
        site {
            siteMetadata {
                title
                description
                author
            }
        }
    }
`