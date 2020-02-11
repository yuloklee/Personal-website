import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useTrail, useSpring, animated } from "react-spring"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => {
  const [isToggled, setToggle] = useState(false)
  const trail = useTrail(10, {
    opacity: isToggled ? 1 : 0,
    width: isToggled ? "90%" : "100%",
  })
  const fadeUp = useSpring({
    opacity: isToggled ? 1 : 0,
    transform: isToggled ? "translateY(0px)" : "translateY(100px)",
    delay: isToggled ? 600 : 200,
    config: {
      friction: isToggled ? 100 : 50,
    },
  })

  return (
    <Layout>
      <SEO title="Page two" />
      <button onClick={() => setToggle(!isToggled)}>Toggle</button>
      <Container>
        {trail.map(props => (
          <animated.div style={props} />
        ))}
        {isToggled && <Masthead style={fadeUp}>Hello Friends</Masthead>}
      </Container>
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

const Container = styled(animated.div)`
  display: grid;
  grid-template-columns: repeat(10, 1fr);

  div {
    height: 100vh;
    background: rgba(0, 110, 250, 0.5);
  }
`
const Masthead = styled(animated.h1)`
  position: absolute;
  top: 40%;
  left: 10%;
`

export default SecondPage
