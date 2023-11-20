import React from 'react'
import { Breadcrumb, BreadcrumbItem, Flex, Link, Image, Text, useColorMode, Button, Box, Divider} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const Header = () => {

  const { colorMode, toggleColorMode } = useColorMode()

  const [showServices, setShowServices] = useState(false)
  const handleToggleServices = () => setShowServices(!showServices)

  return (
    <>

      <Flex justifyContent={'space-around'} w={'full'} align={'center'}>

        <Breadcrumb separator=' ' w={'full'} bg={'beige'} pt={10} minH={'10vh'}>
          {/* logo and home link */}
        
            <Flex ml={8} mr={5}fontSize={'lg'}>
              <Link href="/">
                <Image
                  cursor='pointer'
                  boxSize='55px'
                  objectFit={'cover'}
                  boxShadow={'1px 1px 1px black'}
                  alt='construction logo'
                  src='/images/logo-light.png'
                />
              </Link>
            </Flex>
            <Text fontSize={'xxx-large'} m={0} textShadow={'1px 1px 1px black'} fontFamily={'serif'}>
              <h1> Friedman & Sons, LLC </h1>
            </Text>

          <Box flex={1} />

          {/* services button */}
          <Button
            onClick={handleToggleServices}
            bg={'lightBrown'}
            border={'1px'}
            borderColor={'lightGray'}
            m={1}
            pl={9}
            pr={9}
          >
            Services
          </Button>

          {/* response services links */}
          {showServices && (
            <Flex
              direction={'column'}
              align={'center'}
              m={4} bg={'darkTan'}
              p={4}
              rounded={10}
              fontSize={'md'}
              gap={'5px'}
            >
              <Link href='homes'>Homes</Link>
              <Divider borderColor={'white'} />
              <Link href='interior'>Interior</Link>
              <Divider borderColor={'white'} />
              <Link href='exterior'>Exterior</Link>
            </Flex>
          )}

          {/* light and dark mode */}
          <Flex align={'center'}>
            
            <BreadcrumbItem m={10} gap={5}>

              <Flex>
                {colorMode === 'dark' ?
                  <FontAwesomeIcon m={8} icon={faSun} style={{ color: 'white' }} size={'lg'} cursor={'pointer'} onClick={toggleColorMode} /> : <FontAwesomeIcon m={8} icon={faMoon} style={{ color: 'black' }} size={'lg'} cursor={'pointer'} onClick={toggleColorMode} />}
              </Flex>

            </BreadcrumbItem>
          </Flex>

         
        </Breadcrumb>
      </Flex>
    </>
  )
}

export default Header