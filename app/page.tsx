"use client"

import React from "react"
import { Flex, Heading, Text } from "@chakra-ui/react"
import Contact from "../src/components/contact"
import { Metadata } from "next"

const Home = () => (
  <Flex flexDirection="column">
    <Flex
      borderBottom="1px solid"
      borderColor="gray.100"
      direction="column"
      paddingBottom="8"
    >
      <Heading size="4xl">Kyle Hughes</Heading>
      <Heading marginTop="2" size="lg">
        Staff Software Engineer - Westwood, NJ
      </Heading>
      <Contact />

      <Text marginTop="8" width={["100%", "70%"]}>
        I'm a software engineer with a passion for building out new product's
        and diving into new tech. I have had experience building and scaling
        production ready services at Disney in support of the initial Disney+
        launch. I also have extensive experience in frontend development - from
        building full stack internal tools from scratch to building and
        supporting new customer facing features. Today you can find me at Gemini
        building out new product experiences on the web and mobile platforms.
        Love building and learning anything new with React and now React Native
        &#128512; so please reach out if you want to jam on something!
      </Text>
    </Flex>
    <Flex flexDirection="column" marginTop={4}>
      <Heading size="2xl" marginBottom={4}>
        Experience
      </Heading>
      <Flex flexDirection="column">
        <Heading fontWeight="normal">
          Staff Software Engineer, Frontend - Gemini
        </Heading>
        <Text fontWeight="light" marginBottom="8px">
          2022 - Present
        </Text>
        <Heading fontWeight="normal">
          Senior Software Engineer - Disney Streaming Services
        </Heading>
        <Text fontWeight="light" marginBottom="8px">
          2019 - 2022
        </Text>
        <Heading fontWeight="normal">
          Software Engineer - Lockheed Martin / Leidos
        </Heading>
        <Text fontWeight="light" marginBottom="8px">
          2014 - 2019
        </Text>
      </Flex>
    </Flex>
  </Flex>
)

export default Home