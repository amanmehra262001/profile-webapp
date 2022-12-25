import type { NextPage } from 'next';
import ContactForm from '@/components/contact-form';
import ContactAddress from '@/components/contact-address';
import Head from 'next/head';

const Contact: NextPage = () => {
  return (
    <div className="sm:ml-0 flex justify-between sm:flex-col sm:justify-center sm:item-center overflow-hidden">
      <Head>
        <title>AM | Blockchain Developer: Contact Me</title>
      </Head>
      <ContactForm />
      <div className=" w-1/2 sm:w-full mt-14 sm:mb-12 mr-14">
        <ContactAddress />
      </div>
    </div>
  );
};

export default Contact;
