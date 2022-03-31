import Link from 'next/link';
import React from 'react';

import { Box, Container, Flex, Heading, Icon, SimpleGrid } from '@chakra-ui/react';

import { ChakraLogo, NextJsLogo } from '../icons';

interface Props {}
const TechnologiesSection: React.FC<Props> = ({}) => {
  const techs = [
    {
      link: 'https://chakra-ui.com/',
      icon: <Icon boxSize='32' height='fit-content' as={ChakraLogo} />,
    },
    {
      link: 'https://nextjs.org/',
      icon: <Icon boxSize='20' height='fit-content' as={NextJsLogo} />,
    },
  ];

  return (
    <Box id='technologiesSection' p='20'>
      <Flex>
        <Box w='60%'>
          <Container>
            <Heading size='lg'>Technologies I used to build this portfolio</Heading>
          </Container>
        </Box>

        <SimpleGrid w='40%' flex='1' columns={3} spacing={10}>
          {techs.map((tech, index) => (
            <Box key={index} display="flex" alignItems='center'>
              <Link href={tech.link} passHref>
                <a target='_blank'>{tech.icon}</a>
              </Link>
            </Box>
          ))}
        </SimpleGrid>
      </Flex>
    </Box>
  );
};
export default TechnologiesSection;
