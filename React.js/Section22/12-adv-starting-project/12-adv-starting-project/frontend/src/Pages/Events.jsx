import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <EventsList events={events} />
      </div>
    </>
  );
}

export default EventsPage;
