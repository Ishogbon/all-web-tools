import React, { useEffect, useState, type FunctionComponent } from 'react';
import SubBarPrimary from '../../../components-small-assets/sub-bars';
import { NumberInput } from '../../../components-small-assets/inputs';
import { FETCH_RESOURCE_API } from '../../../../etc/api-fetcher';

const AbsoluteDifferenceInformationBar: FunctionComponent = function () {
    return (
        <SubBarPrimary>
            Absolute difference is the size of the difference between two numbers.
            You can also think of it as the distance between the two numbers on a number line.
            Positive or Negative, Absolute Difference informs you the value of the gap.
            Absolute Difference is calculated with | x - y |
        </SubBarPrimary>
    );
};

const AbsoluteDifferenceInputsBar: FunctionComponent = function () {
    const [X_VALUE, SET_X_VALUE] = useState(10);
    const [Y_VALUE, SET_Y_VALUE] = useState(5);
    const [RESULT, SET_RESULT] = useState(5);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/algebra/absolute-difference', 'GET', { X_VALUE, Y_VALUE }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    console.log(data.result);
                    SET_RESULT(parseFloat(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [X_VALUE, Y_VALUE, SET_RESULT]);
    return (
        <SubBarPrimary>
            <b className='font-bold'>X:</b>&nbsp;
            <NumberInput value={X_VALUE} onChange={(e) => { SET_X_VALUE(parseFloat(e.target.value)); }}/>
            <b className='font-bold'>Y:</b>&nbsp;
            <NumberInput value={Y_VALUE} onChange={(e) => { SET_Y_VALUE(parseFloat(e.target.value)); }}/>
            &nbsp;absolute difference: <span>{RESULT}</span>
        </SubBarPrimary>
    );
};

interface AbsoluteDifferenceCalculatorState {
    pageTitle: string
}

class AbsoluteDifferenceCalculator extends React.Component<any, AbsoluteDifferenceCalculatorState> {
    state = {
        pageTitle: 'Calculators | Algebra | Absolute Difference'
    };

    componentDidMount (): void {
        document.title = this.state.pageTitle;
    };

    render (): React.ReactNode {
        return (
            <div className='bg-stone-700 mt-4 mx-auto p-2'>
                <AbsoluteDifferenceInformationBar />
                <AbsoluteDifferenceInputsBar />
            </div>
        );
    }
}

export default AbsoluteDifferenceCalculator;
