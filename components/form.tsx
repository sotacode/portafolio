import { LanguageContext } from '@/context/language/LanguageContext';
import { Button, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Spinner, Textarea, useDisclosure } from '@nextui-org/react'
import React, { useContext, useEffect, useState } from 'react'
import { siteConfig } from '../config/site';
import { FormContact } from '@/types';
import { validateForm } from '@/utils/common';
import { FaRegCheckCircle } from "react-icons/fa";
import { FaRegTimesCircle } from "react-icons/fa";

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
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [thereIsError, setThereIsError] = useState(false)


  const handleSubmit = (e: any) => {
    e.preventDefault();
    const validates = validateForm(contact);
    setSubmitAvailable(true);
    if (validates.name && validates.email && validates.subject && validates.description) {
      setIsLoading(true);
      try {
        fetch('https://9imqujjq1g.execute-api.us-east-1.amazonaws.com/send-email', {
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
            setThereIsError(false);
            onOpen();
            setIsLoading(false);
          })
          .catch((error) => {
            console.error('Error:', error);
            setThereIsError(true);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
        setThereIsError(true);
        onOpen();
        setIsLoading(false);
      }
    }
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
        <Button color='primary' className="w-full py-2 px-4 rounded" onClick={handleSubmit}>
          {isLoading ? <Spinner color="warning" className='' /> : form[language].send}
        </Button>
      </div>
      <>
        <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
          <ModalContent>
            {(onClose) => (
              <>
                <ModalBody className='text-center justify-center'>
                  <p className='text-2xl'>
                    {!thereIsError ? form[language].modalMessage : form[language].modalErrorMesage}
                  </p>
                  <p className='text-xl'>
                    {!thereIsError ? form[language].modalDescription : form[language].modalErrorDescription}
                  </p>
                  <div className='my-5'>
                    {!thereIsError ? <FaRegCheckCircle color='green' size='200' className='mx-auto' /> : <FaRegTimesCircle color="red" size='200' className='mx-auto' />}
                  </div>

                </ModalBody>
                <ModalFooter className='justify-center'>
                  <Button color="primary" onPress={onClose}>
                    {form[language].buttonCloseModal}
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
      </>
    </div>

  )
}
