import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h1 className='text-center text-4xl text-bold mb-4'>Question Part Needed Assainment given below</h1>
            <div className='bg-purple-400 border rounded p-5 mb-2'>
                <h1>Difference between SQL and NoSQL??</h1>
                <p><span>Answer:</span>The main difference between SQL and NoSQL is that they are known as relational and non-relational database structures, respectively, that are used in different modes for implementing and manipulating data.</p>
            </div>
            <div className='bg-yellow-300 border rounded p-5 mb-2'>
                <h1>What is JWT?</h1>
                <p><span>Answer:</span>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.</p>
                <h1>How does JWT work?</h1>
                <p><span>Answer:</span>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
            </div>
            <div className='bg-blue-400 border rounded p-5 mb-2'>
                <h1>What is the difference between javascript and NodeJS?</h1>
                <p><span>Answer:</span>Difference between JavaScript and Node.js JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser.</p>
            </div>
            <div className='bg-green-400 border rounded p-5 mb-2'>
                <h1>How does NodeJS handle multiple requests at the same time?</h1>
                <p><span>Answer:</span>You are apparently misunderstanding how node.js, asynchronous operations and promises work. Assuming your long running asynchronous operations are all properly written with asynchronous I/O, then neither your requestAsync1(params) or requestAsync2(params) calls are blocking. That means that while you are waiting for Promise.all() to call its .then() handler to signify that both of those asynchronous operations are complete, node.js is perfectly free to run any other events or incoming requests. Promises themselves do not block, so the node.js event system is free to process other events. So, you either don't have a blocking problem at all or if you actually do, it is not caused by what you asked about here.</p>
            </div>
            
        </div>
    );
};

export default Blogs;