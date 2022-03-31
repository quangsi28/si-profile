import React from 'react';

import { Box, Button, useColorModeValue, VStack } from '@chakra-ui/react';

interface Props {
  items: any[];
}
const FloatMenu: React.FC<Props> = (props) => {
  const { items, children, ...rest } = props;
  const bg = useColorModeValue('gray.300', 'gray.700');
  return (
    <Box pos='fixed' top='30%' right='0' p='2' bg={bg} roundedLeft='lg'>
      <VStack>
        {items.map((item, index) => (
          <Button key={index} onClick={item.onClick} size='sm'>
            {item.icon}
          </Button>
        ))}
      </VStack>
    </Box>
  );
};
export default FloatMenu;
