import MainNavigation from './MainNavigation';
import { Outlet } from 'react-router-dom';


function Root() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default Root;