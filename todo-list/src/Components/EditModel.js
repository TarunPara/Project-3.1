import React from 'react';
import axios from 'axios'
import { useForm } from 'react-hook-form'

function EditModel({ closeModal, editTask, defaultValues }) {
    const form = useForm({defaultValues:defaultValues});
    
    const { register, handleSubmit } = form;
    const onSubmit = (data) => {
        console.log('submitted', data);
        closeModal();
        editTask(defaultValues.id, data)
    }


    return (
        <div className='fixed inset-0 flex items-center justify-center  bg-black bg-opacity-50 z-50 overflow-y-auto'>
            <div className="bg-white my-32  p-5 rounded-lg overflow-y-auto  w-full md:w-1/2">

                <div className="flex items-center justify-between border-b pb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Add new</h3>
                    <button type="button" className="text-gray-400 hover:bg-gray-200 hover:text-gray-900 rounded-lg w-8 h-8 flex justify-center items-center" onClick={closeModal}>
                        <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14" >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                        </svg>

                    </button>
                </div>
                <form className="mt-4" onSubmit={handleSubmit(onSubmit)}>
                    <div className="max-w-md mx-auto">
                        <div className='flex flex-col space-y-4 mx-auto my-10 mb-4'>
                            <div>
                                <label htmlFor="title" class="block text-sm font-medium text-gray-700">Title</label>
                                <input type="text" id="title" name='title' {...register("title")} class="mt-1 block w-full rounded-md border-gray-300 outline-none shadow-sm   sm:text-sm" />
                            </div>

                            <div>
                                <label htmlFor="description" class="block text-sm font-medium text-gray-700">Description</label>
                                <textarea id="description" name="description" {...register("description")} rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none"></textarea>
                            </div>

                            <div>
                                <label htmlFor="date" class="block text-sm font-medium text-gray-700">Date</label>
                                <input type="date" id="date" name="date" {...register("date")} class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none" />
                            </div>

                            <div>
                                <label htmlFor="category" class="block text-sm font-medium text-gray-700">Category</label>
                                <select id="category" name="category" {...register("category")} class="mt-1 mb-10 block w-full rounded-md border-gray-700 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm outline-none" >
                                    <option value="Marketing">Marketing</option>
                                    {/* <!-- Add more <option> tags for other categories here --> */}
                                </select>
                            </div>
                            <div className=''>

                                <button type='submit' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" >
                                    Confirm
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
                {/* </div> */}
            </div>
        </div>
    );
}

export default EditModel;
