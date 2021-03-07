import React, { useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Collapse } from 'reactstrap';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CloseIcon from '@material-ui/icons/Close';


import './suggestions.css';

function Suggestions(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)
    const {add , remove } = props;
    // function handleVallSug(e) {
    //     console.log("e: ", e);
    //     console.log("Suggestions selected!");
    // }

    // function handleXallSug(e) {
    //     console.log("e: ", e);
    //     console.log("Suggestions removed!");
    // }
    return (<>
        <tr>
            <td className="title-large">{props.date}
                {isOpen === false ?
                    <ArrowLeftIcon onClick={toggle}></ArrowLeftIcon> : <ArrowDropDownIcon onClick={toggle}></ArrowDropDownIcon>}
            </td>
            <td className="title-large">{props.per}</td>
            <td className="title-large">{props.sub}</td>
            <td className="title-large">{props.offer}</td>
            <td className="title-large" id="accept-decline">
                <CheckBoxIcon id="v-box" style={{ color: 'green' }} onClick={(e) => { add(props) }}>v</CheckBoxIcon>
                <CloseIcon style={{ color: 'red' }} onClick={(e) => { remove(props) }}>x</CloseIcon>
            </td>
        </tr>
        {isOpen === true ?
            <tr className="test">
                <td><KeyboardReturnIcon /></td>
                <td></td>
                <td colSpan="2" className="paragraph-regular">{props.description}</td>
                <td>
                    <h4>סטטוס מפורט:</h4>
                    <p>{props.status.status}</p>
                </td>
            </tr> : null}

    </>
    );
}
export default Suggestions