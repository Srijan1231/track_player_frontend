import { Plus } from "lucide-react";
import { useState } from "react";
import Input from "./Input";


const AddMusic = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [form, setForm] = useState({});
    const [track, setTrack] = useState([]);

    const onClick = () => {
        return setIsOpen(true);
    };

    const input = [
        {
            name: "title",
            label: "Title",
            type: 'text',
            placeholder: " Your track title ",
        },



    ];
    const handleOnChange = (e) => {
        let { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });


    };
    const handleOnTrackAttached = (e) => {
        const { files } = e.target;
        setTrack(files);
    };
    const handleOnSubmit = (e) => {
        e.preventDefault();

        const formDt = new FormData();

        for (let key in form) {
            formDt.append(key, form[key]);
        }
        if (track.length > 0) {
            formDt.append("mp3", track[0]);  // Add only the first file directly
        }

        console.log(formDt);
    };
    return (
        <div className="w-full h-full">
            <div className="border border-dashed border-gray-500 h-full">
                {isOpen === false ? <div className="w-full h-full flex flex-col items-center justify-center">
                    <button onClick={onClick} className="p-3 m-4 w-20 h-20 border border-dashed border-gray-600 rounded-md flex items-center justify-center"><Plus /></button>
                    <p>Add your music here</p>

                </div> : <div>

                    <div className=" flex items-center justify-center w-full ">
                        <div className=" shadow-md rounded-lg px-8 py-6 max-w-md">
                            <h1 className="text-2xl font-bold text-center mb-4 ">Add Your Music  !!!</h1>
                            <form encType="multipart/form-data" onSubmit={handleOnSubmit} >
                                <div className="mb-4">
                                    {input.map((input) => <Input key={input.label} name={input.name} label={input.label} type={input.type} placeholder={input.placeholder} aria-label='input' handleOnChange={handleOnChange} />)}
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700  mb-2">
                                        Add your track here
                                    </label>
                                    <input
                                        type='file'
                                        name='mp3'
                                        className="shadow-sm rounded-md w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                        placeholder='Track'
                                        required
                                        onChange={handleOnTrackAttached}
                                    />
                                </div>


                                <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Add Track</button>
                            </form>
                        </div>
                    </div>
                </div>}

            </div>


        </div >
    );
};

export default AddMusic;
