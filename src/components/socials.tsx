import { Flex, IconButton } from "@chakra-ui/react"

import { FaLinkedin, FaGithub } from "react-icons/fa"
import React from "react"

const Socials = () => {
  const socials = [
    {
      icon: <FaGithub />,
      link: "https://github.com/kylephughes",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/kyle-hughes-b2805b83",
    },
  ]
  const navigateTo = (link: string) => {
    window.open(link)
  }
  return (
    <Flex gap={2}>
      {socials.map(social => (
        <IconButton
          key={social.link}
          variant="ghost"
          onClick={_ => navigateTo(social.link)}
          rounded="full"
        >
          {social.icon}
        </IconButton>
      ))}
    </Flex>
  )
}

export default Socials
