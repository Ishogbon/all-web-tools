import React, { type FunctionComponent, useEffect, useState } from 'react';
import { FETCH_RESOURCE_API } from '../../../../etc/api-fetcher';
import { NumberInput } from '../../../components-small-assets/inputs';
import SubBarPrimary from '../../../components-small-assets/sub-bars';

interface PrimeNumbersState {
    pageTitle: string
}

const VerifyPrimeNumberInputsBar: FunctionComponent = function () {
    const [PRIME_NUMBER, SET_PRIME_NUMBER] = useState(3);
    const [RESULT, SET_RESULT] = useState(true);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/verify-prime-number', 'GET', { PRIME_NUMBER }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    console.log(data.result);
                    SET_RESULT(Boolean(data.result));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [PRIME_NUMBER, SET_RESULT]);
    return (
        <SubBarPrimary>Is <b className='font-bold'>Prime Number</b>?
            <NumberInput value={PRIME_NUMBER} onChange={(e) => { SET_PRIME_NUMBER(parseInt(e.target.value)); }}/> = <span className='font-bold'>{RESULT ? 'Yes' : 'No'}</span>
        </SubBarPrimary>
    );
};

const PreviousPrimeInputsBar: FunctionComponent = function () {
    const [NUMBER, SET_NUMBER] = useState(3);
    const [RESULT, SET_RESULT] = useState<number | string>(2);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/find-previous-prime-number', 'GET', { NUMBER }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    console.log(data.result);
                    if (typeof data.result === 'string') {
                        SET_RESULT(String(data.result));
                    } else {
                        SET_RESULT(parseInt(String(data.result)));
                    }
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [NUMBER, SET_RESULT]);
    return (
        <SubBarPrimary><b className='font-bold'>Prime Number</b> before&nbsp;
            <NumberInput value={NUMBER} onChange={(e) => { SET_NUMBER(parseInt(e.target.value)); }}/> = <span className='font-bold'>{RESULT}</span>
        </SubBarPrimary>
    );
};

const NextPrimeInputsBar: FunctionComponent = function () {
    const [NUMBER, SET_NUMBER] = useState(3);
    const [RESULT, SET_RESULT] = useState(5);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/find-next-prime-number', 'GET', { NUMBER }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    console.log(data.result);
                    SET_RESULT(parseInt(String(data.result)));
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [NUMBER, SET_RESULT]);
    return (
        <SubBarPrimary><b className='font-bold'>Prime Number</b> after&nbsp;
            <NumberInput value={NUMBER} onChange={(e) => { SET_NUMBER(parseInt(e.target.value)); }}/> = <span className='font-bold'>{RESULT}</span>
        </SubBarPrimary>
    );
};

const GeneratePrimeNumbersInputsAndDisplayBar: FunctionComponent = function () {
    const [START, SET_START] = useState(0);
    const [END, SET_END] = useState(10);
    const [RESULT, SET_RESULT] = useState([2, 3, 5, 7]);

    useEffect(() => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/math/generate-prime-numbers', 'GET', { START, END }, 'application/x-www-form-urlencoded')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    console.log(data.result);
                    if (Array.isArray(data.result)) {
                        SET_RESULT(data.result);
                    }
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }, [START, END, SET_RESULT]);
    let primesCounter = 0;
    let primesSum = 0;
    RESULT.forEach((value) => {
        primesCounter += 1;
        primesSum += value;
    });
    return (
        <SubBarPrimary>Generate <b className='font-bold'>Prime Numbers</b> from
            <NumberInput value={START} onChange={(e) => { SET_START(parseInt(e.target.value)); }}/> TO&nbsp;
            <NumberInput value={END} onChange={(e) => { SET_END(parseInt(e.target.value)); }} />
            <div className='mt-4'>
                <span className='my-2'>Primes Count: <span className='font-bold'>{primesCounter}</span></span>
                <br />
                <span className='my-2'>Primes Sum: <span className='font-bold'>{primesSum}</span></span>
            </div>
            <div className='mt-4'>
                {RESULT.map((value, index) => (
                    <React.Fragment key={index}>
                        {index !== 0 ? ', ' : null}
                        <span className='font-bold' title={`Prime index from ${START}, Nth: ${index + 1}`}>{value}</span>
                    </React.Fragment>
                ))}
            </div>
        </SubBarPrimary>
    );
};

class PrimeNumbersCalculator extends React.Component<any, PrimeNumbersState> {
    state = {
        pageTitle: 'Calculators | Math | Prime Numbers'
    };

    render (): React.ReactNode {
        return (
            <>
                <div className=' bg-stone-700 mt-4 mx-auto p-2'>
                    <VerifyPrimeNumberInputsBar />
                    <PreviousPrimeInputsBar />
                    <NextPrimeInputsBar />
                    <GeneratePrimeNumbersInputsAndDisplayBar />
                </div>
            </>
        );
    }
}

export default PrimeNumbersCalculator;
