# Streaming-React
This project contains
- react-router-dom - App.js
- authentication/oauth2 - GoogleAuth
- redux forms - StreamCreate
- form validation - StreamCreate
- async action creators - actions/index
- react-router-dom - throughout
- reacting from action creator - history, App, actions/index
- routing with dynamic url (params) - StreamList, App, StreamEdit
- reusing components - StreamCreate, StreamEdit, StreamForm
- portals - StreamDelete, Modal: render the element as a child of another element so it can overlay other stuff
- json-server mock api - api
- rtmp server - rtmp-server/index (node-media-server)

# To use
- open 3 console tabs
- tab 1 - ```make react```
- tab 2 - ```make api-server```
- tab 3 - ```make rtmp-server```
- Get OBS studio
  - Send the stream to url: ```rtmp://localhost:1935/live``` with a key: ```1```
  - start streaming
- Go to ```http://localhost:3000``` in the browser
- Log in with google
- Create a stream
- View the stream