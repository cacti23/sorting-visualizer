import { ChakraProvider, Box, HStack, VStack } from '@chakra-ui/react'

function App() {
  return (
    <ChakraProvider>
      <Box w="100%" h="100%">
        <VStack align="stretch" spacing={0}>
          <Box h="10vh" sx={{ border: '1px solid black' }}>
            Header
          </Box>
          <HStack spacing={0}>
            <Box sx={{ border: '1px solid black' }} h="80vh" w="30vw">
              Sidebar
            </Box>
            <Box sx={{ border: '1px solid black' }} h="80vh" w="70vw">
              Content
            </Box>
          </HStack>
          <Box h="10vh" sx={{ border: '1px solid black' }}>
            Footer
          </Box>
        </VStack>
        <HStack></HStack>
      </Box>
    </ChakraProvider>
  )
}
export default App
