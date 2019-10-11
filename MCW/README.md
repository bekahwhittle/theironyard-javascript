# MCW
Music Capital of the World

# About

A simple application that streams music events near you and renders a Spotify clip of the artist's music before deciding to purchase the ticket.

## MVP

1. Enter location
2. Live concerts render based on your location
3. Music streams for those artists

## Data Model

```
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
    //  }]
    //
    // }
  ],

  ```

### Spotify API Change

As of the beginning of June Spotify has changed their open requests to needing an authorization token. I'm in the middle of trying to fix this error as I continue to receive `401 (Unauthorized)` errors.
