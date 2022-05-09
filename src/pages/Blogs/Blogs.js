import React from 'react';
import './Blogs.css'

const Blogs = () => {
    return (
        <div style={{ minHeight: '90vh' }}>
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
                <div className='mt-4'>
                    <h4>When should you use nodejs and when should you use mongodb?</h4>
                    <p><b>Nodejs</b> is a javascript engine. We use it to make an web application. It runs our javascript code. It is used mostly as a web server. We use it to make express server. With that we can interact to our client site and connect to any database like Mongodb, MySQL etc.<br />
                        <b> MongoDB</b> is a database engine. Code within some application or server uses MongoDB to save, query or update data in a database. There are many web servers built with nodejs that will then use MongoDB for storing data. MongoDB offers an API library that runs within a Nodejs application to give you programmatic access to MongoDB so you can create databases and then add, query, update or delete data from the MongoDB database. MongoDB also has API libraries for other programming environments such as Python, Java, etc</p>
                </div>
                <div className='mt-4'>
                    <h4>Differences between SQL and NoSQL databases?</h4>
                    <table className='simple-table w-100'>
                        <thead>
                            <tr>
                                <th className='w-50'>SQL</th>
                                <th>NoSQL</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>It's RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                <td>It's non-relational or distributed database system.</td>
                            </tr>
                            <tr>
                                <td>Vertically Scalable</td>
                                <td>Horizontally scalable</td>
                            </tr>
                            <tr>
                                <td>These databases are best suited for complex queries</td>
                                <td>These databases are not so good for complex queries</td>
                            </tr>
                            <tr>
                                <td>Follows ACID property</td>
                                <td>Follows CAP(consistency, availability, partition tolerance)</td>
                            </tr>
                            <tr>
                                <td>These databases have fixed or static or predefined schema</td>
                                <td>They have dynamic schema</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default Blogs;