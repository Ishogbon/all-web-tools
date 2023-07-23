import { type FunctionComponent } from 'react';

export interface FractionProps {
    wholeNumber?: number
    numerator: number
    denominator: number
}

export const NumberFractionFormat: FunctionComponent<FractionProps> = (props) => {
    return (
        <>
            {props.wholeNumber !== 0 ? <span>{props.wholeNumber} </span> : null}
            {props.numerator === 0 || props.denominator === 0
                ? null
                : props.numerator % props.denominator === 0
                    ? props.numerator
                    : <span>
                        <sup>
                            {props.numerator}
                        </sup>/
                        <sub>
                            {props.denominator}
                        </sub>
                    </span>}
        </>
    );
};
