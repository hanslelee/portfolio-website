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
        <Text1 disable={true}>{description}</Text1>
        <Text2 disable={true}>{author}</Text2>
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
const Text1 = styled.div<{ disable: boolean }>`
    font-size: 20px;
    font-weight: 700;
    text-decoration: ${({ disable }) => disable ? 'line-through':'none'}
`

// 객체를 통해 Styled Component 생성
// 하이픈('-')을 통해 단어를 연결하는 Kebab Case가 아닌 단어가 합쳐진 부분마다 맨 처음 글자를 대문자로 표시하는 Camel Case를 사용한다는 점과 스타일 값은 무조건 String Type으로 전달해야 한다
const Text2 = styled('div')<{ disable: boolean }>(({disable}) => ({
    fontSize: '15px',
    color: 'blue',
    textDecoration: disable ? 'line-through' : 'none'
}))

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