import React from 'react';

const DonationForm = () => {

    const handleDonation = (e) => {
        const donateInfo = {
            currency: "usd",
            amount: e.target[2].value * 100,
            automatic_payment_methods: { enabled: true }
        }
        sessionStorage.setItem('donateInfo', JSON.stringify(donateInfo));
        
        window.location.reload();

        e.preventDefault();
    };
    return (
        <div className='w-full max-w-sm bg-white border rounded-lg shadow sm:p-6 max-md:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700'>
            <form onSubmit={handleDonation} className='space-y-6'>
                <h5 class="text-xl font-medium text-gray-900 dark:text-white">Give Your Hand With Us</h5>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="donar-name">Full Name</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="donar-name" type="text" placeholder="Type Your Name" required />
                </div>
                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="donar-email">Username or Email</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="donar-email" type="text" placeholder="Type Your Email" required />
                </div>

                <div>
                    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="donate-amount">Amount of Donation</label>
                    <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" id="donate-amount" type="number" placeholder="Type the amount" required />
                </div>
                <div className=" w-full flex ml-2 mb-6">
                    <div className=""></div>
                    <label className="md:w-2/3 block text-gray-500 font-bold">
                        <input className="leading-tight" type="checkbox" />
                        <span className="text-sm ml-1">
                            Disagree to Introduce myself
                        </span>
                    </label>
                </div>
                <button type="submit" className="md:w-full sm:w-auto my-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">submit</button>
            </form>
        </div>
    );
};

export default DonationForm;