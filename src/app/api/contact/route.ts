import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { z } from 'zod';
import rateLimit from '@/lib/rate-limit';
import { sanitizeInput } from '@/lib/security';

// Initialize email service
const resend = new Resend(process.env.RESEND_API_KEY);

// Rate limiting configuration
const limiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500, // Max 500 users per window
});

// Contact form validation schema
const ContactFormSchema = z.object({
  name: z.string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name contains invalid characters'),
  
  email: z.string()
    .email('Please enter a valid email address')
    .max(254, 'Email address is too long'),
  
  phone: z.string()
    .regex(/^[\+]?[1-9][\d]{0,15}$/, 'Please enter a valid phone number')
    .optional()
    .or(z.literal('')),
  
  service: z.string()
    .max(100, 'Service selection is too long')
    .optional(),
  
  timeline: z.string()
    .max(50, 'Timeline selection is too long')
    .optional(),
  
  budget: z.string()
    .max(50, 'Budget selection is too long')
    .optional(),
  
  details: z.string()
    .max(2000, 'Message is too long (max 2000 characters)')
    .optional(),
  
  hearAbout: z.string()
    .max(100, 'Source selection is too long')
    .optional(),
  
  // Honeypot field for spam prevention
  website_url: z.string().optional(),
});

// Email template for contact form submissions
function generateEmailTemplate(data: any) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Contact Form Submission</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0A3A2E; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #0A3A2E; }
        .value { margin-top: 5px; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Form Submission</h1>
          <p>Montana Finish Carpenter</p>
        </div>
        
        <div class="content">
          <div class="field">
            <div class="label">Name:</div>
            <div class="value">${data.name}</div>
          </div>
          
          <div class="field">
            <div class="label">Email:</div>
            <div class="value">${data.email}</div>
          </div>
          
          ${data.phone ? `
          <div class="field">
            <div class="label">Phone:</div>
            <div class="value">${data.phone}</div>
          </div>
          ` : ''}
          
          ${data.service ? `
          <div class="field">
            <div class="label">Service Interested In:</div>
            <div class="value">${data.service}</div>
          </div>
          ` : ''}
          
          ${data.timeline ? `
          <div class="field">
            <div class="label">Project Timeline:</div>
            <div class="value">${data.timeline}</div>
          </div>
          ` : ''}
          
          ${data.budget ? `
          <div class="field">
            <div class="label">Budget Range:</div>
            <div class="value">${data.budget}</div>
          </div>
          ` : ''}
          
          ${data.details ? `
          <div class="field">
            <div class="label">Project Details:</div>
            <div class="value">${data.details.replace(/\n/g, '<br>')}</div>
          </div>
          ` : ''}
          
          ${data.hearAbout ? `
          <div class="field">
            <div class="label">How did they hear about us:</div>
            <div class="value">${data.hearAbout}</div>
          </div>
          ` : ''}
          
          <div class="field">
            <div class="label">Submitted:</div>
            <div class="value">${new Date().toLocaleString('en-US', { 
              timeZone: 'America/Denver',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} (MT)</div>
          </div>
        </div>
        
        <div class="footer">
          <p>This email was sent from the Montana Finish Carpenter contact form.</p>
          <p>Please respond within 24 hours for the best customer experience.</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Auto-reply email template
function generateAutoReplyTemplate(name: string) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Thank You for Contacting Montana Finish Carpenter</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: #0A3A2E; color: white; padding: 20px; text-align: center; }
        .content { background: #f9f9f9; padding: 20px; }
        .footer { background: #333; color: white; padding: 15px; text-align: center; font-size: 12px; }
        .cta { background: #0A3A2E; color: white; padding: 15px; text-align: center; margin: 20px 0; }
        .cta a { color: white; text-decoration: none; font-weight: bold; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Thank You, ${name}!</h1>
          <p>Montana Finish Carpenter</p>
        </div>
        
        <div class="content">
          <p>Thank you for reaching out to Montana Finish Carpenter! We've received your message and appreciate your interest in our custom woodworking services.</p>
          
          <p><strong>What happens next?</strong></p>
          <ul>
            <li>We'll review your project details carefully</li>
            <li>One of our team members will contact you within 24 hours</li>
            <li>We'll schedule a consultation to discuss your vision</li>
            <li>You'll receive a detailed, free estimate</li>
          </ul>
          
          <p>In the meantime, feel free to browse our portfolio and learn more about our process:</p>
          
          <div class="cta">
            <a href="${process.env.NEXT_PUBLIC_SITE_URL}/portfolio">View Our Recent Projects</a>
          </div>
          
          <p><strong>Need immediate assistance?</strong><br>
          Call us at <a href="tel:+14065550123">(406) 555-0123</a></p>
          
          <p>We're excited to help bring your vision to life!</p>
          
          <p>Best regards,<br>
          The Montana Finish Carpenter Team<br>
          Somers, Montana</p>
        </div>
        
        <div class="footer">
          <p>Montana Finish Carpenter | Somers, MT | (406) 555-0123</p>
          <p>info@montanafinishcarpenter.com</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const identifier = request.headers.get('x-forwarded-for') || 'anonymous';
    const rateLimitResult = await limiter.check(5, identifier); // 5 requests per window
    
    if (!rateLimitResult.success) {
      return NextResponse.json(
        { 
          error: 'Too many requests. Please try again later.',
          retryAfter: Math.round(rateLimitResult.reset / 1000)
        },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    
    // Check honeypot field for spam
    if (body.website_url && body.website_url.trim() !== '') {
      // This is likely spam, silently reject
      return NextResponse.json({ message: 'Thank you for your message!' }, { status: 200 });
    }

    // Validate form data
    const validationResult = ContactFormSchema.safeParse(body);
    
    if (!validationResult.success) {
      return NextResponse.json(
        { 
          error: 'Validation failed',
          details: validationResult.error.issues.map(issue => ({
            field: issue.path.join('.'),
            message: issue.message
          }))
        },
        { status: 400 }
      );
    }

    const data = validationResult.data;

    // Sanitize all input data
    const sanitizedData = {
      name: sanitizeInput(data.name),
      email: sanitizeInput(data.email),
      phone: data.phone ? sanitizeInput(data.phone) : '',
      service: data.service ? sanitizeInput(data.service) : '',
      timeline: data.timeline ? sanitizeInput(data.timeline) : '',
      budget: data.budget ? sanitizeInput(data.budget) : '',
      details: data.details ? sanitizeInput(data.details) : '',
      hearAbout: data.hearAbout ? sanitizeInput(data.hearAbout) : ''
    };

    // Send notification email to business
    const notificationEmailResult = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@montanafinishcarpenter.com',
      to: process.env.CONTACT_EMAIL_TO || 'info@montanafinishcarpenter.com',
      subject: `New Contact Form Submission from ${sanitizedData.name}`,
      html: generateEmailTemplate(sanitizedData),
    });

    if (notificationEmailResult.error) {
      console.error('Failed to send notification email:', notificationEmailResult.error);
      throw new Error('Failed to send notification email');
    }

    // Send auto-reply to customer
    const autoReplyResult = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM || 'noreply@montanafinishcarpenter.com',
      to: sanitizedData.email,
      subject: 'Thank you for contacting Montana Finish Carpenter!',
      html: generateAutoReplyTemplate(sanitizedData.name),
    });

    if (autoReplyResult.error) {
      console.error('Failed to send auto-reply:', autoReplyResult.error);
      // Don't throw error for auto-reply failure, as the main notification was sent
    }

    // Log successful submission (remove in production or use proper logging)
    console.log('Contact form submission successful:', {
      timestamp: new Date().toISOString(),
      name: sanitizedData.name,
      email: sanitizedData.email,
      service: sanitizedData.service
    });

    return NextResponse.json(
      { message: 'Thank you for your message! We\'ll get back to you within 24 hours.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    
    return NextResponse.json(
      { error: 'Failed to send message. Please try again or call us directly.' },
      { status: 500 }
    );
  }
}

// Handle preflight requests for CORS
export async function OPTIONS(request: NextRequest) {
  return NextResponse.json({}, { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_SITE_URL || '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}