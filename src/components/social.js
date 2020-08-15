import React from 'react'
import { LINKS } from '../constants'
import { IconMedium, IconLinkedin, IconCodepen, IconGithub } from './icons'

function Social() {
  return (
    <ul className="social small">
      <li>
        <a href={LINKS.LINKEDIN} target="_blank" rel="noreferrer">
          <span className="social-link"><IconLinkedin /><span className="text">LinkedIn</span></span>
        </a>
      </li>
      <li>
        <a href={LINKS.MEDIUM} target="_blank" rel="noreferrer">
          <span className="social-link"><IconMedium /><span className="text">Medium</span></span>
        </a>
      </li>
      <li>
        <a href={LINKS.GITHUB} target="_blank" rel="noreferrer">
          <span className="social-link"><IconGithub /><span className="text">GitHub</span></span>
        </a>
      </li>
      <li>
        <a href={LINKS.CODEPEN} target="_blank" rel="noreferrer">
          <span className="social-link"><IconCodepen /><span className="text">CodePen</span></span>
        </a>
      </li>
    </ul>
  )
}

export default Social;