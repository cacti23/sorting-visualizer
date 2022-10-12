import { Box, Flex, HStack, Text, Link } from '@chakra-ui/react'

import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { FiMonitor } from 'react-icons/fi'

function Footer() {
  return (
    <Box h="10vh">
      <Flex h="100%" direction="row" justify="center" align="center">
        <HStack spacing={1}>
          <Text fontSize="lg">© Aditya Patel.</Text>
          <HStack spacing={3}>
            <Link href="https://github.com/cacti23" target="_blank">
              <BsGithub size={30} />
            </Link>

            <Link
              href="https://www.linkedin.com/in/adityap314/"
              target="_blank"
            >
              <BsLinkedin size={30} />
            </Link>

            <Link
              href="https://my-portfolio-umber-six.vercel.app/"
              target="_blank"
            >
              <FiMonitor size={30} />
            </Link>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}

export default Footer
