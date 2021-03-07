import React, { useState } from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';


function ActiveSuggestions(props) {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen)

    function test_select(e) {
        e.preventDefault();
        console.log("e: ", document.getElementById("status").value);
    }

    return (<>
        <tr>
            <td className="title-large">{props.date}
                {isOpen === false ?
                    <ArrowLeftIcon onClick={toggle}></ArrowLeftIcon> : <ArrowDropDownIcon onClick={toggle}></ArrowDropDownIcon>}
            </td>
            <td className="title-large">{props.per}</td>
            <td className="title-large">{props.sub}</td>
            <td className="title-large">{props.offer}</td>
            <td id="test" className="title-large">
                <form onChange={test_select}>
                    <select id="status" className="drop-down-menu">
                        {props.options.map((op, index) => { return <option value={op}>{op}</option> })}
                    </select>
                </form>
            </td>
        </tr>
        {isOpen === true ?
            <tr className="test">
                <td><KeyboardReturnIcon /></td>
                <td></td>
                <td colSpan="2" className="paragraph-regular">
                    <a>תוכן השיאלתה:</a>
                    <p>עם השמועות על הקדמת ...</p>
                </td>
                <td>
                    <a>סטטוס מפורט:</a>
                    <p>עם השמועות על הקדמת ...</p>
                </td>
            </tr> : null}

    </>
    );
}
export default ActiveSuggestions