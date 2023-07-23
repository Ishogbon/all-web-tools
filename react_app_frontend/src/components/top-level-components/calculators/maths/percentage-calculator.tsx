import React, { type FunctionComponent, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NumberInput, PercentageInput } from '../../../components-small-assets/inputs';
import { FETCH_RESOURCE_API } from '../../../../etc/api-fetcher';
import { type FractionProps, NumberFractionFormat } from '../../../components-small-assets/fractions';

const PercentageOnNumberInput: FunctionComponent = () => {
    const [PERCENTAGE, SET_PERCENTAGE] = useState(10);
    const [NUMBER, SET_NUMBER] = useState(50);
    const [RESULT, SET_RESULT] = useState(5);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/percentage-of-number', 'GET', { PERCENTAGE, NUMBER }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    SET_RESULT(parseFloat(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [PERCENTAGE, NUMBER, SET_RESULT]);
    return (
        <p className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>The <b className='font-bold'>Percentage</b>:
            <PercentageInput value={PERCENTAGE} onChange={(e) => { SET_PERCENTAGE(parseFloat(e.target.value)); }}/>%
                        of the <b className='font-bold'>Number</b>:
            <NumberInput value={NUMBER} onChange={(e) => { SET_NUMBER(parseFloat(e.target.value)); }}/> = <span className='font-bold underline'>{RESULT}</span>
        </p>
    );
};

const NumberOnNumberAsPercentageInput: FunctionComponent = () => {
    const [NUMBER, SET_NUMBER] = useState(10);
    const [MAIN_NUMBER, SET_MAIN_NUMBER] = useState(50);
    const [RESULT, SET_RESULT] = useState(20);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/number-on-number-as-percentage', 'GET', { NUMBER, MAIN_NUMBER }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    SET_RESULT(parseFloat(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [NUMBER, MAIN_NUMBER, SET_RESULT]);
    return (
        <p className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>The <b className='font-bold'>Number</b>:
            <NumberInput value={NUMBER} onChange={(e) => { SET_NUMBER(parseFloat(e.target.value)); }}/>
                        of the <b className='font-bold'>Number</b>:
            <NumberInput value={MAIN_NUMBER} onChange={(e) => { SET_MAIN_NUMBER(parseFloat(e.target.value)); }}/> as percentage is = <span className='font-bold underline'>{RESULT}</span>%
        </p>
    );
};

const NumberOnPercentageInput: FunctionComponent = () => {
    const [NUMBER, SET_NUMBER] = useState(10);
    const [PERCENTAGE, SET_PERCENTAGE] = useState(50);
    const [RESULT, SET_RESULT] = useState(20);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/number-of-percentage', 'GET', { NUMBER, PERCENTAGE }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    SET_RESULT(parseFloat(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [NUMBER, PERCENTAGE, SET_RESULT]);
    return (
        <p className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>The <b className='font-bold'>Number</b>:
            <NumberInput value={NUMBER} onChange={(e) => { SET_NUMBER(parseFloat(e.target.value)); }}/>
                        as result of <b className='font-bold'>Percentage</b>:
            <PercentageInput value={PERCENTAGE} onChange={(e) => { SET_PERCENTAGE(parseFloat(e.target.value)); }}/>% to what number is = <span className='font-bold underline'>{RESULT}</span>
        </p>
    );
};

const PercentageChangeInput: FunctionComponent = () => {
    const [OLD_NUMBER, SET_OLD_NUMBER] = useState(10);
    const [NEW_NUMBER, SET_NEW_NUMBER] = useState(50);
    const [RESULT, SET_RESULT] = useState(400);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/percentage-change-in-numbers', 'GET', { OLD_NUMBER, NEW_NUMBER }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    SET_RESULT(parseFloat(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [OLD_NUMBER, NEW_NUMBER, SET_RESULT]);
    return (
        <p className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>The <b className='font-bold'>Number</b>:
            <NumberInput value={OLD_NUMBER} onChange={(e) => { SET_OLD_NUMBER(parseFloat(e.target.value)); }}/>
                        percentage difference to the <b className='font-bold'>Number</b>:
            <NumberInput value={NEW_NUMBER} onChange={(e) => { SET_NEW_NUMBER(parseFloat(e.target.value)); }}/> is = <span className='font-bold underline'>{RESULT}</span>%
        </p>
    );
};

const PercentageApplicationToNumberInput: FunctionComponent = () => {
    const [NUMBER, SET_NUMBER] = useState(10);
    const [PERCENTAGE, SET_PERCENTAGE] = useState(50);
    const [TO_INCREASE_DECREASE, SET_INCREASE_DECREASE] = useState('increase');
    const [RESULT, SET_RESULT] = useState(15);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/apply-percentage-change-to-number', 'GET', { NUMBER, PERCENTAGE, TO_INCREASE_DECREASE }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    SET_RESULT(parseFloat(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [NUMBER, PERCENTAGE, TO_INCREASE_DECREASE, SET_RESULT]);
    return (
        <p className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>Modify <b className='font-bold'>Number</b>:
            <NumberInput value={NUMBER} onChange={(e) => { SET_NUMBER(parseFloat(e.target.value)); }}/>
                        by <b className='font-bold'>Percentage</b>:
            <PercentageInput value={PERCENTAGE} onChange={(e) => { SET_PERCENTAGE(parseFloat(e.target.value)); }}/>%
            <select className='outline-none border-b border-white px-1 pt-1 bg-transparent' value={TO_INCREASE_DECREASE} onChange={(e) => { SET_INCREASE_DECREASE(e.target.value); }}>
                <option value='increase'>increase</option>
                <option value='decrease'>decrease</option>
            </select> is = <span className='font-bold underline'>{RESULT}</span>
        </p>
    );
};

const PercentageToFractionInput: FunctionComponent = () => {
    const [PERCENTAGE, SET_PERCENTAGE] = useState(50);
    const [FRACTION_TYPE, SET_FRACTION_TYPE] = useState('simple');
    const [RESULT, SET_RESULT] = useState<FractionProps>({
        wholeNumber: 0,
        numerator: 1,
        denominator: 2
    });

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/percentage-to-fraction', 'GET', { PERCENTAGE, FRACTION_TYPE }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    console.log(data.result);
                    if (typeof data.result === 'object' && !Array.isArray(data.result)) {
                        SET_RESULT(data.result);
                    }
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [PERCENTAGE, FRACTION_TYPE, SET_RESULT]);
    return (
        <p className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>Convert <b className='font-bold'>Percentage</b>:
            <PercentageInput value={PERCENTAGE} onChange={(e) => { SET_PERCENTAGE(parseFloat(e.target.value)); }}/>%
            to <select className='outline-none border-b border-white px-1 pt-1 bg-transparent' value={FRACTION_TYPE} onChange={(e) => { SET_FRACTION_TYPE(e.target.value); }}>
                <option value='simple'>simple</option>
                <option value='mixed'>mixed</option>
            </select>
            fraction = <span className='font-bold'>{NumberFractionFormat(RESULT)}</span>
        </p>
    );
};

const PercentageToDecimalInput: FunctionComponent = () => {
    const [PERCENTAGE, SET_PERCENTAGE] = useState(50);
    const [RESULT, SET_RESULT] = useState(0.5);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/percentage-to-decimal', 'GET', { PERCENTAGE }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    SET_RESULT(parseFloat(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [PERCENTAGE, SET_RESULT]);
    return (
        <p className=' w-11/12 mx-auto my-6 bg-stone-900 p-2 text-white rounded font-light'>Convert <b className='font-bold'>Percentage</b>:
            <PercentageInput value={PERCENTAGE} onChange={(e) => { SET_PERCENTAGE(parseFloat(e.target.value)); }}/>%
            to decimal = <span className='font-bold'>{RESULT}</span>
        </p>
    );
};

interface PercentageCalculatorState {
    pageTitle: string
}

class PercentageCalculator extends React.Component<any, PercentageCalculatorState> {
    state = {
        pageTitle: 'Calculators | Math | Percentages'
    };

    render (): React.ReactNode {
        return (
            <>
                <h1>
                    <nav className='text-sm'>
                        <Link className=' text-gray-800 mt-8 ml-4 bg-gray-300 rounded-3xl inline-block p-2 px-4 hover:p-3 hover:px-5' to='/calculators'>Calculators</Link>
                        <Link className=' text-gray-800 mt-8 ml-4 bg-gray-300 rounded-3xl inline-block p-2 px-4 hover:p-3 hover:px-5' to='/calculators/math'>Math</Link>
                        <p className=' text-gray-800 mt-8 ml-4 bg-gray-300 rounded-3xl inline-block p-2 px-4'>Percentages Calculator</p>
                    </nav>
                </h1>
                <div className=' bg-stone-700 mt-4 mx-auto p-2'>
                    <PercentageOnNumberInput />
                    <NumberOnNumberAsPercentageInput />
                    <NumberOnPercentageInput />
                    <PercentageChangeInput />
                    <PercentageApplicationToNumberInput />
                    <PercentageToFractionInput />
                    <PercentageToDecimalInput />
                </div>
            </>
        );
    }
}

export default PercentageCalculator;
