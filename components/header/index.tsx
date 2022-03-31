import React from 'react';

import { Box, Flex, Spacer, useColorMode } from '@chakra-ui/react';

import styles from './styles.module.css';

interface Props {}
const Header: React.FC<Props> = ({}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex className={styles.headerContainer}>
      <Box p='4'>Si profile</Box>
      <Spacer />
      <Box p='4'>
       
      </Box>
    </Flex>
  );
};
export default Header;
