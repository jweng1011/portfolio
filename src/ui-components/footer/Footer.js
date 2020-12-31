import { React } from 'react';
import { Button } from '../button/Button';

export function Footer() {
    // const [copySuccess, setCopySuccess] = useState(false);
    // const [showModal, setShowModal] = useState(false);

    return (
        <div className={`bg-gray-100 pb-20 space-y-3`}>
            <div className={`md:max-w-2xl md:m-auto h-full w-full p-8 `}>
                <div className={`flex-row flex justify-between space-x-6`}>
                    <div>
                        <h2>Want to work together?</h2>
                        <p>Please don't hesitate to reach out!</p>
                    </div>
                    <Button to="/">Connect with me!</Button>
                    {/* <div>
                        <Button onMouseEnter={() => setShowModal(true)}
                            onMouseLeave={() => setShowModal(false)}
                            onClick={() => navigator.clipboard.writeText('jennifer.weng@tufts.edu') && setCopySuccess(true)}>
                            Connect with me!
                        </Button>
                        {showModal === true && (
                            <div className={`px-2 rounded-md shadow-md bg-gradient-to-r from-indigo-400 to-blue-500`}>
                                <p className={`text-sm text-white font-bold`}>Copy me! 📋</p>
                            </div>
                        ) && console.log("worked")}
                    </div> */}
                </div>
                <p className={`pt-20`}>© 2020 Jennifer Weng</p>
            </div>
        </div>
    )
}