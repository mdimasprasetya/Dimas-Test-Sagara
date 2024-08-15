// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const DropdownFilter = ({ value, onChange }) => {
  const [filter, setFilter] = useState(value);

  const handleChangeFilter = event => {
    setFilter(event.target.value);
    onChange(event.target.value);
  }

  return (
    <div className='ml-80'>
      <label className='bg' htmlFor="filter">Filter: </label>
      <select
        name="filter"
        value={filter}
        onChange={handleChangeFilter}
      >
        <option value="">-- Please Select --</option>
        <option value="name">Name</option>
      </select>
    </div>
  )
};

export default DropdownFilter;