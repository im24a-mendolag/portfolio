import * as React from 'react';

export function EmailTemplate({ name, email, message }) {
  return (
    <div>
      <h1>New Contact Form Submission</h1>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Message:</strong></p>
      <p>{message}</p>
    </div>
  );
}
