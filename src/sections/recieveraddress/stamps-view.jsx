import React from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Timeline from '@mui/lab/Timeline';
import { TimelineConnector } from '@mui/lab';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import CardHeader from '@mui/material/CardHeader';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';

const staticItemList = [
    { title: "Sender's Address", type: 'saddress' },
    { title: "Receiver's Address", type: 'raddress' },
    { title: 'Consignment Details', type: 'condetails' },
    { title: 'Piece Details', type: 'piedetails' },
    { title: 'Declaration', type: 'declaration' },
    { title: 'Print Receipt', type: 'receipt' },
  ];
  
  export default function StaticTimeline() {
    return (
      <Card>
        <CardHeader title="Progress" subheader="You are here" />
        <Timeline
          sx={{
            m: 0,
            p: 3,
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {staticItemList.map((item, index) => (
            <OrderItem key={index} item={item} lastTimeline={index === staticItemList.length - 1} />
          ))}
        </Timeline>
      </Card>
    );
  }
  
  function OrderItem({ item, lastTimeline }) {
    const { title, type } = item;
    return (
      <TimelineItem>
        <TimelineSeparator>
          <TimelineDot color={getColorByType(type)} />
          {lastTimeline ? null : <TimelineConnector />}
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="subtitle2">{title}</Typography>
        </TimelineContent>
      </TimelineItem>
    );
  }
  
  function getColorByType(type) {
    switch (type) {
      case 'saddress':
      return 'success';
      case 'raddress':
        return 'primary';
      case 'details':
        return 'inherit';
      case 'declaration':
        return 'inherit';
      case 'receipt':
        return 'inherit';
      default:
        return 'inherit';
    }
  }
  
  OrderItem.propTypes = {
    item: PropTypes.shape({
      title: PropTypes.string,
      type: PropTypes.string,
    }),
    lastTimeline: PropTypes.bool,
  };