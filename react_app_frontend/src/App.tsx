import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Homepage from './components/top-level-components/homepage';
import Layout from './components/top-level-components/layout-main';
import PercentageCalculator from './components/top-level-components/calculators/maths/percentage-calculator';
import PrimeNumbersCalculator from './components/top-level-components/calculators/maths/prime-numbers-calculator';
import AddingMachineCalculator from './components/top-level-components/calculators/finance/adding-machine-calculator';
import AbsoluteDifferenceCalculator from './components/top-level-components/calculators/algebra/absolute-difference-calculator';

class Application extends React.Component {
    render (): React.ReactNode {
        return (
            <BrowserRouter>
                <Routes>
                    <Route path='' element={<Layout />}>
                        <Route index element={<Homepage />} />
                        <Route path='calculators'>
                            <Route path='math'>
                                <Route path='percentages-calculator' element={<PercentageCalculator />} />
                                <Route path='prime-numbers-calculator' element={<PrimeNumbersCalculator />} />
                            </Route>
                            <Route path='finance'>
                                <Route path='adding-machine-calculator' element={<AddingMachineCalculator />} />
                            </Route>
                            <Route path='algebra'>
                                <Route path='absolute-difference-calculator' element={<AbsoluteDifferenceCalculator />} />
                            </Route>
                        </Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        );
    }
}

export default Application;
