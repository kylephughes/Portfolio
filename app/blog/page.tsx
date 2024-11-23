"use client"

import Link from "next/link"
import React from "react"
import { posts } from "data"
import { Button, Card, Flex, Text, Image } from "@chakra-ui/react"

const handleBtnClick = (link: string) => {
  window.open(link)
}
const Blog = () => (
  <Flex flexDirection="column">
    {posts.map(post => (
      <Card.Root maxW="sm" overflow="hidden" key={post.title}>
        <Image src={post.imgSrc} />
        <Card.Body>
          <Card.Title>{post.title}</Card.Title>
          <Card.Description>{post.publishedAt}</Card.Description>
          <Text>{post.description}</Text>
        </Card.Body>
        <Card.Footer>
          {post.external ? (
            <Button onClick={e => handleBtnClick(post.link)} variant="ghost">
              Read more
            </Button>
          ) : (
            <Link href={post.link}>Read More</Link>
          )}
        </Card.Footer>
      </Card.Root>
    ))}
  </Flex>
)

export default Blog
