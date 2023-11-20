// import './footer.css' 
import { Flex, Text, Link, Stack} from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {

  return (
    <>
      <Stack w={'full'} bg={'beige'} pt={10}>

        <Flex justifyContent={'center'} w={'full'} >
          <Link mx={8} fontSize={'md'} href='about'>about</Link>
          <Link mx={8} fontSize={'md'} href='contact'>contact</Link>
          <Link mx={8} fontSize={'md'} href='careers'>careers</Link>
          <Link href='https://facebook.com' mx={8} target='_blank' >
            <FontAwesomeIcon icon={faFacebook} size={'lg'} cursor={'pointer'} />
          </Link>
          <Link href='https://linkedin.com' mx={8} target='_blank'>
            <FontAwesomeIcon icon={faLinkedin} size={'lg'} cursor={'pointer'}/>
          </Link>
        </Flex>

        <Flex justifyContent={'center'} w={'full'}>

          <Text my={7} fontSize={'small'}>&copy; 2023 Friedman & Sons, LLC. All rights reserved.</Text>
        </Flex>

      </Stack>
    </>
  )
}

export default Footer