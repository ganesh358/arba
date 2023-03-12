import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import AllRoutes from './routes/AllRoutes';


function App() {
  return (
    <ChakraProvider theme={theme}>
     
      
          {/* <ColorModeSwitcher justifySelf="flex-end" /> */}
        
          <AllRoutes/>
         
      
    
    </ChakraProvider>
  );
}

export default App;
