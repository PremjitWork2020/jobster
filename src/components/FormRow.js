const FormRow = ({ type, name, value, handleChange, labelText, disabled }) => {
  return (
    <div className="form-row">
      <label htmlFor="name" className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        disabled={disabled}
        className="form-input"
        onChange={handleChange}
      />
    </div>
  );
};

export default FormRow;
