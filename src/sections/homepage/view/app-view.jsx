import { faker } from '@faker-js/faker';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import AppTasks from '../app-tasks';
import AppNewsUpdate from '../app-news-update';
import AppOrderTimeline from '../app-order-timeline';
import AppCurrentVisits from '../app-current-visits';
import AppWebsiteVisits from '../app-website-visits';
import AppWidgetSummary from '../app-widget-summary';
import AppConversionRates from '../app-conversion-rates';

// ----------------------------------------------------------------------

export default function Homepage() {
  return (
    <Container maxWidth="xl">
      <Typography variant="h4" sx={{ mb: 5 }}>
        Your Summary
      </Typography>

      <Grid container spacing={3}>
        <Grid xs={12} sm={6} md={3.5}>
          <AppWidgetSummary
            title="PO induction pending"
            total={714000}
            color="success"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_bag.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3.5}>
          <AppWidgetSummary
            title="In transit"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3.5}>
          <AppWidgetSummary
            title="Under process @ Customs"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3.5}>
          <AppWidgetSummary
            title="Customs cleared"
            total={234}
            color="error"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_message.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3.5}>
          <AppWidgetSummary
            title="Customs detained"
            total={1352831}
            color="info"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_users.png" />}
          />
        </Grid>

        <Grid xs={12} sm={6} md={3.5}>
          <AppWidgetSummary
            title="Despatched out of India"
            total={1723315}
            color="warning"
            icon={<img alt="icon" src="/assets/icons/glass/ic_glass_buy.png" />}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppWebsiteVisits
            title="Export Frequency"
            subheader="Group by Month"
            chart={{
              labels: [
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ],
              series: [
                {
                  name: 'Histogram',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },

                {
                  name: 'Line Graph',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppCurrentVisits
            title="Types of Consignment"
            chart={{
              series: [
                { label: 'International EMS Merchandise', value: 4344 },
                { label: 'International EMS Document', value: 5435 },
                { label: 'International Regd. Small Packet', value: 1443 },
                { label: 'International Air Parcel', value: 4443 },
                { label: 'International RegdL. Letter', value: 4443 },
                { label: 'International Tracked Packet Service', value: 4443 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppConversionRates
            title="Consignment Exports"
            subheader="Group by Continents"
            chart={{
              series: [
                { label: 'North America', value: 320 },
                { label: 'Asia', value: 430 },
                { label: 'Europe', value: 448 },
                { label: 'Africa', value: 470 },
                { label: 'South America', value: 540 },
                { label: 'Australia', value: 350 },
              ],
            }}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppNewsUpdate
            title="History"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: faker.person.jobTitle(),
              description: faker.commerce.productDescription(),
              image: `/assets/images/covers/cover_${index + 1}.jpg`,
              postedAt: faker.date.recent(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={4}>
          <AppOrderTimeline
            title="Order Timeline"
            list={[...Array(5)].map((_, index) => ({
              id: faker.string.uuid(),
              title: [
                'Order has been placed',
                'Order #37745 from September',
                'Order has been Shipped',
                'Order reached its nearest destination',
                'New order placed #XF-2346',
              ][index],
              type: `order${index + 1}`,
              time: faker.date.past(),
            }))}
          />
        </Grid>

        <Grid xs={12} md={6} lg={8}>
          <AppTasks
            title="Tasks"
            list={[
              { id: '1', name: 'Set up infrastructure and staff for Dak Ghar Niryat Kendra.' },
              { id: '2', name: 'Launch a pilot program in select post offices.' },
              { id: '3', name: 'Expand the program gradually to more post offices.' },
              { id: '4', name: 'Continuously improve services based on user feedback.' },
              { id: '5', name: 'Enhance team expertise and performance as needed.' },
            ]}
          />
        </Grid>
      </Grid>
    </Container>
  );
}
