import React, { useState } from 'react';

import { HiChevronLeft } from "react-icons/hi";

const availableSchemas = [
    { label: "First Name", value: "first_name" },
    { label: "Last Name", value: "last_name" },
    { label: "Gender", value: "gender" },
    { label: "Age", value: "age" },
    { label: "Account Name", value: "account_name" },
    { label: "City", value: "city" },
    { label: "State", value: "state" }
];




function Sidebar({isOpen,setIsOpen}){


    const [selectedSchemas, setSelectedSchemas] = useState([]);
    const [dropdownValue, setDropdownValue] = useState("");

    const [segmentName ,setSegmentName] = useState("")
    const [isValid, setIsValid] = useState(true);

    // 
    function handleAddSchema() {
        if (dropdownValue) {
            setSelectedSchemas([...selectedSchemas, dropdownValue]);
            setDropdownValue("");
        }
    };


  function handleChange (event) {
    setSegmentName(event.target.value);
   setIsValid(true)
  };

function handleSaveSegment() {

    const schema = selectedSchemas.map(schema => {
        const selectedSchema = availableSchemas.find(item => item.value === schema);
        return { [schema]: selectedSchema?.label };
    });


    const data = {
        segment_name: segmentName,
        schema: schema
    };


    if (segmentName.trim() === '') {
        setIsValid(false);
        return;
    }
    setSegmentName("")

    console.log(JSON.stringify(data));
};

const remainingSchemas = availableSchemas.filter(schema => !selectedSchemas.includes(schema.value));
return (
    <div  className={`sidebar  ${isOpen ? 'sidebar-open':''}`}>

        <div className='header'>
            <HiChevronLeft  className='icon'/>
            <p>Saving Segment</p>
        </div>
        
        <div className='sidebar-container'>

            <div className='segment-name'>
                <p>Enter the Name of the Segment</p>
                <div>
                    <input placeholder='Name of the segment' value={segmentName} onChange={handleChange}style={{borderColor: !isValid ? "red": ""}}/> 
                    {!isValid && (
                            <div style={{ color: 'red' }}>Input field is required</div>
                        )}
               
                </div>
                <p>To save your segment, you need to add the schemas to build the query</p>

            </div>
        <div>
            <div className='task'>
                <p className='user'>- User Tasks </p>
                <p className='group'>- Group Tasks</p>

            </div>
        </div>

            <div className='add-schema'>
                {selectedSchemas.map((schema, index) => (
                    <select
                        key={index}
                        value={schema}
                        onChange={(e) => {
                            const newSelectedSchemas = [...selectedSchemas];
                            newSelectedSchemas[index] = e.target.value;
                            setSelectedSchemas(newSelectedSchemas);
                        }}
                    >
                        {availableSchemas.map((schemaOption, idx) => (
                            <option key={idx} value={schemaOption.value}>
                                {schemaOption.label}
                            </option>
                        ))}
                    </select>
                ))}
                <select value={dropdownValue} onChange={(e) => setDropdownValue(e.target.value)}>
                    <option value="" disabled>Add schema to segment</option>
                    {remainingSchemas.map((schema, index) => (
                        <option key={index} value={schema.value}>{schema.label}</option>
                    ))}
                </select>

                
                <button onClick={handleAddSchema} className='btn-add-schema' >+Add new schema</button>
            </div>
        </div>

       { <div className='buttons'>
            <button onClick={handleSaveSegment} className='btn contained'>Save the Segment</button>
            <button className='btn outlined'onClick = {() => setIsOpen(isOpen => !isOpen)}>cancel</button>
        </div>}
    </div>
);
}

export default Sidebar