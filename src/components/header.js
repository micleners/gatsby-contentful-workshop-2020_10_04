import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Heading, Flex, Box } from "rebass"
import styled from "styled-components"

import { CenteredContent } from "./styled"

const HomeLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  padding: 0 20px;
`

const Header = ({ siteTitle }) => (
  <Heading backgroundColor="rebeccapurple">
    <CenteredContent>
      <Flex alignItems="baseline" justifyContent="space-between" width="100%">
        <Heading fontSize={5} m="0">
          <HomeLink to="/">{siteTitle}</HomeLink>
        </Heading>
        <Box>
          <NavLink to="/organizers">Organizers</NavLink>
          <NavLink to="/events">Events</NavLink>
          <NavLink to="/blog">Blog</NavLink>
        </Box>
      </Flex>
    </CenteredContent>
  </Heading>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
