// import './footer.css' 
import { Flex, Text, Link, Stack } from '@chakra-ui/react'

const Footer = () => {

  return (
    <>
      <Stack w={'full'} bg={'lightBrown'} pt={10} minH={'10vh'}>

        <Flex justifyContent={'space-around'} w={'full'} >
          <Link mx={10} fontSize={'lg'} href='about'>about</Link>
          <Link mx={10} fontSize={'lg'} href='developers'>developers</Link>
          <Link mx={10} fontSize={'lg'} href='careers'>careers</Link>
        </Flex>

        <Flex justifyContent={'center'} w={'full'}>
          <Text my={7}>&copy; 2023 Friedman & Sons, LLC. All rights reserved.</Text>
        </Flex>

      </Stack>
    </>
  )
}

export default Footer