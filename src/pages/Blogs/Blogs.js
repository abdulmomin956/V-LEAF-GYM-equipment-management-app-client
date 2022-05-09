import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center'>Frequenctly Asked Questions</h1>
            <section className='mx-auto' style={{ width: '80%' }}>
                <div className='mt-4'>
                    <h4>What is the difference between javascript and nodejs?</h4>
                    <table className='w-100 simple-table'>
                        <thead>
                            <tr>
                                <th className='w-50'>Javascript</th>
                                <th>Nodejs</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Javascript is a programming language that is used for writing scripts on the website. </td>
                                <td>NodeJS is a Javascript runtime environment.</td>
                            </tr>
                            <tr>
                                <td>Javascript can only be run in the browsers.</td>
                                <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                            </tr>
                            <tr>
                                <td>It is basically for the client-side.</td>
                                <td>It is for the server-side.</td>
                            </tr>
                            <tr>
                                <td>Javascript is used in frontend development.</td>
                                <td>Nodejs is used in server-side development.</td>
                            </tr>
                            <tr>
                                <td>Some of the javascript frameworks are RamdaJS, TypedJS, etc. </td>
                                <td>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div></div>
                <div></div>
            </section>
        </div>
    );
};

export default Blogs;