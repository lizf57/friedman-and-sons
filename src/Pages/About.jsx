import {Card, CardBody, Stack, Heading, Divider, Text} from '@chakra-ui/react'

const About = () => {
  
  return (
    <div className='hero'>
       <Card maxW='md'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='lg' color={'beige'}>Our Purpose</Heading>
                        <Divider />
                        <Text >
                            Motivation. Mission statement. How we got started. 
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
    </div>
    
  )
}

export default About

