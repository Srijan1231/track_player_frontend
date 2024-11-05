import Input from "../Input";

const Authentication = () => {
  const input = [
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
  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 dark:text-gray-200">
          Welcome Back!
        </h1>
        <form>
          <div className="mb-4">
            {input.map((input) =>
              <Input key={input.name} name={input.name} label={input.label} type={input.type} placeholder={input.placeholder} aria-label='input' />

            )}
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
