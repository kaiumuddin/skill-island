import React from 'react';

const Blog = () => {
    return (
        <div className="w-full bg-white dark:bg-gray-800 h-full flex flex-col gap-2 p-4">
            <div className="w-full flex mx-auto p-6 divide-y xl:divide-y-0 xl:divide-x bg-gray-100 dark:bg-gray-900 dark:text-gray-100 divide-gray-700" >
                <div className="p-3 space-y-1 xl:ml-6" >
                    <h3 className="text-3xl font-semibold" >What is CORS ?</h3>
                    <p className="text-sm dark:text-gray-400" >Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. CORS also relies on a mechanism by which browsers make a "preflight" request to the server hosting the cross-origin resource, in order to check that the server will permit the actual request. In that preflight, the browser sends headers that indicate the HTTP method and headers that will be used in the actual request.

                        An example of a cross-origin request: the front-end JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

                        For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy. This means that a web application using those APIs can only request resources from the same origin the application was loaded from unless the response from other origins includes the right CORS headers.</p>
                </div>
            </div>
            <div className="w-full flex mx-auto p-6 divide-y xl:divide-y-0 xl:divide-x bg-gray-100 dark:bg-gray-900 dark:text-gray-100 divide-gray-700" >
                <div className="p-3 space-y-1 xl:ml-6" >
                    <h3 className="text-3xl font-semibold" >Why are you using firebase?</h3>
                    <p className="text-sm dark:text-gray-400" >The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code.Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience.</p>
                    <h3 className="text-3xl font-semibold " >What other options do you have to implement authentication?</h3>
                    <p className="text-sm dark:text-gray-400" >
                        <ul>Facebook</ul>
                        <ul>Twitter</ul>
                        <ul>Play Games</ul>
                        <ul>Game Center</ul>
                        <ul>Apple</ul>
                        <ul>Microsoft</ul>
                        <ul>Yahoo</ul>
                        <ul>Phone</ul>
                        <ul>Anonymous</ul>
                    </p>
                </div>
            </div>
            <div className=" w-full flex mx-auto  p-6 divide-y xl:divide-y-0 xl:divide-x bg-gray-100 dark:bg-gray-900 dark:text-gray-100 divide-gray-700" >
                <div className="p-3 space-y-1 xl:ml-6" >
                    <h3 className="text-3xl font-semibold" >How does the private route work?</h3>
                    <p className="text-sm dark:text-gray-400" >There will be a private route page. Then we have to pass children to that private route. Private route will conditionally render the children</p>
                </div>
            </div>
            <div className="w-full flex mx-auto p-6 divide-y xl:divide-y-0 xl:divide-x bg-gray-100 dark:bg-gray-900 dark:text-gray-100 divide-gray-700" >
                <div className="p-3 space-y-1 xl:ml-6" >
                    <h3 className="text-3xl font-semibold" >What is Node?</h3>
                    <p className="text-sm dark:text-gray-400" >Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.</p>
                    <h3 className="text-3xl font-semibold" >How does Node work?</h3>
                    <p className="text-sm dark:text-gray-400" > Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.</p>
                </div>
            </div>

        </div >
    );
};

export default Blog;