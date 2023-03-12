import { Box, Button, Grid, Img, SimpleGrid, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../Redux/Product/action";



export default function Allproducts(){
    const data = useSelector((state) => state.products)
  
    const dispatch = useDispatch();
  
    useEffect(()=> {
       dispatch(getData())
    },[])
    return (
        <SimpleGrid p='2rem' gridGap='4rem' columns={[1,2,3,4]} >

        {
            data && data.map((item) => <Grid boxShadow='rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px'  key={item.id}>
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
    )
}