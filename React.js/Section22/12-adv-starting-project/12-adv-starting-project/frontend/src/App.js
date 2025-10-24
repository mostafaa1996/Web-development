// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
//Done
// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
//Done
// 3. Add a root layout that adds the <MainNavigation> component above all page components
//Done
// 4. Add properly working links to the MainNavigation
//Done
// 5. Ensure that the links in MainNavigation receive an "active" class when active
//Done
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
//Done
// 7. Output the ID of the selected event on the EventDetailPage
//Done
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./Pages/Home";
import EventsPage from "./Pages/Events";
import EventDetailPage from "./Pages/EventDetail";
import NewEventPage from "./Pages/NewEvent";
import EditEventPage from "./Pages/EditEvent";
import Root from "./components/Root";
import EventRoot from "./components/EventRoot";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: async () => {
              const response = await fetch(
                "http://localhost:8080/events"
              )
              if (!response.ok) {
                throw new Error('Could not fetch events');
              }
              const data = await response.json();
              return data.events ;
            },
            
          },
          { path: ":id", element: <EventDetailPage /> },
          { path: "new", element: <NewEventPage /> },
          { path: ":id/edit", element: <EditEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
