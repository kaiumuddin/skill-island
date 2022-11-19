import React from 'react';

const AddCourse = () => {


    //  Submit 
    const handleSubmit = event => {
        event.preventDefault();

        const form = event.target;

        const name = form.name.value;
        const duration = form.duration.value;
        const img = form.img.value;
        const description = form.description.value;

        console.log(name);

        const newCourse = {
            name,
            duration,
            img,
            description
        };


        const url = `http://localhost:5000/addcourse`;


        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(newCourse)
        })
            .then(res => res.json())
            .then(fromDb => {
                if (fromDb.acknowledged) {
                    // toast.success('Service Added Successfully');
                    console.log("Succenss");
                    form.reset();
                }
            })
            .catch(err => {
                console.error(err);
                // toast.error('Service Added failed');
            });
    };


    return (
        <div className="flex justify-center bg-white dark:bg-gray-800 mt-10">
            <div className="w-full max-w-2xl p-8 space-y-3 rounded-xl drop-shadow-2xl bg-white dark:bg-gray-900 dark:text-gray-100"  >
                <h1 className="text-2xl font-bold text-center"  >Add Course</h1>
                <form onSubmit={handleSubmit} action="" className="space-y-6 ng-untouched ng-pristine ng-valid"  >

                    <div className="space-y-1 text-sm"  >
                        <label htmlFor="username" className="block dark:text-gray-400"  >Course title</label>
                        <input type="text" name="name" id="name" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm"  >
                        <label htmlFor="username" className="block dark:text-gray-400"  >Course duration</label>
                        <input type="text" name="duration" id="duration" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm"  >
                        <label htmlFor="username" className="block dark:text-gray-400"  >Course image</label>
                        <input type="text" name="img" id="img" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>
                    <div className="space-y-1 text-sm"  >
                        <label htmlFor="username" className="block dark:text-gray-400"  >Course description</label>
                        <input type="text" name="description" id="description" className="w-full px-4 py-3 rounded-md border border-solid border-gray-300 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-100 focus:dark:border-violet-400" />
                    </div>

                    <button type="submit" className="block w-full p-3 text-center rounded-lg bg-violet-100 hover:bg-violet-200 dark:text-gray-900 dark:bg-violet-400"  >Add Course</button>
                </form>
            </div>
        </div>
    );
};


export default AddCourse;