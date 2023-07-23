import { Outlet } from 'react-router-dom';
import UIHeader from '../header/header';
import { NAV_LINKS } from '../other/links';

const Layout = (): React.ReactElement => {
    return (
        <>
            <UIHeader key='main-header' navigationLinks={NAV_LINKS}/>
            <Outlet />
        </>
    );
};

export default Layout;
