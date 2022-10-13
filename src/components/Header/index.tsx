import { Box, HStack } from '@chakra-ui/react'

import SizeSlider from './SizeSlider'
import SpeedSlider from './SpeedSlider'
import ActionButton from '../common/ActionButton/ActionButton'

function Header() {
  return (
    <Box h="10vh">
      <HStack h="100%" spacing={4} p={4}>
        {['Play', 'Generate New Array', 'Add Custom Array'].map(
          (text, index) => (
            <ActionButton key={index} btnText={text} />
          )
        )}
        <SizeSlider />
        <SpeedSlider />
      </HStack>
    </Box>
  )
}

export default Header
