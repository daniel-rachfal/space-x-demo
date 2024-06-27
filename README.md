# Space-x-demo

This project has been created for a take home assignment. It uses the [SpaceX-API](https://github.com/r-spacex/SpaceX-API/tree/master) project to show some data about dragons and launches. The dragons functionality was wholly based on them being called Dragons.

This project is currently hosted using Vercel at https://space-x-demo-sepia.vercel.app/

## Features

- Dragons timeline using the DaisyUI timeline component.
- Launches, sorted from most recent with information about the launch date, rocket launched and cost per launch. Infinitely scrollable.
- Mobile Responsive design
- Homepage outlining the purpose of the project
- Footer to not get sued

## Key Notes

The project is split into three main folders - /app, /components and /services.

- The app folder is responsible for the pages and routing, with the page.tsx files aiming for minimal content.
- The component folder is structured to group relevant sections and components together under folders and aims for minimal coupling.
- The services folder is for requests to the SpaceX-API.

Maintainability is considered through decoupling components, things being re-used being made into their own components and self-contained code.
