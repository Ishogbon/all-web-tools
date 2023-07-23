import React, { type FunctionComponent, useState } from 'react';
import { AiFillDelete } from 'react-icons/ai';

import { FETCH_RESOURCE_API } from '../../../../etc/api-fetcher';
import { Button, NumberInput, TextInput } from '../../../components-small-assets/inputs';
import SubBarPrimary from '../../../components-small-assets/sub-bars';

interface AddingMachineEntry {
    key: number
    description?: string
    operand: string
    entryValue: number
    subTotal?: number
}

interface AddingMachineDescriptionInputsBarProps {
    id?: string
    onPendingDescriptionChange: (entryValue: string) => void
}
const AddingMachineDescriptionInputsBar: FunctionComponent<AddingMachineDescriptionInputsBarProps> = function ({ id, onPendingDescriptionChange }) {
    return (
        <SubBarPrimary><b className='font-bold'>Entry Description: </b>&nbsp;
            <TextInput id={id}placeholder='Not necessary' onChange={(e) => { onPendingDescriptionChange(e.target.value); }}/>
        </SubBarPrimary>
    );
};

interface AddingMachineEntryValueInputsBarProps {
    id?: string
    onPendingEntryValueChange: (entryValue: number) => void
}
const AddingMachineEntryValueInputsBar: FunctionComponent<AddingMachineEntryValueInputsBarProps> = function ({ id, onPendingEntryValueChange }) {
    return (
        <SubBarPrimary><b className='font-bold'>Entry Value: </b>&nbsp;
            <NumberInput id={id}onChange={(e) => { onPendingEntryValueChange(parseFloat(e.target.value)); }}/>
        </SubBarPrimary>
    );
};

interface AddingMachineOperandInputsBarProps {
    name?: string
    onPendingOperandChange: (operand: string) => void
}
const AddingMachineOperandInputsBar: FunctionComponent<AddingMachineOperandInputsBarProps> = function ({ name, onPendingOperandChange }) {
    return (
        <SubBarPrimary><b className='font-bold'>Operand: </b>
            <div className='inline-block'>
                <input className='ml-4' name={name} type='radio' id='entry-operand-addition' value='addition(+)' onChange={(e) => { onPendingOperandChange(e.target.value); }}/>&nbsp;
                <label htmlFor='entry-operand-addition'>addition&#40;+&#41;</label>&nbsp;
            </div>
            <div className='inline-block'>
                <input className='ml-4' name={name} type='radio' id='entry-operand-subtraction' value='subtraction(-)' onChange={(e) => { onPendingOperandChange(e.target.value); }}/>&nbsp;
                <label htmlFor='entry-operand-subtraction'>subtraction&#40;-&#41;</label>&nbsp;
            </div>
            <div className='inline-block'>
                <input className='ml-4' name={name} type='radio' id='entry-operand-multiplication' value='multiplication(x)' onChange={(e) => { onPendingOperandChange(e.target.value); }}/>&nbsp;
                <label htmlFor='entry-operand-multiplication'>multiplication&#40;x&#41;</label>&nbsp;
            </div>
            <div className='inline-block'>
                <input className='ml-4' name={name} type='radio' id='entry-operand-division' value='division(÷)' onChange={(e) => { onPendingOperandChange(e.target.value); }}/>&nbsp;
                <label htmlFor='entry-operand-division'>division&#40;÷&#41;</label>&nbsp;
            </div>
        </SubBarPrimary>
    );
};

interface AddingMachineResetOnEntryInputsBarProps {
    id?: string
}
const AddingMachineResetOnEntryInputsBar: FunctionComponent<AddingMachineResetOnEntryInputsBarProps> = function ({ id }) {
    return (
        <SubBarPrimary><label htmlFor={id} className='font-bold'>Reset Inputs After Entry Add: </label>&nbsp;
            <input id={id} type='checkbox' defaultChecked/>
        </SubBarPrimary>
    );
};

interface AddingMachineEntryDisplayProps {
    entry: AddingMachineEntry
    onUpdate: (updatedEntry: AddingMachineEntry) => void
    onDelete: (entryKey: number) => void
}

const AddingMachineEntryDisplay: React.FC<AddingMachineEntryDisplayProps> = ({ entry, onUpdate, onDelete }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedEntry, setEditedEntry] = useState(entry);

    const handleDoubleClick = (): void => {
        setIsEditing(true);
        console.log(isEditing);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = event.target;
        setEditedEntry((prevEntry) => ({
            ...prevEntry,
            [name]: name === 'entryValue' ? parseFloat(value) : value
        }));
    };

    const handleBlur = (): void => {
        onUpdate(editedEntry);
        setIsEditing(false);
    };

    const handleDelete = (): void => {
        onDelete(entry.key);
    };

    return (
        <tr>
            <td className='border-white border-solid border' onDoubleClick={handleDoubleClick}>
                {isEditing
                    ? (
                        <input
                            type="text"
                            name="description"
                            value={editedEntry.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='bg-inherit'
                        />
                    )
                    : (
                        entry.description
                    )}
            </td>
            <td className='border-white border-solid border' onDoubleClick={handleDoubleClick}>
                {isEditing
                    ? (
                        <input
                            type="text"
                            name="operand"
                            value={editedEntry.operand}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='bg-inherit'
                        />
                    )
                    : (
                        entry.operand
                    )}
            </td>
            <td className='border-white border-solid border' onDoubleClick={handleDoubleClick}>
                {isEditing
                    ? (
                        <input
                            type="number"
                            name="entryValue"
                            value={editedEntry.entryValue}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='bg-inherit'
                        />
                    )
                    : (
                        entry.entryValue
                    )}
            </td>
            <td className='border-white border-solid border'>{entry.subTotal}</td>
            <td className='border-white border-solid border'>
                <button onClick={handleDelete}><AiFillDelete /></button>
            </td>
        </tr>
    );
};

interface AddingMachineProps {
    entries: AddingMachineEntry[]
    entriesTotal: number
    onUpdateEntry: (updatedEntry: AddingMachineEntry) => void
    onDeleteEntry: (entryKey: number) => void
}

const AddingMachineEntriesDisplay: React.FC<AddingMachineProps> = ({
    entries,
    entriesTotal,
    onUpdateEntry,
    onDeleteEntry
}) => {
    return (
        <table className=' w-11/12 text-white mt-4 mx-auto border-white border-solid border'>
            <thead>
                <tr>
                    <th className='border-white border-solid border'>Description</th>
                    <th className='border-white border-solid border'>Operand</th>
                    <th className='border-white border-solid border'>Value</th>
                    <th className='border-white border-solid border'>Sub-Total</th>
                </tr>
            </thead>
            <tbody className=' text-center'>
                {entries.map((entry) => (
                    <AddingMachineEntryDisplay
                        key={entry.key}
                        entry={entry}
                        onUpdate={onUpdateEntry}
                        onDelete={onDeleteEntry}
                    />
                ))}
                <tr>
                    <td className='border-white border-solid border'>TOTAL</td>
                    <td className='border-white border-solid border font-extrabold'>{entriesTotal}</td>
                </tr>
            </tbody>
        </table>
    );
};

interface AddingMachineCalculatorState {
    pageTitle: string
    addingMachineEntries: AddingMachineEntry[]
    addingMachinePendingEntry: AddingMachineEntry
    addingMachineEntriesValueTotal: number
}

// Make sure to come back and add a print feature to this
class AddingMachineCalculator extends React.Component<any, AddingMachineCalculatorState> {
    state: AddingMachineCalculatorState = {
        pageTitle: 'Calculators | Math | Prime Numbers',
        addingMachineEntries: [],
        addingMachinePendingEntry: {
            key: 0,
            description: '',
            operand: 'addition(+)',
            entryValue: 0
        },
        addingMachineEntriesValueTotal: 0
    };

    componentDidUpdate (prevProps: Readonly<any>, prevState: Readonly<AddingMachineCalculatorState>, snapshot?: any): void {
    }

    componentDidMount (): void {
        document.title = this.state.pageTitle;
    }

    updatePendingEntryValue = (entryValue: number): void => {
        this.state.addingMachinePendingEntry.entryValue = entryValue;
        this.setState({ addingMachinePendingEntry: this.state.addingMachinePendingEntry });
    };

    updatePendingOperand = (operand: string): void => {
        this.state.addingMachinePendingEntry.operand = operand;
        this.setState({ addingMachinePendingEntry: this.state.addingMachinePendingEntry });
    };

    updatePendingDescription = (description: string): void => {
        this.state.addingMachinePendingEntry.description = description;
        this.setState({ addingMachinePendingEntry: this.state.addingMachinePendingEntry });
    };

    calculateEntries = (): void => {
        FETCH_RESOURCE_API('http://localhost:2015/api/v1/calculator/finance/adding-machine', 'POST', { ADDING_MACHINE_ENTRIES: this.state.addingMachineEntries }, 'application/json')
            .then((data) => {
                console.log(data);
                if (data.status === 'SUCCESS') {
                    console.log(data.result);
                    if (Array.isArray(data.result)) {
                        if (data.result.length >= 1) this.setState({ addingMachineEntries: data.result[0] });
                        if (data.result.length > 1) this.setState({ addingMachineEntriesValueTotal: parseInt(String(data.result[1])) });
                    }
                } else {
                    // handle error here
                }
            })
            .catch((error) => {
                console.log(error);
            });
    };

    resolvePendingEntryandCalculate = (): void => {
        let descriptionValue = '';
        let operandValue = 'addition(+)';
        let entryValue = 0;

        let objectScratch: HTMLElement | NodeListOf<HTMLInputElement> | null = document.getElementById('entry-description-input');
        if (objectScratch instanceof HTMLInputElement) {
            descriptionValue = objectScratch.value;
            const INPUT_RESET_ELEMENT = document.getElementById('reset-on-entry-input');
            if (INPUT_RESET_ELEMENT instanceof HTMLInputElement) {
                if (INPUT_RESET_ELEMENT.checked) {
                    objectScratch.value = '';
                }
            }
        }
        objectScratch = document.getElementsByName('entry-operand-input') as NodeListOf<HTMLInputElement>;
        if (!(objectScratch instanceof HTMLElement)) {
            objectScratch.forEach((element) => {
                if (element.checked) {
                    operandValue = element.getAttribute('value') as string;
                    const INPUT_RESET_ELEMENT = document.getElementById('reset-on-entry-input');
                    if (INPUT_RESET_ELEMENT instanceof HTMLInputElement) {
                        if (INPUT_RESET_ELEMENT.checked) {
                            element.checked = false;
                        }
                    }
                }
            });
        }
        objectScratch = document.getElementById('entry-value-input');
        if (objectScratch instanceof HTMLInputElement) {
            entryValue = parseFloat(objectScratch.value);
            const INPUT_RESET_ELEMENT = document.getElementById('reset-on-entry-input');
            if (INPUT_RESET_ELEMENT instanceof HTMLInputElement) {
                if (INPUT_RESET_ELEMENT.checked) {
                    objectScratch.value = '';
                }
            }
        }
        this.state.addingMachineEntries.push(this.state.addingMachinePendingEntry);
        this.setState({ addingMachineEntries: this.state.addingMachineEntries });
        this.setState(
            {
                addingMachinePendingEntry: {
                    key: this.state.addingMachineEntries[this.state.addingMachineEntries.length - 1].key + 1,
                    description: descriptionValue,
                    operand: operandValue,
                    entryValue
                }
            });
        this.calculateEntries();
    };

    handleEntryDelete = (entryKey: number): void => {
        this.state.addingMachineEntries.forEach((entry, index) => {
            if (entry.key === entryKey) {
                this.state.addingMachineEntries.splice(index, 1);
            }
        });
        this.setState({ addingMachineEntries: this.state.addingMachineEntries });
        this.calculateEntries();
    };

    handleEntryUpdate = (updatedEntry: AddingMachineEntry): void => {
        this.state.addingMachineEntries.forEach((entry, index) => {
            if (entry.key === updatedEntry.key) {
                this.state.addingMachineEntries[index] = updatedEntry;
            }
        });
        this.setState({ addingMachineEntries: this.state.addingMachineEntries });
        this.calculateEntries();
    };

    render (): React.ReactNode {
        return (
            <>
                <div className='bg-stone-700 mt-4 mx-auto p-2'>
                    <AddingMachineEntryValueInputsBar id='entry-value-input' onPendingEntryValueChange={this.updatePendingEntryValue}/>
                    <AddingMachineOperandInputsBar name='entry-operand-input' onPendingOperandChange={this.updatePendingOperand}/>
                    <AddingMachineDescriptionInputsBar id='entry-description-input' onPendingDescriptionChange={this.updatePendingDescription}/>
                    <AddingMachineResetOnEntryInputsBar id='reset-on-entry-input' />
                    <Button onClick={this.resolvePendingEntryandCalculate} value='Add Entry'/>
                    <AddingMachineEntriesDisplay entriesTotal={this.state.addingMachineEntriesValueTotal} entries={this.state.addingMachineEntries} onDeleteEntry={this.handleEntryDelete} onUpdateEntry={this.handleEntryUpdate}/>
                </div>
            </>
        );
    }
}

export default AddingMachineCalculator;
