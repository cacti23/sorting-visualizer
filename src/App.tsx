import { ChakraProvider, Box, HStack, VStack } from '@chakra-ui/react'
import theme from './theme'
import Header from './components/Header'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box w="100%" h="100%" sx={{ backgroundColor: '#fffcf2' }}>
        <VStack align="stretch" spacing={0}>
          <Header />

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
