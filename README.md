# Project 2

### RSVP App Project Overview

#### Project Description
I had the opportunity to design and implement an RSVP application as part of the `INFO2310` course. This application serves a simple yet pivotal function: it displays a list of events and allows users to RSVP, providing a straightforward way to track attendance for various events.

#### Key Features
- **Event Listing**: The app showcases a variety of events, allowing users to browse through and select those they are interested in attending.
- **RSVP Functionality**: Users can RSVP to events, contributing to an aggregate head count. This feature is crucial for event organizers to gauge attendance.
- **No Personal Data Collection**: In alignment with privacy concerns, the app refrains from collecting personal information from users, focusing solely on the RSVP count.
- **Client-Side Interactivity**: The app boasts an interactive user interface, employing client-side rendering for a dynamic experience.
- **Server-Side Data Storage**: All event data is securely stored server-side, ensuring data integrity and accessibility.
- **REST API Integration**: A custom-designed REST API facilitates efficient data access and manipulation, enhancing the app's responsiveness and scalability.
- **Simplicity in Design**: Adhering to the principle of Spartan design, the app features a clean, user-friendly interface that emphasizes functionality over ornate design elements.

#### Technologies Used
- **NoSQL Database (MongoDB)**: For robust and scalable data storage.
- **Client-Side JavaScript**: Ensuring a responsive and interactive user experience.
- **Server-Side API**: Allowing for efficient data handling and communication between the client and server.

#### Personal Development
- **Design Patterns**: I gained practical experience in applying common app design patterns, enhancing my understanding of user interface design.
- **State Management**: The project enhanced my skills in managing state within a dynamic application, a key aspect of modern web development.
- **API Design**: Designing and implementing the REST API provided me with valuable insights into backend development and data management.

This project was a comprehensive exercise in building a functional, user-centered web application, significantly contributing to my growth as a web developer.

## Client

```sh
cd client
```

**Install dependencies:**

```sh
npm install
```

**Start development server:**

```sh
npm start
```

## Server

```sh
cd server
```

**Install dependencies:**

```sh
npm install
```

**Initialize database:**

```sh
mongosh init.mongo.js
```

**Start development server:**

```sh
npm run dev
```
