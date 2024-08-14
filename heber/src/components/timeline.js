import React from 'react';
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@mui/lab';
import {Typography, Box} from '@mui/material';

function TimeLine() {
  const events = [
    { date: 'April 2023', title: 'Incorporated 🧗‍♂️', description: 'The journey began to bring the taste of Ethiopia to an international market' },
    { date: 'June 2023', title: 'Construction 🚧', description: 'Construction commenced. An eleven month operation in total.' },
    { date: 'January 2024', title: 'Finding Suppliers 🔍', description: 'Secured supplier relationships that aligned with our values of emphasizing sustainability.' },
    { date: 'March 2024', title: 'Official Launch 🏁', description: 'Official launch of our first brick and mortar in Falls Church, Virginia.' },
    { date: 'June 2024', title: 'Restaurant Addition 🍽️', description: 'Expanded our market & cafe to include a fully operational restaurant serving East African cuisines.' },
  ];

  return (
    <Box sx={{ p: 3}}>
      <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', fontFamily: "'Montserrat', serif" }}>
        Timeline
      </Typography>
      <Timeline position="alternate">
        {events.map((event, index) => (
          <TimelineItem key={index}>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                {event.date}
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot />
              {index < events.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <Typography variant="h6" component="span">
                {event.title}
              </Typography>
              <Typography>{event.description}</Typography>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Box>
  );
}

export default TimeLine;
