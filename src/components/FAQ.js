import React from 'react';

const FAQ = () => {
    return (
        <section className="h-screen dark:bg-gray-800 dark:text-gray-100" >
            <div className="container flex flex-col justify-center p-4 mx-auto md:p-8" >
                <p className="p-2 text-sm font-medium tracking-wider text-center uppercase" >How it works</p>
                <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl" >Frequently Asked Questions</h2>
                <div className="flex flex-col divide-y sm:px-8 lg:px-12 xl:px-32 divide-gray-700" >
                    <details >
                        <summary className="py-2 outline-none cursor-pointer focus:underline" > What is a Firebase project?</summary>
                        <div className="px-4 pb-4" >
                            <p >A project is a container for apps across Apple, Android, and web platforms. It supports sharing of features such as Database, Config and Notifications between your cross-platform apps.
                                You should add Apple, Android and web app variants to a single project. You can use multiple projects to support multiple environments, such as development, staging and production.</p>
                        </div>
                    </details>
                    <details >
                        <summary className="py-2 outline-none cursor-pointer focus:underline" >Where can I find the App ID for my Firebase app? </summary>
                        <div className="px-4 pb-4" >
                            <p >n the Firebase console, go to your settings Project settings. Scroll down to the Your apps card, then click on the desired Firebase App to view the app's information, including its App ID.

                                Here are some example App ID values:

                                <li>Firebase iOS Apps: 1:1234567890:ios:321abc456def7890</li>
                                Firebase Android Apps: 1:1234567890:android:321abc456def7890
                                <li></li>
                                <li>Firebase Web Apps: 1:1234567890:web:321abc456def7890</li>
                            </p>
                        </div>
                    </details>
                    <details >
                        <summary className="py-2 outline-none cursor-pointer focus:underline" >How many projects can I have per account? </summary>
                        <div className="px-4 pb-4 space-y-2" >
                            <p >Spark pricing plan — Your project quota is limited to a small number of projects (usually around 5-10).</p>
                            <p >Blaze pricing plan — Your project quota per Cloud Billing account increases substantially as long as your Cloud Billing account is in good standing.</p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
};

export default FAQ;