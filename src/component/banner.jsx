import { Box, Flex } from "@chakra-ui/react";

export default function Banner(){

    return(
        <Flex bgColor='#00abc5' w='45%' justifyContent='space-between' h='100%'>
                    <Box borderRadius='0% 40% 60% 40%' w='60%' h='40%' bgColor='#0189a3'></Box>
                    <Box borderRadius='60% 40% 0% 40%' w='60%' bgColor='#0189a3' alignSelf='end' h='40%'></Box>
       </Flex>
    )
}