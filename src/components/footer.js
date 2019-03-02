import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  width: 100%;
  
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  padding: 0 1.5rem;
  height: 4rem;
 
`

const Item = styled.li`
  color: white;
  font-weight: bold;
  a {
    margin: 0 1rem 0 0;
  }
  svg {
    width: 16px;
    fill: #003366;
  }
`

const Footer = () => (
  <footer>
    <List>
      <Item>
          
      <span>Cristina Lugo 💙  © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a> </span>
        <a href="mailto:cmlugoce@gmail.com"
        target="_blank"
          rel="noopener noreferrer">
          <svg
            role="img"
            viewBox="0 0 18 18"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Mail icon</title>
            <path d="M18.64 2.634c-0.344 0.121-17.321 6.104-17.656 6.222-0.284 0.1-0.347 0.345-0.010 0.479 0.401 0.161 3.796 1.521 3.796 1.521v0l2.25 0.901c0 0 10.838-7.958 10.984-8.066 0.148-0.108 0.318 0.095 0.211 0.211s-7.871 8.513-7.871 8.513v0.002l-0.452 0.503 0.599 0.322c0 0 4.65 2.504 4.982 2.682 0.291 0.156 0.668 0.027 0.752-0.334 0.099-0.426 2.845-12.261 2.906-12.525 0.079-0.343-0.148-0.552-0.491-0.431zM7 17.162c0 0.246 0.139 0.315 0.331 0.141 0.251-0.229 2.85-2.561 2.85-2.561l-3.181-1.644v4.064z" />
          </svg>
        </a>
        <a
          href="https://github.com/cmlugoce"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>GitHub icon</title>
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a
          href="https://twitter.com/crislugoc"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Twitter icon</title>
            <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
          </svg>
        </a>
        
      </Item>
    </List>
  </footer>
)

export default Footer