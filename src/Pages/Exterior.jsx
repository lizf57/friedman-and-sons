import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Box, Image, Link } from '@chakra-ui/react'

const Exterior = () => {
  return (
    <>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' m={10}>
        <Card>
          <CardHeader>
            <Heading size='md' color={'beige'} display={'flex'} justifyContent={'flex-start'}>Outdoor Projects.</Heading>
          </CardHeader>
          <CardBody>
            <Text>Decks, </Text>
            <Text>Roofing,</Text>
            <Text>Siding,</Text>
            <Text>and more.</Text>
          </CardBody>
          <CardFooter>
            <Button bg={'beige'} color={'gray.600'}>
              <Link href='exterior-info'>
              More info.
              </Link>              
              </Button>
          </CardFooter>
        </Card>
        <Box>
          <Image
            src='/images/tools.jpg'
            objectFit={'full'}
            boxSize={'full'}
            allbackSrc='https://via.placeholder.com/150'
          >
          </Image>
        </Box>
        
        <Card>
          <CardHeader>
            <Heading size='md' color={'beige'} display={'flex'} justifyContent={'flex-start'}>Photo Gallery</Heading>
          </CardHeader>
          <CardBody>
            <Text>View photographs from past projects.</Text>
          </CardBody>
          <CardFooter>
            <Button bg={'beige'} color={'gray.600'}>
            <Link href='exterior-photo-gallery'>
              View photos
            </Link>
              </Button>
          </CardFooter>
        </Card>
        <Box>
          <Image
            src='/images/working.jpg'
            objectFit={'full'}
            boxSize={'full'}
            allbackSrc='https://via.placeholder.com/150'
          >
          </Image>
        </Box>

        <Card>
          <CardHeader>
            <Heading size='md' color={'beige'} display={'flex'} justifyContent={'flex-start'}> Get a quote. </Heading>
          </CardHeader>
          <CardBody>
            <Text>Let's discuss project ideas & get the best price for you.</Text>
          </CardBody>
          <CardFooter>
            <Button bg={'beige'} color={'gray.600'}>
              <Link href='contact'>
              Get an estimate.
              </Link>
              </Button>
          </CardFooter>
        </Card>

        <Box>
          <Image
            src='/images/darkbrick.jpg'
            objectFit={'full'}
            boxSize={'full'}
            allbackSrc='https://via.placeholder.com/150'
          >
          </Image>
        </Box>
      
      </SimpleGrid>
    </>
  )
}

export default Exterior