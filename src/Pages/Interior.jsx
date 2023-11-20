import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Box, Image, Link } from '@chakra-ui/react'

const Interior = () => {
  return (
    <>
      <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(200px, 1fr))' m={10}>
        <Box>
          <Image
            src='/images/interior.jpg'
            objectFit={'full'}
            boxSize={'full'}
            allbackSrc='https://via.placeholder.com/150'
          >
          </Image>
        </Box>
        <Card>
          <CardHeader>
            <Heading size='md' color={'beige'} display={'flex'} justifyContent={'flex-start'}>Interior renovations.</Heading>
          </CardHeader>
          <CardBody>
            <Text>Looking for a contractor to renovate your home? </Text>
          </CardBody>
          <CardFooter>
            <Button border={'1px'} borderColor={'beige'}>
              <Link href='interior-info'>
                More info
              </Link>
            </Button>
          </CardFooter>
        </Card>

        <Box>
          <Image
            src='/images/interior1.jpg'
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
            <Button border={'1px'} borderColor={'beige'}>
              <Link href='interior-photo-gallery'>
                View photos
              </Link>
            </Button>
          </CardFooter>
        </Card>


        <Box>
          <Image
            src='/images/sparks.jpg'
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
            <Button border={'1px'} borderColor={'beige'}>
              <Link href='contact'>
                Get an estimate.
              </Link>
            </Button>
          </CardFooter>
        </Card>
      </SimpleGrid>
    </>
  )
}

export default Interior