import React from 'react'
import { Link } from "gatsby";
import Logo from './logo'
import { ROUTES } from '../constants'

function LogoLink() {
  return (
    <Link
      to={ROUTES.HOME}
      className="blog-name heading"
      aria-label="belwerks"
    >
      <Logo />
    </Link>
  )
}

export default LogoLink