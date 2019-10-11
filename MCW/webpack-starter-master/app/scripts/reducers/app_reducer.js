import Location from "../components/location.js";
import getArtistTracks from "../actions/get_artist_tracks.js";

export default function AppReducer(state, action) {
  if (state === undefined) {
    return {
      events: [
        // {
        // eventInfo: {
        //   venue: artist.venue.displayName
        //   date: artist.start.date
        //   time: artist.start.time
        //  artists: [
        //     musicianName: artistName (get_events);
        //     musicianID: artistId;
        //     songObj = {
        //       songName: string, // song name
        //       songSrc: string, // song source address
        //    }]
       //  } ]
        //
        // }
      ],
      loading: false,
    };
  }

  switch (action.type) {

    case "ENTER_LOADING":
      return Object.assign({}, state, { loading: true })

    case "LEAVE_LOADING":
      return Object.assign({}, state, { loading: false })

    case "STORE_EVENTS":
      let newEvents = state.events.slice();
      return Object.assign({}, state, {
        events: newEvents.concat(action.events)
      })

    case "LOCATION_INPUT":
      return Object.assign({}, state, {
      });

    case "STORE_SOUNDCLIPS":
      let artistsWithTracks = state.events.slice();
      artistsWithTracks = artistsWithTracks.map((concert) => {
      concert.artists = concert.artists.map((artist) => {
          if (artist.musicianID === action.artistId) {
            console.log(artist.musicianID, "ACTION", action.soundclips);
            return Object.assign({}, artist, {
              tracks: action.soundclips
            });
          } else {
            return artist;
          }
        })
        return concert;
      })

      return Object.assign({}, state, {
        events: artistsWithTracks
      });

    case "MUSICIAN_INFO":
      var newEvents = state.events.slice();
      newEvents = newEvents.map((concert) => {
        if (concert.id === action.event.id) {
          let newArtists = concert.artists.slice();
          newArtists.push(action.artistTracks);
          return Object.assign({}, concert, {
            artists: newArtists
          });
        } else {
          return concert;
        }
      })

      return Object.assign({}, state, {
        events: newEvents
      });
  }

  console.log("Unhandled State!");
  return state;
}
