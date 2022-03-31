import React from 'react';

import { AspectRatio, Box, Center, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react';

import { UiCard } from '../ui';

interface Props {}
const ProjectsSection: React.FC<Props> = ({}) => {
  const projectData = [
    {
      image: 'https://picsum.photos/400/300?v=1',
      link: '',
      name: 'First Project',
      description: 'This is the first project',
    },
    {
      image: 'https://picsum.photos/400/300?v=2',
      link: '',
      name: 'First Project',
      description: 'This is the first project',
    },
    {
      image: 'https://picsum.photos/400/300?v=3',
      link: '',
      name: 'First Project',
      description: 'This is the first project',
    }
  ];
  return (
    <Box id='projectsSection' px={4} py={20}>
      <Center>
        <SimpleGrid columns={3} spacing={10} my='4' mx='20' w='full'>
          {projectData.map((project, index) => (
            <UiCard key={index}>
              <AspectRatio ratio={4 / 2} width='full'>
                <Image alt={project.name} src={project.image} />
              </AspectRatio>
              <Box m='4' w='full' alignItems='start'>
                <Heading size='sm'>{project.name}</Heading>
                <Text fontSize='xs'>{project.description}</Text>
              </Box>
            </UiCard>
          ))}
        </SimpleGrid>
      </Center>
    </Box>
  );
};
export default ProjectsSection;
