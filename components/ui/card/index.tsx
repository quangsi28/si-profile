import React from 'react';

import { Box, useColorModeValue } from '@chakra-ui/react';

interface Props {}
const Card: React.FC<Props> = (props) => {
  const { children, ...rest } = props;
  const bg = useColorModeValue('white', 'gray.700');
  console.log(bg);

  return (
    <Box
      rounded='lg'
      display='flex'
      flexDirection='column'
      justifyContent='start'
      overflow='hidden'
      shadow='base'
      bg={bg}
    >
      {children}
    </Box>
  );
};
export default Card;
