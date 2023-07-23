import React, { type ReactElement } from 'react';
import { Link } from 'react-router-dom';

interface NavigationProps {
    navigationLinks?: NavData[]
    displayNav: boolean
    setNavDisplayFalse: () => void
}
export interface NavData {
    navName: string
    navLink: string
    readonly navIcon?: ReactElement
};

class Navigation extends React.Component<NavigationProps> {
    render (): React.ReactNode {
        const { navigationLinks } = this.props;
        return (
            <nav className={'top-0 bottom-0 fixed w-80 bg-stone-900 overflow-y-scroll overflow-x-hidden' + (!this.props.displayNav ? ' hidden' : '')}>
                <ul className=''>
                    { typeof navigationLinks === 'object'
                        ? navigationLinks.map((navData: NavData) =>
                            <li key={navData.navName} className='m-4 mt-9 p-1.5 px-6 bg-stone-800 rounded-md'>
                                {(navData.navIcon != null) ? <span className='text-white text-sm inline-block font-extrabold'>{navData.navIcon}</span> : null}
                                <Link className='text-white text-sm ml-2' to={navData.navLink}>{navData.navName}</Link>
                            </li>
                        )
                        : null}
                </ul>
            </nav>
        );
    }
}

export default Navigation;
