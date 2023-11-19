import { SimpleGrid, Image, Button, Link, Box } from '@chakra-ui/react'

const HomesLinks = () => {

  const images = [
    {
      imgPath: '/images/homes/IMG_7972.jpeg'
    },
    {
      imgPath: '/images/homes/IMG_8111.jpeg'
    },
    {
      imgPath: '/images/homes/IMG_7972.jpeg'
    },
    {
      imgPath: '/images/homes/IMG_8111.jpeg'
    },
    {
      imgPath: '/images/homes/IMG_7972.jpeg'
    },
    {
      imgPath: '/images/homes/IMG_8111.jpeg'
    },
    {
      imgPath: '/images/homes/IMG_7972.jpeg'
    },
    {
      imgPath: '/images/homes/IMG_8111.jpeg'
    },
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
          <Link href='homes' >
            Go Back
          </Link>
        </Button>
      </Box>
    </>
  )
}


export default HomesLinks