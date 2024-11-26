"use client"
import NextLink from "next/link"
import { Box, Flex, Avatar } from "@chakra-ui/react"
import { NavItems } from "./utils"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  console.log(pathname)
  return (
    <Flex
      display={["flex", "none"]}
      bg={"gray.100"}
      minH={"60px"}
      py={{ base: 2 }}
      px={{ base: 4 }}
      borderBottom={1}
      borderStyle={"solid"}
      borderColor={"gray.200"}
    >
      <Flex>
        <Avatar.Root size="2xl">
          <Avatar.Image src="/avatar.png" />
          <Avatar.Fallback>KH</Avatar.Fallback>
        </Avatar.Root>
        <Flex ml={3} alignItems={"center"}>
          {NavItems.map(nav => (
            <Box
              key={nav.href}
              p={2}
              fontSize="lg"
              fontWeight={500}
              textDecoration={pathname === nav.href ? "underline" : "none"}
              textUnderlineOffset={"2px"}
              _hover={{
                bg: "gray.200",
              }}
            >
              <NextLink href={nav.href}>{nav.label}</NextLink>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Header
