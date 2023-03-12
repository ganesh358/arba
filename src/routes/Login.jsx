import {Box, Button, Flex, FormControl, Grid, Input, InputGroup, InputRightElement,SimpleGrid, Text ,Link} from "@chakra-ui/react";
import React, { useState } from "react";
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons'
import Banner from "../component/banner";
import axios from "axios"



export default function Loginpage({token,setToken}) {
    const [show, setShow] = React.useState(false);
    const [username1, SetUser] = useState("")
    const [password1, setPassword] = useState("")
   

    const handleSubmit = (event) => {
        event.preventDefault()
        setPassword("")
        SetUser("")
        console.log(username1,password1)
       axios({
        url :"https://fakestoreapi.com/auth/login",
        method:"POST",
        data:{
            username : username1,
            password : password1
        },

       }).then(res => {
        console.log(res.data.token);
         setToken(res.data.token);
         localStorage.setItem("userToken",res.data.token)
       })
      .catch((err) => {
        console.log(err)
      })
    }
  

    const handleClick = () => setShow(!show)


    return (
        <SimpleGrid h='45rem'>
            <Flex h='100%' >
                <Banner/>
                <Grid justifyItems='center' pt='4rem' h='80%' w='50%' >
                    <Grid pr='1rem' h='5rem' justifyItems='center'>
                        <Box bgColor='#00abc5' w='4rem' h='4rem' borderRadius='50%' ></Box>
                        <Text fontWeight='600' fontSize='2xl' textAlign='center'>APP NAME</Text>

                    </Grid>
                    <Box>
                        <Text w='20rem' >Lorem, ipsum dolor sit amet consectetur </Text>
                        <Text textAlign='center'>adipisicing elit.</Text>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired >

                            <Input variant='flushed' borderBottom='1px solid #00abc5' mt='1' placeholder='Username' value={username1} onChange={(e) => SetUser(e.target.value)} />
                            
                            <InputGroup size='md'>
                                <Input
                                    variant='flushed'
                                    borderBottom='1px solid #00abc5'
                                    mt='2rem'
                                    type={show ? 'text' : 'password'}
                                    placeholder='Password'
                                    value={password1}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button color='#00abc5' mt='4rem' _hover={{ background: "white" }} bgColor='white' h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            
                        </FormControl>
                        <Button
                            _hover='none'
                            w='20rem'
                            h='2rem'
                            mt='2.5rem'
                            bgColor='#00abc5'
                            color='white'
                            type='submit'
                        >
                            Login
                        </Button>
                    </form>
                    <Text w='20rem' >Don't have an account? <Link color='#00abc5' href='/signup'>SignUp</Link></Text>
                </Grid>
            </Flex>
        </SimpleGrid>
    )
}