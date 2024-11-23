"use client"

import React from "react"
import { projects } from "data"
import {
  Flex,
  Heading,
  Text,
  Card,
  Button,
  Grid,
  GridItem,
  Em,
} from "@chakra-ui/react"
import Link from "next/link"

const Projects = () => {
  return (
    <Flex flexDirection="column">
      <Heading size="2xl">Projects</Heading>

      <Text marginBottom={2}>
        Check out some of the projects I have worked on - some with small groups
        of engineers and some individually!
      </Text>

      <Grid
        gridTemplateColumns="repeat(auto-fill, minmax(296px, 1fr))"
        gap={6}
        marginTop="8"
        width="100%"
      >
        {projects.map(project => {
          return (
            <Card.Root
              maxW="sm"
              overflow="hidden"
              key={project.title}
              as={GridItem}
            >
              <Card.Body>
                <Flex flexDirection="column" height="100%">
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Description marginBottom={2}>
                    {project.description}
                  </Card.Description>
                  <Flex flexGrow={1} alignItems="flex-end">
                    <Text fontSize="sm">
                      <Em>Built With:</Em> {project.tech}
                    </Text>
                  </Flex>
                </Flex>
              </Card.Body>
              <Card.Footer>
                <Button variant="ghost">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View repo
                  </Link>
                </Button>
              </Card.Footer>
            </Card.Root>
          )
        })}
      </Grid>
    </Flex>
  )
}

export default Projects
