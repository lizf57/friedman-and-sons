import { SimpleGrid, Image, Button, Link, Box } from '@chakra-ui/react'

const ExteriorLinks = () => {

  const images = [
    {
      imgPath: '/images/multicolor-bricks.jpg'
    },
    {
      imgPath: '/images/multicolor-bricks.jpg'
    },
    {
      imgPath: '/images/multicolor-bricks.jpg'
    },
    {
      imgPath: '/images/multicolor-bricks.jpg'
    },
    {
      imgPath: '/images/multicolor-bricks.jpg'
    },
    {
      imgPath: '/images/multicolor-bricks.jpg'
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
          <Link href='exterior'>
            Go Back
          </Link>
        </Button>
      </Box>
    </>
  )
}

export default ExteriorLinks