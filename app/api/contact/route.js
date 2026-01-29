import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { contactInfo } from '@/data/contact';
import { EmailTemplate } from '@/components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'portfolio@email.mendolag.ch',
      to: contactInfo.email,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

    // Log successful submission
    console.log('Contact form submission sent:', {
      name,
      email,
      messageId: data?.id,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Contact form error:', error);
    
    // Provide more specific error messages
    if (error.message?.includes('API key')) {
      return NextResponse.json(
        { error: 'Email service configuration error. Please try again later.' },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again later.' },
      { status: 500 }
    );
  }
}
