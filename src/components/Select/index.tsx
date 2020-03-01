import React, {useState} from 'react';
import './index.scss';
import classNames from 'classnames';

export type SelectOption = {
    value: any,
    name: string,
};

export type SelectProps = {
    options: SelectOption[],
    placeholder: string,
    valueRenderer?: (SelectOption) => React.ReactNode,
};

const Select = ({placeholder, options, valueRenderer = x => x.name}: SelectProps) => {

    const [selection, setSelection] = useState({name: '', value: null});
    const [open, setOpen] = useState(false);

    const classes = classNames('Select', {
        "Select--open": open,
    });

    return (
        <div className={classes} onMouseLeave={() => setOpen(false)}>
            <div className="Select__value" onClick={() => setOpen(!open)}>
                {selection.value ? valueRenderer(selection) : placeholder}
            </div>

            {open && (
                <ul className="Select__options">
                    {options.map(option => (
                        <li key={option.name} className="Select__option">
                            <button
                                type="button"
                                onClick={(e) => {
                                    e.preventDefault();
                                    setSelection(option);
                                    setOpen(!open);
                                }}
                            >
                                {valueRenderer(option)}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Select;
