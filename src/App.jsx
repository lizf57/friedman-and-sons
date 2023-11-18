import { Outlet } from 'react-router-dom'
import { mode } from '@chakra-ui/theme-tools'
import { ChakraProvider, ColorModeScript, extendTheme } from '@chakra-ui/react'

import Navbar from './components/Navbar'
import Footer from './components/Footer'

// adding global styles
const styles = {
	global: (props) => ({
		body: {
			color: mode('gray.900', 'whiteAlpha.900')(props),
			bg: mode('gray.200', '#000000')(props)
		}
	})
}

// setting default color scheme to dark
const config = {
	initialColorMode: 'dark',
	useSystemColorMode: true
}

// adding colors in theme
const colors = {
	lightGray: '#EDEDE9',
	beige: '#D6CCC2',
	tan: '#F5EBE0',
	darkTan: '#E3D5CA',
	lightBrown: '#D5BDAF'
}

const theme = extendTheme({ config, styles, colors })

const App = () => {
  return (
    <>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <Navbar />
          <Outlet />
        <Footer />
    </ChakraProvider>
    </>
  )
}

export default App