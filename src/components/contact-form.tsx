// 🔧ToDo :  proper links to all sociols

import UtilityButton from '@/ui/utilityButton';
import styles from '@/styles/External.module.css';
import { database as db } from '@/firebase/firebase-config';
import { doc, setDoc } from 'firebase/firestore';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');

  const handleClick = (e: any) => {
    try {
      if (
        firstName == '' ||
        lastName == '' ||
        subject == '' ||
        description == ''
      ) {
        toast.error('Fields can not be empty. Please fill all fields.');
        return;
      } else {
        e.preventDefault();
        const docRef = doc(db, 'Connections', Date.now().toString());
        setDoc(docRef, {
          firstName: firstName,
          lastName: lastName,
          subject: subject,
          description: description,
        });
        setFirstName('');
        setLastName('');
        setSubject('');
        setDescription('');
        toast.success('Your message is recieved!');
        return;
      }
    } catch (error: any) {
      toast.error('Some error occured', error.message);
      return;
    }
  };

  const handleChange = (e: any) => {
    e.preventDefault();
    switch (e.target.name) {
      case 'firstName':
        setFirstName(e.target.value);
        break;
      case 'lastName':
        setLastName(e.target.value);
        break;
      case 'subject':
        setSubject(e.target.value);
        break;
      case 'description':
        setDescription(e.target.value);
        break;
    }
  };
  return (
    <>
      <ToastContainer />
      <form className="w-full ml-4 sm:w-11/12 flex flex-col justify-self-center mb-10 sm:mr-14">
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
        <div className="w-4/5 sm:w-full flex flex-col font-mono italic mt-2 text-lg sm:text-sm text-indigo-200">
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
              value={firstName}
              onChange={handleChange}
              className={`${styles.shadowing} w-1/2 bg-slate-500 px-5 py-3 mr-2 rounded hover:border-2 hover:border-teal-300 animate-fadeIn`}
              placeholder="First Name"
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              className={`${styles.shadowing} w-1/2 bg-slate-500 px-5 py-3 rounded hover:border-2 hover:border-teal-300 animate-fadeIn`}
              placeholder="Last Name"
            />
          </div>
          <input
            type="text"
            name="subject"
            value={subject}
            onChange={handleChange}
            className={`${styles.shadowing} w-full bg-slate-500 px-5 py-3 rounded mt-2 hover:border-2 hover:border-teal-300 animate-fadeIn`}
            placeholder="Subject"
          />
          <textarea
            // type="text"
            name="description"
            value={description}
            onChange={handleChange}
            // height={100}
            className={`${styles.shadowing} w-full bg-slate-500 px-5 py-3 rounded mt-2 hover:border-2 hover:border-teal-300 animate-fadeIn`}
            placeholder="Description"
            required
          />
          <div className="w-full animate-fadeIn" onClick={handleClick}>
            <UtilityButton name="Submit" linked="/contact" width="w-1/2" />
          </div>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
