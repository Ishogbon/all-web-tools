import type { MouseEvent, ChangeEvent, FunctionComponent, ReactNode } from 'react';

interface PercentageInputProps {
    id?: string
    value?: number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

interface NumberInputProps {
    id?: string
    value?: number
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

interface TextInputProps {
    id?: string
    value?: string
    placeholder?: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
}

export const PercentageInput: FunctionComponent<PercentageInputProps> = (props) => {
    return (
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        <input id={props.id} className=' w-16 outline-none border-b border-white px-1 pt-1 bg-transparent text-right' type='number' value={props.value} onChange={(e) => { if (typeof props.onChange === 'function') props.onChange(e); } }/>
    );
};

export const NumberInput: FunctionComponent<NumberInputProps> = (props) => {
    return (
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        <input id={props.id} className=' w-32 outline-none border-b border-white px-1 pt-1 bg-transparent' type='number' value={props.value} onChange={(e) => { if (typeof props.onChange === 'function') props.onChange(e); } }/>
    );
};

export const TextInput: FunctionComponent<TextInputProps> = (props) => {
    return (
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        <input id={props.id} className=' w-36 outline-none border-b border-white px-1 pt-1 bg-transparent' type='text' placeholder={props.placeholder} value={props.value} onChange={(e) => { if (typeof props.onChange === 'function') props.onChange(e); } }/>
    );
};

interface ButtonProps {
    id?: string
    value?: ReactNode
    onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

export const Button: FunctionComponent<ButtonProps> = (props) => {
    return (
        // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
        <button id={props.id} className=' p-2 px-8 outline-none bg-stone-900 text-white float-right mr-4 mb-4 rounded' onClick={(e) => { if (typeof props.onClick === 'function') props.onClick(e); } }>
            {props.value}
        </button>
    );
};
