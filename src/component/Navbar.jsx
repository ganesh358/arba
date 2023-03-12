import { Box, Button, Flex, Img } from "@chakra-ui/react";
import { useState } from "react";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
  } from '@chakra-ui/react'

import {FaShoppingCart} from "react-icons/fa"

export default function Navbar({setToken}){
  

    const Logout = ()=> {
         setToken("");
         localStorage.clear()

    }

    return (
        <Flex p='2rem' justifyContent="space-between" alignItems='center'>
            <Box h='2rem' w='4rem' color='white' bgColor='#00abc5'>Logo</Box>
            <Flex  alignItems='center' color='#00abc5' fontSize='2xl' gap='2rem'>
                <FaShoppingCart/>
            <Menu>
        <MenuButton _hover='none' bgColor='white' as={Button}>
           <Img w='2rem' borderRadius='50%' src="data:image/png;base64,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"/>
        </MenuButton>
        <MenuList fontSize='1rem' color='#00abc5'>
            <MenuItem onClick={()=> Logout()}>Logout</MenuItem>
            <MenuItem>Profile</MenuItem>
            <MenuItem>Coding Challenge</MenuItem>
        </MenuList>
        </Menu>
            </Flex>
           
         
        </Flex>
    )
}