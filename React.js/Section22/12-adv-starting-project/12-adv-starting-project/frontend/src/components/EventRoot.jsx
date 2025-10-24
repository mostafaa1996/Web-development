import { Outlet } from 'react-router-dom';
import EventsNavigation from './EventsNavigation';


function EventRoot() {
    return (
        <>
            <EventsNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default EventRoot;