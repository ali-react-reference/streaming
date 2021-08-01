all: react api rtmp

react:
	cd react-streaming && npm install && npm start
api-server:
	cd api && npm install && npm start
rtmp-server:
	cd rtmp-server && npm install && npm start