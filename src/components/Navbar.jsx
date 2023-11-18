import React from 'react'
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, Flex } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
      <Flex justifyContent={'space-around'} w={'full'} >
      <Breadcrumb separator=' ' w={'full'} bg={'lightBrown'} pt={10} minH={'10vh'}>
        <BreadcrumbItem >
          <BreadcrumbLink href='/' mx={10} fontSize={'lg'}>Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
          <BreadcrumbLink href='services' mx={10} fontSize={'lg'}>Services</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem >
          <BreadcrumbLink href='contact' mx={10} fontSize={'lg'}>Contact</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
      </Flex>

    </>
  )
}

export default Navbar