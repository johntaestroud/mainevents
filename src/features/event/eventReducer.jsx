import { createReducer } from '../../app/common/util/reducerUtil';
import { CREATE_EVENT, DELETE_EVENT, UPDATE_EVENT } from './eventConstants';


const initialState = [
  {
    id: '1',
    title: 'Trip to Tower of London',
    date: '2018-03-27',
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
    date: '2018-03-28',
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

export const createEvent = (state, payload) => {
  return [...state, Object.assign({}, payload.event)]
}

export const updateEvent = (state, payload) => {
  return [
    ...state.filter(event => event.id !== payload.event.id),
    Object.assign({}, payload.event)
  ]
}

export const deleteEvent = (state, payload) => {
    return [...state.filter(event => event.id !== payload.eventId)]
}

export default createReducer(initialState, {
  [CREATE_EVENT]: createEvent,
  [UPDATE_EVENT]: updateEvent,
  [DELETE_EVENT]: deleteEvent
})