const FormInput = ({ onChange, type, name, labelName }) => {
  return (
    <div className="user-box">
      <input type={type} name={name} onChange={onChange} />
      <label>{labelName}</label>
    </div>
  );
};
export default FormInput;
