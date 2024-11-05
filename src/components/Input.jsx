// eslint-disable-next-line react/prop-types
const Input = ({ label, type, name, placeholder }) => {
  return (
    <>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <input
        type={type}
        name={name}
        className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
