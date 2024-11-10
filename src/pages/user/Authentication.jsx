import { useParams } from "react-router-dom";
import Input from "../../components/Input";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { signInUserAction } from "../../state/user/userAction";

const Authentication = () => {
  const { authParams } = useParams();
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const registerInput = [
    {
      name: "fName",
      label: "First Name",
      type: 'text',
      placeholder: " Your Given name",
    },
    {
      name: "lName",
      label: "Last Name",
      type: 'text',
      placeholder: " Your Family name",


    },
    {
      name: "phone",
      label: "Phone number",
      type: 'number',
      placeholder: "Phone number(+61)",



    },
    {
      name: "address",
      label: "Address",
      type: 'address',
      placeholder: "Address(Unit , Street, State,Post code",



    },
    {
      name: "email",
      label: "Email",
      type: 'email',
      placeholder: "Email(john@doe.com)",



    },
    {
      name: "password",
      label: "Password",
      type: 'password',
      placeholder: "Password",



    },

  ];
  const loginInput = [
    {
      name: "email",
      label: "Email",
      type: 'email',
      placeholder: "Email(john@doe.com)",



    },
    {
      name: "password",
      label: "Password",
      type: 'password',
      placeholder: "Password",



    },
  ];



  const inputField = authParams === 'login' ? loginInput : registerInput;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();

    authParams === 'login' ? dispatch(signInUserAction(form)) : console.log(form);
    console.log(form);

  };

  return (

    <div className="min-h-screen flex items-center justify-center w-full ">
      <div className="bg-white  shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 ">
          Welcome Back!
        </h1>
        <form onSubmit={handleOnSubmit}>
          <div className="mb-4">
            {inputField.map((input) =>
              <Input key={input.name} name={input.name} label={input.label} type={input.type} placeholder={input.placeholder} aria-label='input' handleOnChange={handleOnChange} />

            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {authParams === "login" ? "Login" : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
