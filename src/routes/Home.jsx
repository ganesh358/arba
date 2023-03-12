import { Box, Button, Flex, Grid, Img, SimpleGrid, Text } from "@chakra-ui/react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {useDispatch, useSelector} from "react-redux"
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import { handleError, handleLoading, storeData ,getData} from "../Redux/Product/action";
import { Link } from "react-router-dom";


export default function Homepage(){
  const data = useSelector((state) => state.products)
  
  const dispatch = useDispatch();

  useEffect(()=> {
     dispatch(getData())
  },[])
 
   

 console.log(data)
    return (
        <SimpleGrid>
            <Box p='5rem'> 
            <Carousel>
                <Box>
                    <Img h='20rem' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR__iMl-OKN6ximKZX6CbfIsizEJUWQI2p43A&usqp=CAU" />
                </Box>
                <Box>
                    <Img h='20rem' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJziXpURihQdTnQLsot6Elpj2Mxm37-UQPJA&usqp=CAU"/>
                </Box>
                <Box>
                    <Img h='20rem' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM2iD1_hngVPIhgO-B9VtYjHpgLLuxflKElw&usqp=CAU" />
                </Box>
            </Carousel>
            </Box>
           
           <Text pl='5rem' fontWeight='bold'>Products</Text>

           <SimpleGrid p='2rem' gridGap='4rem' columns={[1,2,3,4]} >

            {
                data && data.filter((item, idx) => idx < 8).map((item) => <Grid boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'  key={item.id}>
                      <Box display='flex'  justifyContent='center' objectFit='cover' h='9rem'>
                        <Img w='100%' h='9rem' src={item.image}/>
                      </Box>
                      <Box mt='-5rem' p='2rem' >
                      <Box  bgColor='white' p='.5rem' h='auto' boxShadow='rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'>
                        <Text fontWeight='bold'>{item.title}</Text>
                        <Text fontSize='1rem'>Lorem ipsum dolor sit amet.</Text>
                        <Text color='#00abc5'>{`Rs. ${item.price}`}</Text>
                        <Button color='white' bgColor='#00abc5'>Add to cart</Button>
                      </Box>
                      </Box>
                </Grid>)
            }
           
           </SimpleGrid>
           <Flex p='2rem' justifyContent='flex-end'>
           <Link to='/all'>
           <Button _hover='none' color='white' bgColor='#00abc5'>All Products>></Button>
           </Link>
           </Flex>
        </SimpleGrid>
    )
}