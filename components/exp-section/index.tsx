import 'react-vertical-timeline-component/style.min.css';

import React from 'react';

import { Box, Divider, Heading, Text, VStack } from '@chakra-ui/react';

import { UiTimeline } from '../ui';

interface Props {}

const ExpSection: React.FC<Props> = ({}) => {
  const timelineItems = [
    {
      date: '2017',
      title: 'FPT Software',
      subTitle: 'Hanoi',
      description: 'Add description',
    },
    {
      date: '2019',
      title: 'F99',
      subTitle: 'Hanoi',
      description: 'Add description',
    },
    {
      date: '2020-present',
      title: 'Selly',
      subTitle: 'Hanoi',
      description: 'Add description',
    },
  ];
  return (
    <Box id='experiencesSection' px={4} py={20} bg='gray.700' display='flex' flexDirection='column' alignItems='center'>
      <VStack>
        <Heading color='white'>Experiences</Heading>
        <Text color='white'>More detail about job</Text>
      </VStack>
      <Divider mt='2' height='1px' w='300px' opacity='1' background='white' />
      <UiTimeline items={timelineItems} />
    </Box>
  );
};
export default ExpSection;
