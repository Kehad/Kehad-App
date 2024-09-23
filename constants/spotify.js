
// ------------------------------------------------- -------------------------------------
// ------------------------------------------------- GET YOUR TOP 5 TRACKS -------------------------------------
// ------------------------------------------------- -------------------------------------
// Authorization token that must have been created previously.See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token =
//   "BQDaTcqMyeRXPw9d68pebQkQ3yqpsC5dGiz9MBQPe8cxOYCCnF0KKoNATlCoasuXjYco6RWoGOxTvcS_CNvNS6n0Ms5gUy57ACdDDjXPPPQJkPcukqQmvQLwQi_zecnt8Ad5qM4lTI4NrI67dO8czl-ZSSH5xFJg83uRA1vWvcd5idR7Hl48dz3uDtBtTSgpEbvsvDUpDSinrFYryOKPdBPItHd9Ln2j3Yv4ik_H4pTMvIc1giqckj_GslYA7aOcEvDmnCk9Maa0pcbucw5xa2ffy1eBv9xV";
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// }

// async function getTopTracks() {
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (
//     await fetchWebApi("v1/me/top/tracks?time_range=long_term&limit=5", "GET")
//   ).items;
// }

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({ name, artists }) =>
//       `${name} by ${artists.map((artist) => artist.name).join(", ")}`
//   )
// );


// ------------------------------------------------- -------------------------------------
// ------------------------------------------------- RECOMMEND 5 SONGS BASED ON YOUR TOP 5 TRACKS -------------------------------------
// ------------------------------------------------- -------------------------------------
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = 'BQDaTcqMyeRXPw9d68pebQkQ3yqpsC5dGiz9MBQPe8cxOYCCnF0KKoNATlCoasuXjYco6RWoGOxTvcS_CNvNS6n0Ms5gUy57ACdDDjXPPPQJkPcukqQmvQLwQi_zecnt8Ad5qM4lTI4NrI67dO8czl-ZSSH5xFJg83uRA1vWvcd5idR7Hl48dz3uDtBtTSgpEbvsvDUpDSinrFYryOKPdBPItHd9Ln2j3Yv4ik_H4pTMvIc1giqckj_GslYA7aOcEvDmnCk9Maa0pcbucw5xa2ffy1eBv9xV';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// const topTracksIds = [
//   '5ZtK8XAVnoaGdBXZWCEVCY','1oq33HJBs0rDmjjZ2rVFyG','6WZVnqQ9OZRSGZmXyHHlV3','2H0w7oYDjUvgsFlNQ5swIg','6lrAyxpomr1dkHltiUqWSw'
// ];

// async function getRecommendations(){
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-recommendations
//   return (await fetchWebApi(
//     `v1/recommendations?limit=5&seed_tracks=${topTracksIds.join(',')}`, 'GET'
//   )).tracks;
// }

// const recommendedTracks = await getRecommendations();
// console.log(
//   recommendedTracks.map(
//     ({name, artists}) =>
//       `${name} by ${artists.map(artist => artist.name).join(', ')}`
//   )
// );


// ------------------------------------------------- -------------------------------------
// ------------------------------------------------- SAVE 10 SONGS IN THE PLAYLIST -----------------------------------
// ------------------------------------------------- -------------------------------------


// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = 'BQDaTcqMyeRXPw9d68pebQkQ3yqpsC5dGiz9MBQPe8cxOYCCnF0KKoNATlCoasuXjYco6RWoGOxTvcS_CNvNS6n0Ms5gUy57ACdDDjXPPPQJkPcukqQmvQLwQi_zecnt8Ad5qM4lTI4NrI67dO8czl-ZSSH5xFJg83uRA1vWvcd5idR7Hl48dz3uDtBtTSgpEbvsvDUpDSinrFYryOKPdBPItHd9Ln2j3Yv4ik_H4pTMvIc1giqckj_GslYA7aOcEvDmnCk9Maa0pcbucw5xa2ffy1eBv9xV';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// const tracksUri = [
//   'spotify:track:5ZtK8XAVnoaGdBXZWCEVCY','spotify:track:1hsFJ92y0FU2cFOOLkEFVr','spotify:track:1oq33HJBs0rDmjjZ2rVFyG','spotify:track:38cRK08KGwEyPDvy1pYmag','spotify:track:6WZVnqQ9OZRSGZmXyHHlV3','spotify:track:2XuLnQELesgnkCGZbSJHO0','spotify:track:2H0w7oYDjUvgsFlNQ5swIg','spotify:track:77jK5BkzUGqpTli5fJExWz','spotify:track:6lrAyxpomr1dkHltiUqWSw','spotify:track:57l4bsWwDx63cfS0prlWFo'
// ];

// async function createPlaylist(tracksUri){
//   const { id: user_id } = await fetchWebApi('v1/me', 'GET')

//   const playlist = await fetchWebApi(
//     `v1/users/${user_id}/playlists`, 'POST', {
//       "name": "My recommendation playlist",
//       "description": "Playlist created by the tutorial on developer.spotify.com",
//       "public": false
//   })

//   await fetchWebApi(
//     `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
//     'POST'
//   );

//   return playlist;
// }

// const createdPlaylist = await createPlaylist(tracksUri);
// console.log(createdPlaylist.name, createdPlaylist.id);


// ------------------------------------------------- -------------------------------------
// ------------------------------------------------- LIST TO THE SONGS RIGHT NOW -------------------------------------
// ------------------------------------------------- -------------------------------------
// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token = 'BQDaTcqMyeRXPw9d68pebQkQ3yqpsC5dGiz9MBQPe8cxOYCCnF0KKoNATlCoasuXjYco6RWoGOxTvcS_CNvNS6n0Ms5gUy57ACdDDjXPPPQJkPcukqQmvQLwQi_zecnt8Ad5qM4lTI4NrI67dO8czl-ZSSH5xFJg83uRA1vWvcd5idR7Hl48dz3uDtBtTSgpEbvsvDUpDSinrFYryOKPdBPItHd9Ln2j3Yv4ik_H4pTMvIc1giqckj_GslYA7aOcEvDmnCk9Maa0pcbucw5xa2ffy1eBv9xV';
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body:JSON.stringify(body)
//   });
//   return await res.json();
// }

// const tracksUri = [
//   'spotify:track:5ZtK8XAVnoaGdBXZWCEVCY','spotify:track:1hsFJ92y0FU2cFOOLkEFVr','spotify:track:1oq33HJBs0rDmjjZ2rVFyG','spotify:track:38cRK08KGwEyPDvy1pYmag','spotify:track:6WZVnqQ9OZRSGZmXyHHlV3','spotify:track:2XuLnQELesgnkCGZbSJHO0','spotify:track:2H0w7oYDjUvgsFlNQ5swIg','spotify:track:77jK5BkzUGqpTli5fJExWz','spotify:track:6lrAyxpomr1dkHltiUqWSw','spotify:track:57l4bsWwDx63cfS0prlWFo'
// ];

// async function createPlaylist(tracksUri){
//   const { id: user_id } = await fetchWebApi('v1/me', 'GET')

//   const playlist = await fetchWebApi(
//     `v1/users/${user_id}/playlists`, 'POST', {
//       "name": "My recommendation playlist",
//       "description": "Playlist created by the tutorial on developer.spotify.com",
//       "public": false
//   })

//   await fetchWebApi(
//     `v1/playlists/${playlist.id}/tracks?uris=${tracksUri.join(',')}`,
//     'POST'
//   );

//   return playlist;
// }

// const createdPlaylist = await createPlaylist(tracksUri);
// console.log(createdPlaylist.name, createdPlaylist.id);
