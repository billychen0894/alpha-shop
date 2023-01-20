function Dropdown({ dropdownOptions, label, className, selected, onChange }) {
  const mappedDropdownOptions = dropdownOptions.map((option) => (
    <option key={option.value} value={option.value} disabled={option.disabled}>
      {option.label}
    </option>
  ));

  return (
    <div className={className}>
      <label htmlFor={label}>{label}</label>
      <select name={label} id={label} value={selected} onChange={onChange}>
        {mappedDropdownOptions}
      </select>
    </div>
  );
}

export default Dropdown;
