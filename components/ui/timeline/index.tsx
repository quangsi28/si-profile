import React from 'react';
import { FaAngleDown } from 'react-icons/fa';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import { Box, Heading, Text, useColorModeValue } from '@chakra-ui/react';

interface TimelineItem {
  date: string;
  title: string;
  subTitle: string;
  description: string;
}

interface Props {
  items: TimelineItem[];
}
const Timeline: React.FC<Props> = (props) => {
  const { items = [] } = props;

  const bg = useColorModeValue('gray.400', 'gray.700');
  const iconBg = useColorModeValue('gray.400', 'gray.700');
  const textColor = useColorModeValue('black', 'black');
  const dateColor = useColorModeValue('white', 'white');
  return (
    <VerticalTimeline>
      {items.map((item, index) => (
        <VerticalTimelineElement
          key={index}
          contentStyle={{ background: bg, color: 'white', shadow: '' }}
          date={
            <Box color={dateColor} m='0'>
              {item.date}
            </Box>
          }
          iconStyle={{ background: 'darkorange' }}
          icon={<FaAngleDown size='10' />}
        >
          <Heading color={textColor}>{item.title}</Heading>
          <Heading size='xs' color={textColor}>
            {item.subTitle}
          </Heading>
          <Text color={textColor}>{item.description}</Text>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};
export default Timeline;
