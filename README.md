# Weather forecast web application

## Features
- view weather by geolocation
- view weather in different cities
- add/delete cities
- switch between saved cities
- display different settings options
- responsive design

## Technologies Used
- React
- TypeScript
- Vite
- Tailwind CSS
- OpenWeatherMap API

## Install dependencies
```bash
npm install
```

## Development Setup
```bash
npm run dev
```

## Build for Production
```bash
npm run build
```
## Security notes:
We are using a weather API key. If this key is exposed, anyone can use it, which is why it must be kept confidential. To achieve this, we should store the API key in the repository secrets, and for local development, it should be kept in a .env file, which is stored only on the development machine. To ensure that the API key does not end up in the final build, a proxy backend should be implemented, which would add the API key and request the third-party API. In this demo application, a free API key is used, and no proxy backend has been implemented.
