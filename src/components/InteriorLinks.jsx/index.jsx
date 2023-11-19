import { SimpleGrid, Image, Button, Link, Box } from '@chakra-ui/react'

const InteriorLinks = () => {

  const images = [
    {
      imgPath: '/images/interior/IMG_7210.jpeg'
    },
    {
      imgPath: '/images/interior/IMG_7211.jpeg'
    },
    {
      imgPath: '/images/interior/IMG_7210.jpeg'
    },
    {
      imgPath: '/images/interior/IMG_7211.jpeg'
    },
    {
      imgPath: '/images/interior/IMG_7210.jpeg'
    },
    {
      imgPath: '/images/interior/IMG_7211.jpeg'
    }
  ]

  return (
    <>
      <SimpleGrid minChildWidth='200px' gap={5} m={5}>

        {images.map(image => {
          return (
            <Image
              src={image.imgPath} alt={'image'}>
            </Image>
          )
        })}
      </SimpleGrid>
      <Box m={5} p={2}>
        <Button pl={4} pr={4} border={'1px'} borderColor={'beige'}>
          <Link href='interior' >
            Go Back
          </Link>
        </Button>
      </Box>
    </>
  )
}

export default InteriorLinks