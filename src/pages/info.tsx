import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import { Global, css } from '@emotion/react'
import styled from '@emotion/styled'

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
        <Text1>{description}</Text1>
        {author}
    </div>
}

export default InfoPage


// Tagged Template Literal 방식으로 css 스타일 정의
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

// Tagged Template Literal 방식을 통한 Styled Component 생성
// 다른 요소의 스타일을 적용할땐 styled.img 처럼 해당 엘리먼트를 styled 뒤에 붙여 호출해주면 된다.
const Text1 = styled.div`
    font-size: 20px;
    font-weight: 700;
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