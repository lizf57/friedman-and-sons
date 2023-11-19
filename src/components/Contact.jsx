import { useState } from 'react'
import { FormControl, FormLabel, Input, Heading } from '@chakra-ui/react'

const Contact = () => {

  return (
    <>
      <FormControl m={1} p={8} isRequired>

        <Heading color={'beige'}>Contact Me:</Heading>

        <FormLabel color={'beige'} m={1}>Name:</FormLabel>
        <Input type='text' placeholder='First and Last name' m={1} borderColor={'lightBrown'} focusBorderColor={'lightBrown'}></Input>

        <FormLabel color={'beige'} m={1}>Email address:</FormLabel>
        <Input type='email' placeholder='Email address' m={1} borderColor={'lightBrown'} focusBorderColor={'lightBrown'} />

        <FormLabel color={'beige'} m={1}>Inquiry:</FormLabel>
        <Input type='text' placeholder='How can I help you?' m={1} borderColor={'lightBrown'} focusBorderColor={'lightBrown'}/>

      </FormControl>

    </>
  )
}

export default Contact