import NextLink from "next/link"
import { Flex, List, ListItem } from "@chakra-ui/react"

const Sidebar = () => {
  return (
    <Flex
      backgroundColor="black"
      display={["none", "flex"]}
      height="100vh"
      width="200px"
      position="fixed"
    >
      <List.Root
        color="white"
        fontSize="large"
        lineHeight={2.5}
        listStyleType="none"
        padding="8"
        width="100%"
      >
        <ListItem borderBottom="1px solid" borderColor="gray.700">
          <NextLink href="/">Home</NextLink>
        </ListItem>
        <ListItem borderBottom="1px solid" borderColor="gray.700">
          <NextLink href="/blog">Blog</NextLink>
        </ListItem>
        <ListItem borderBottom="1px solid" borderColor="gray.700">
          <NextLink href="/projects">Projects</NextLink>
        </ListItem>
      </List.Root>
    </Flex>
  )
}

export default Sidebar
