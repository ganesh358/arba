import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, FormControl, Grid, Input, InputGroup, InputRightElement, Link, SimpleGrid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import Banner from "../component/banner";



export default function Signuppage(){
    const [show, setShow] = React.useState(false);
    const [show1, setShow1] = React.useState(false);
    const [username, SetUser] = useState("")
    const [password, setPassword] = useState("")
    const [email,setEmail] = useState("")
    const [conf,SetConf] = useState("");
    const [name,setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(username)
        console.log(password)
    }

    const handleClick = () => setShow(!show)
    const handleClick1 = () => setShow1(!show1)

    return (
        <SimpleGrid h='45rem'>
            <Flex h='100%' >
                <Banner/>
                <Grid justifyItems='center' pt='4rem' h='80%' w='50%' >
                    <Grid pr='1rem' h='5rem' justifyItems='center'>
                        <Box bgColor='#00abc5' w='4rem' h='4rem' borderRadius='50%' ></Box>
                        <Text fontWeight='600' fontSize='2xl' textAlign='center'>APP NAME</Text>

                    </Grid>
                    <Box mt='1.5rem'>
                        <Text w='20rem' >Lorem, ipsum dolor sit amet consectetur </Text>
                        <Text textAlign='center'>adipisicing elit.</Text>
                    </Box>
                    <form onSubmit={handleSubmit}>
                        <FormControl isRequired  w='20rem'>

                            <Input variant='flushed' borderBottom='1px solid #00abc5' mt='1' placeholder='Username' onChange={(e) => SetUser(e.target.value)} />
                            <Input variant='flushed' borderBottom='1px solid #00abc5' mt='1' placeholder='Fullname' onChange={(e) => setName(e.target.value)} />
                            <Input variant='flushed' borderBottom='1px solid #00abc5' mt='1' placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
                            <InputGroup size='md' mt='1'>
                                <Input
                                    variant='flushed'
                                    borderBottom='1px solid #00abc5'
                           
                                    type={show ? 'text' : 'password'}
                                    placeholder='Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button color='#00abc5' _hover={{ background: "white" }} bgColor='white' h='1.75rem' size='sm' onClick={handleClick}>
                                        {show ? <ViewIcon /> : <ViewOffIcon />}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                            <InputGroup size='md' mt='1'>
                                <Input
                                    variant='flushed'
                                    borderBottom='1px solid #00abc5'
                                  
                                    type={show1 ? 'text' : 'password'}
                                    placeholder='Confirm password'
                                    onChange={(e) => SetConf(e.target.value)}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button color='#00abc5' _hover={{ background: "white" }} bgColor='white' h='1.75rem' size='sm' onClick={handleClick1}>
                                        {show1 ? <ViewIcon /> : <ViewOffIcon />}
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
                            Register
                        </Button>
                    </form>
                    <Text w='20rem' >Already have an account? <Link color='#00abc5' href='/'>Login</Link></Text>
                </Grid>
            </Flex>
        </SimpleGrid>
    )
}
  