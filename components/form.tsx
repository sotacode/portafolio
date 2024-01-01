import { LanguageContext } from '@/context/language/LanguageContext';
import { Button, Input, Textarea } from '@nextui-org/react'
import React, { useContext, useEffect, useState } from 'react'
import { siteConfig } from '../config/site';
import { FormContact } from '@/types';
import { validateForm } from '@/utils/common';

export const Form = () => {
  const { form } = siteConfig;
  const { language } = useContext(LanguageContext);
  const [contact, setContact] = useState<FormContact>({
    name: '',
    email: '',
    subject: '',
    description: '',
  });
  const [submitAvailable, setSubmitAvailable] = useState<Boolean>(false);
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    const validates = validateForm(contact);
    setSubmitAvailable(true);
    if (validates.name && validates.email && validates.subject && validates.description) {
      try {
        fetch('https://wixb9n2fa4.execute-api.us-east-1.amazonaws.com/send-email', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(contact),
        })
          .then((response) => response.json())
          .then((data) => {
            console.log('Success:', data);
            setContact({
              name: '',
              email: '',
              subject: '',
              description: '',
            });
            setSubmitAvailable(false);
          })
          .catch((error) => {
            console.error('Error:', error);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    }
    setIsLoading(false);
  }
  return (
    <div className='mt-7'>
      <div className="flex gap-4">
        <Input
          type="email"
          variant="bordered"
          labelPlacement='outside'
          placeholder={form[language].emailPlaceholder}
          label={form[language].email}
          value={contact.email}
          onValueChange={(value) => setContact(prev => ({ ...prev, email: value }))}
          isInvalid={submitAvailable && !validateForm(contact).email}
          color={submitAvailable && !validateForm(contact).email ? "danger" : "primary"}
          errorMessage={submitAvailable && !validateForm(contact).email && form[language].errorEmail}
        />
        <Input
          type="text"
          variant="bordered"
          labelPlacement='outside'
          placeholder={form[language].namePlaceholder}
          label={form[language].name}
          value={contact.name}
          onValueChange={(value) => setContact(prev => ({ ...prev, name: value }))}
          isInvalid={submitAvailable && !validateForm(contact).name}
          color={submitAvailable && !validateForm(contact).name ? "danger" : "primary"}
          errorMessage={submitAvailable && !validateForm(contact).name && form[language].errorName}
        />
      </div>
      <Input
        type="text"
        variant="bordered"
        labelPlacement='outside'
        placeholder={form[language].subjectPlaceholder}
        label={form[language].subject}
        value={contact.subject}
        onValueChange={(value) => setContact(prev => ({ ...prev, subject: value }))}
        isInvalid={submitAvailable && !validateForm(contact).subject}
        color={submitAvailable && !validateForm(contact).subject ? "danger" : "primary"}
        errorMessage={submitAvailable && !validateForm(contact).subject && form[language].errorSubject}
        className='mt-3'
      />
      <div className="w-full flex flex-col gap-2 mt-3">
        <Textarea
          variant="bordered"
          label={form[language].description}
          placeholder={form[language].descriptionPlaceholder}
          labelPlacement="outside"
          value={contact.description}
          onValueChange={(value) => setContact(prev => ({ ...prev, description: value }))}
          isInvalid={submitAvailable && !validateForm(contact).description}
          color={submitAvailable && !validateForm(contact).description ? "danger" : "primary"}
          errorMessage={submitAvailable && !validateForm(contact).description && form[language].errorDescription}
        />
      </div>
      <div className="w-full flex flex-col gap-2 my-3">
        <Button color='primary' className="w-full py-2 px-4 rounded" onClick={handleSubmit} isLoading={isLoading}>
          {form[language].send}
        </Button>
      </div>
    </div>
  )
}
