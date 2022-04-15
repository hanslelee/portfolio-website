import React, { FunctionComponent } from 'react'
import { graphql } from 'gatsby'
import Text from 'components/Text'
import { Link } from 'gatsby'

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
        <Text text={title} />
        <Text text={author} />
        <Text text={description} />
        <Link to="/">To MainPage</Link>
    </div>
}

export default InfoPage

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