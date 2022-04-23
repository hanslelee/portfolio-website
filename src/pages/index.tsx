import React, { FunctionComponent } from 'react'
import { Link } from 'gatsby'

const IndexPage: FunctionComponent = function () {
  return <div>
    <Link to="/info/">To InfoPage</Link>
  </div>
}

export default IndexPage