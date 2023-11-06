import { useState } from "react";
import { NotificationBar } from "../components/Notification";

export const ContactForm = () => {
    const [notifyState, setNotifyState] = useState(false)

    const submit = (e) => {
        setNotifyState(!notifyState)

        e.preventDefault();
    }
    return (
        <>
            <form onSubmit={e => submit(e)}>
                <div className='my-5'>
                    <input 
                    type="email" required 
                    className="w-full bg-transparent py-1 px-3 border border-gray-700 rounded-lg h-16 focus:outline-none" 
                    placeholder="Email"
                    />
                </div>
                <div className='my-5'>
                    <input 
                    type="text" required 
                    className="w-full bg-transparent py-1 px-3 border border-gray-700 rounded-lg h-16 focus:outline-none" 
                    placeholder="Subject"
                    />
                </div>
                <div className='my-5'>
                    <textarea 
                    required rows={10} 
                    className="w-full bg-transparent py-1 px-3 border border-gray-700 rounded-lg h-64 focus:outline-none" 
                    placeholder="Message"
                    />
                </div>
                <div className='my-5'>
                    <button type="submit" className="bg-green-700 h-16 w-full text-white rounded-lg">Send</button>
                </div>
            </form>

            <NotificationBar
                active={notifyState}
                onClose={() => setNotifyState(false)}
            />
        </>
    )
}
  

export const ContactDetails = () => {
    return (
        <>
            <div className="px-4 sm:px-12 py-4">
                <h2 className="text-2xl md:text-4xl font-semibold leading-8 my-4 mb-8 text-gray-800">Get in touch with us</h2>
                <div className="flex space-x-4 py-6">
                    <div>
                        <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="none"><path d="M25 13C25 10.6131 24.0518 8.32387 22.364 6.63604C20.6761 4.94821 18.3869 4 16 4C13.6131 4 11.3239 4.94821 9.63604 6.63604C7.94821 8.32387 7 10.6131 7 13C7 16.692 9.954 21.504 16 27.268C22.046 21.504 25 16.692 25 13ZM16 30C8.666 23.334 5 17.666 5 13C5 10.0826 6.15893 7.28473 8.22183 5.22183C10.2847 3.15893 13.0826 2 16 2C18.9174 2 21.7153 3.15893 23.7782 5.22183C25.8411 7.28473 27 10.0826 27 13C27 17.666 23.334 23.334 16 30Z" fill="#4B4B4B"/><path d="M16 16C16.7956 16 17.5587 15.6839 18.1213 15.1213C18.6839 14.5587 19 13.7956 19 13C19 12.2044 18.6839 11.4413 18.1213 10.8787C17.5587 10.3161 16.7956 10 16 10C15.2044 10 14.4413 10.3161 13.8787 10.8787C13.3161 11.4413 13 12.2044 13 13C13 13.7956 13.3161 14.5587 13.8787 15.1213C14.4413 15.6839 15.2044 16 16 16ZM16 18C14.6739 18 13.4021 17.4732 12.4645 16.5355C11.5268 15.5979 11 14.3261 11 13C11 11.6739 11.5268 10.4021 12.4645 9.46447C13.4021 8.52678 14.6739 8 16 8C17.3261 8 18.5979 8.52678 19.5355 9.46447C20.4732 10.4021 21 11.6739 21 13C21 14.3261 20.4732 15.5979 19.5355 16.5355C18.5979 17.4732 17.3261 18 16 18Z" fill="#4B4B4B"/></svg>
                    </div>
                    <div className="text-gray-600">
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
                    </div>
                </div>
                <div className="flex space-x-4 py-6">
                    <div>
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.9998 29H25.8298C6.17976 27.87 3.38976 11.29 2.99976 6.23C2.96833 5.83658 3.01485 5.44082 3.13663 5.06541C3.25842 4.69 3.45309 4.3423 3.70948 4.04225C3.96587 3.7422 4.27894 3.49569 4.63077 3.31684C4.98259 3.13799 5.36625 3.03032 5.75976 3H11.2698C11.6703 2.99961 12.0618 3.11951 12.3934 3.34416C12.725 3.56881 12.9816 3.88787 13.1298 4.26L14.6498 8C14.7961 8.36355 14.8324 8.76208 14.7542 9.14609C14.676 9.5301 14.4867 9.88267 14.2098 10.16L12.0798 12.31C12.4125 14.2007 13.3179 15.9437 14.6737 17.303C16.0294 18.6622 17.7699 19.5723 19.6598 19.91L21.8298 17.76C22.1113 17.4862 22.4671 17.3013 22.853 17.2283C23.2389 17.1554 23.6378 17.1977 23.9998 17.35L27.7698 18.86C28.1363 19.0129 28.449 19.2714 28.668 19.6027C28.8871 19.9339 29.0026 20.3229 28.9998 20.72V26C28.9998 26.7956 28.6837 27.5587 28.1211 28.1213C27.5585 28.6839 26.7954 29 25.9998 29ZM5.99976 5C5.73454 5 5.48019 5.10536 5.29265 5.29289C5.10512 5.48043 4.99976 5.73478 4.99976 6V6.08C5.45976 12 8.40976 26 25.9398 27C26.0711 27.0081 26.2028 26.9902 26.3273 26.9473C26.4517 26.9045 26.5665 26.8374 26.6649 26.7501C26.7634 26.6628 26.8437 26.5568 26.9011 26.4384C26.9586 26.32 26.9921 26.1914 26.9998 26.06V20.72L23.2298 19.21L20.3598 22.06L19.8798 22C11.1798 20.91 9.99976 12.21 9.99976 12.12L9.93976 11.64L12.7798 8.77L11.2798 5H5.99976Z" fill="#4B4B4B"/></svg>
                    </div>
                    <div className="text-gray-600">
                        <p>+234 8185654614</p>
                        <p>+234 8185654614</p>
                    </div>
                </div>
                <div className="flex space-x-4 py-6">
                    <div>
                        <svg className="w-8 h-8" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M29 5H3C2.44687 5 2 5.44687 2 6V26C2 26.5531 2.44687 27 3 27H29C29.5531 27 30 26.5531 30 26V6C30 5.44687 29.5531 5 29 5ZM27.75 8.4625V24.75H4.25V8.4625L3.3875 7.79063L4.61562 6.2125L5.95312 7.25313H26.05L27.3875 6.2125L28.6156 7.79063L27.75 8.4625ZM26.05 7.25L16 15.0625L5.95 7.25L4.6125 6.20937L3.38438 7.7875L4.24687 8.45938L14.9219 16.7594C15.2289 16.9979 15.6066 17.1273 15.9953 17.1273C16.3841 17.1273 16.7618 16.9979 17.0688 16.7594L27.75 8.4625L28.6125 7.79063L27.3844 6.2125L26.05 7.25Z" fill="#4B4B4B"/></svg>
                    </div>
                    <div className="text-gray-600">
                        mrexcelsam1@gmail.com
                    </div>
                </div>
            </div>
        </>
    )
}