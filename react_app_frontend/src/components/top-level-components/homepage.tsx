import React from 'react';

// const DOMAIN = 'localhost:3000/';

interface HomepageState {
    pageTitle: string
}
class Homepage extends React.Component {
    state: HomepageState = {
        pageTitle: 'All Tools | Calculators & Converters'
    };

    render (): React.ReactNode {
        return (
            <main>
            </main>
        );
    }
}
export default Homepage;
