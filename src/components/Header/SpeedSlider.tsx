import { useState } from 'react'
import {
  HStack,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Tooltip,
  Text
} from '@chakra-ui/react'
function SpeedSlider() {
  const [sliderValue, setSliderValue] = useState(10)
  const [showTooltip, setShowTooltip] = useState(false)

  return (
    <HStack spacing={3}>
      <Text fontSize="md">Speed</Text>
      <Slider
        aria-label="slider-ex-1"
        defaultValue={10}
        min={10}
        max={300}
        w="150px"
        onChange={val => setSliderValue(val)}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <SliderTrack bg="#ccc5b9">
          <SliderFilledTrack bg="#eb5e28" />
        </SliderTrack>
        <Tooltip
          hasArrow
          bg="#403d39"
          color="white"
          placement="top"
          isOpen={showTooltip}
          label={`${sliderValue} ticks/sec`}
        >
          <SliderThumb />
        </Tooltip>
      </Slider>
    </HStack>
  )
}

export default SpeedSlider
