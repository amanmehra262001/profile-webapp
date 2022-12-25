// 🔧ToDo : toast on form submission, clear form on submission, proper links to all sociols

import UtilityButton from '@/ui/utilityButton';
import styles from '@/styles/External.module.css';
import { database as db } from '@/firebase/firebase-config';
import { doc, setDoc, Timestamp } from 'firebase/firestore';
import { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = (e: any) => {
    e.preventDefault();
    const docRef = doc(db, 'Connections', Date.now().toString());
    setDoc(docRef, {
      firstName: firstName,
      lastName: lastName,
      subject: subject,
      description: description,
    });
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
      case 'lastName':
        setLastName(e.target.value);
      case 'subject':
        setSubject(e.target.value);
      case 'description':
        setDescription(e.target.value);
    }
  };
  return (
    <form className="w-full sm:w-4/5 flex flex-col justify-self-center ml-5 mb-10 sm:mr-14">
      <p className="w-full text-xxxxxl sm:text-xxl flex font-semibold mt-12 sm:mt-0 animate-fadeIn font-serif text-teal-300 cursor-none">
        {/* {text.map((letter, i) => (
          <div className="flex" key={i}>
            <p className="font-serif hover:animate-wiggle text-teal-300 cursor-none">
              {letter}
            </p>
          </div>
        ))} */}
        Contact Me
      </p>
      <div className="w-1/2 sm:w-full flex flex-col font-mono italic mt-2 ml-7 sm:ml-4 text-lg sm:text-sm text-indigo-200">
        <p className="mb-2 text-xl font-bold not-italic animate-fadeIn">
          Drop me a line
        </p>
        <p className="mb-10 animate-fadeIn">
          I’m interested in opportunities – especially ambitious or large
          projects. However, if you have other request or question, don’t
          hesitate to use the form.
        </p>
        <div className="flex">
          <input
            type="text"
            name="firstName"
            onChange={handleChange}
            className={`${styles.shadowing} w-1/2 bg-slate-500 px-5 py-3 mr-2 rounded hover:border-2 hover:border-teal-300 animate-fadeIn`}
            placeholder="First Name"
          />
          <input
            type="text"
            name="lastName"
            onChange={handleChange}
            className={`${styles.shadowing} w-1/2 bg-slate-500 px-5 py-3 rounded hover:border-2 hover:border-teal-300 animate-fadeIn`}
            placeholder="Last Name"
          />
        </div>
        <input
          type="text"
          name="subject"
          onChange={handleChange}
          className={`${styles.shadowing} w-full bg-slate-500 px-5 py-3 rounded mt-2 hover:border-2 hover:border-teal-300 animate-fadeIn`}
          placeholder="Subject"
        />
        <input
          type="text"
          name="description"
          onChange={handleChange}
          className={`${styles.shadowing} w-full bg-slate-500 px-5 py-3 rounded mt-2 hover:border-2 hover:border-teal-300 animate-fadeIn`}
          placeholder="Description"
        />
        <div className="w-full animate-fadeIn" onClick={handleClick}>
          <UtilityButton name="Submit" linked="/contact" width="w-1/2" />
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
