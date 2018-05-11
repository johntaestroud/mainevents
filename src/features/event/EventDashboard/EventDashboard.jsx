import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../EventList/EventList';
import EventForm from '../EventForm/EventForm';

const eventsDashboard = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27T11:00:00+00:00',
    category: 'culture',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: "Tower of London, St Katharine's & Wapping, London",
    hostedBy: 'Yu Yan',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/27.jpg',
    attendees: [
      {
        id: 'a',
        name: 'Yu Yan',
        photoURL: 'https://randomuser.me/api/portraits/women/27.jpg'
      },
      {
        id: 'b',
        name: 'Hui Yin',
        photoURL: 'https://randomuser.me/api/portraits/women/48.jpg'
      }
    ]
  },
  {
    id: '2',
    title: 'Trip to Punch and Judy Pub',
    date: '2018-03-28T14:00:00+00:00',
    category: 'drinks',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin ligula eu leo tincidunt, quis scelerisque magna dapibus. Sed eget ipsum vel arcu vehicula ullamcorper.',
    city: 'London, UK',
    venue: 'Punch & Judy, Henrietta Street, London, UK',
    hostedBy: 'Hui Yin',
    hostPhotoURL: 'https://randomuser.me/api/portraits/women/48.jpg',
    attendees: [
      {
        id: 'b',
        name: 'Hui Yin',
        photoURL: 'https://randomuser.me/api/portraits/women/48.jpg'
      },
      {
        id: 'a',
        name: 'Yu Yan',
        photoURL: 'https://randomuser.me/api/portraits/women/27.jpg'
      }
    ]
  }
]


class EventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={eventsDashboard} />
        </Grid.Column>
        <Grid.Column width={6}>
        <Button primary content='Create Event'/>
          <EventForm/>
        </Grid.Column>
      </Grid>
    )
  }
}

export default EventDashboard 