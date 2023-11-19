import { Card, CardBody, Image, Stack, Heading, Text, Divider, CardFooter, ButtonGroup, Button, Wrap } from '@chakra-ui/react'
const Careers = () => {
    return (
        <Wrap m={5}>

            <Card maxW='md'>
                <CardBody>
                    <Image
                        src='/images/tools2.jpg'
                        alt='Green double couch with wooden legs'
                        borderRadius='md'
                    />
                </CardBody>
            </Card>
            <Card maxW='md'>
                <CardBody>
                    <Stack mt='6' spacing='3'>
                        <Heading size='md' color={'beige'}>Job Openings</Heading>
                        <Divider />
                        <Text>
                            Thank you for your interest. Unfortunately, we are not hiring at the moment. Please check back another time, or contact us directly.
                        </Text>
                    </Stack>
                </CardBody>
            </Card>
        </Wrap>

    )
}

export default Careers