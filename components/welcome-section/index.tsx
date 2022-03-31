import Link from 'next/link';
import React from 'react';

import { Box, Button, Heading, HStack, Stack, Text, VStack } from '@chakra-ui/react';

interface Props {}
const WelcomeSection: React.FC<Props> = ({}) => {
  const menus = [
    {
      path: '#projectsSection',
      name: 'Projects',
    },
    {
      path: '#experiencesSection',
      name: 'Experiences',
    },
    {
      path: '#technologiesSection',
      name: 'Technologies',
    },
  ];
  return (
    <Box p='5' py='20'>
      <Stack spacing={4} align='center'>
        <VStack align='center'>
          <Heading size='3xl' textAlign='center'>
            Welcome to my profile
          </Heading>
          <Text>Discover more below</Text>
        </VStack>
        <HStack>
          {menus.map((menu, index) => (
            <Link key={index} href={menu.path} passHref>
              <Button>{menu.name}</Button>
            </Link>
          ))}
        </HStack>
      </Stack>
    </Box>
  );
};
export default WelcomeSection;
