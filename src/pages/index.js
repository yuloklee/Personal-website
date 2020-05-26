import React, { useState } from "react"
import { Link } from "gatsby"
import { useTrail, useSpring, animated } from "react-spring"
import styled from "styled-components"
import "../css/styles.css"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const items = ["Hi, my", "name is", "Joshua"]
const config = { mass: 5, tension: 2000, friction: 200 }


const IndexPage = () => {
  const [toggle, set] = useState(true)
  const props = useSpring({opacity: 1, y: 0, x: -20, height: 80, from: {opacity: 0, y:30, height:0}})
  const trail = useTrail(items.length, {
    config,
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
    from: { opacity: 0, x: 20, height: 0 },
  })

  return (
    <div>
      <Helmet>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <title>Joshua Lee</title>
          <link rel="canonical" href="https://yulok.me/" />
        </Helmet>
    <div className="trails-main" onClick={() => set(state => !state)}>
      <div>
        {trail.map(({ x, height, ...rest }, index) => (
          <animated.div
            key={items[index]}
            className="trails-text"
            style={{
              ...rest,
              transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
            }}
          >
            <animated.div style={{ height }}>{items[index]}</animated.div>
          </animated.div>
          
        ))}
        
      </div>
    </div>
    <animated.div className="links" style={props}>
      <a href='https://github.com/yuloklee'>Github</a>
    <a href='https://drive.google.com/file/d/1BnRtsgLRcBxxN5m0Dm2gRHFBRSIOxBdK/view?usp=sharing'>Resume</a>
    <a href='https://www.linkedin.com/in/joshua-lee-81694a175/'>Linkedin</a>
    </animated.div>
    
    </div> 
  )
}

export default IndexPage
