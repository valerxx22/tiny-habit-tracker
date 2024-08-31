import React from 'react';
import { Alert } from 'flowbite-react';
import ErrorMessageProps from './@types/ErrorMessageProps';

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return message && (
    <Alert color="failure" className="mb-4">
      <span>{message}</span>
    </Alert>
  );
};

export default ErrorMessage;