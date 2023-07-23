import React from 'react';
import { BsThreeDotsVertical } from 'react-icons/bs';
import Navigation, { type NavData } from './navigation';

interface UIHeaderProps {
    navigationLinks?: NavData[]
}

interface UIHeaderState {
    isNavigationDisplayed: boolean
}

class UIHeader extends React.Component<UIHeaderProps, UIHeaderState> {
    state = {
        isNavigationDisplayed: false
    };

    setNavDisplayTrue = (): void => {
        this.state.isNavigationDisplayed = true;
        this.setState(this.state);
    };

    setNavDisplayFalse = (): void => {
        this.state.isNavigationDisplayed = false;
        this.setState(this.state);
    };

    render (): React.ReactNode {
        return (
            <header className='bg-stone-900 w-full'>
                <div className='py-2'>
                    <button className='text-white ml-2' onClick={this.setNavDisplayTrue}><BsThreeDotsVertical/></button>
                    <Navigation key='navigation' navigationLinks={this.props.navigationLinks} displayNav={this.state.isNavigationDisplayed} setNavDisplayFalse={this.setNavDisplayFalse} />
                </div>
            </header>
        );
    }
}

export default UIHeader;
