import DOMPurify from 'isomorphic-dompurify';

/**
 * Sanitize user input to prevent XSS attacks
 */
export function sanitizeInput(input: string): string {
  if (!input || typeof input !== 'string') {
    return '';
  }

  // Remove any HTML tags and sanitize
  const sanitized = DOMPurify.sanitize(input, { 
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    KEEP_CONTENT: true
  });

  // Additional sanitization for common attack vectors
  return sanitized
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove script tags
    .replace(/javascript:/gi, '') // Remove javascript: protocol
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .trim();
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format
 */
export function isValidPhone(phone: string): boolean {
  // Supports international formats
  const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
  return phoneRegex.test(phone.replace(/[\s\-\(\)]/g, ''));
}

/**
 * Check if input contains suspicious patterns
 */
export function containsSuspiciousContent(input: string): boolean {
  const suspiciousPatterns = [
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /data:/i,
    /onclick/i,
    /onload/i,
    /onerror/i,
    /eval\(/i,
    /document\./i,
    /window\./i,
    /\.innerHTML/i,
    /\.outerHTML/i,
  ];

  return suspiciousPatterns.some(pattern => pattern.test(input));
}

/**
 * Generate Content Security Policy nonce
 */
export function generateCSPNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

/**
 * Validate and sanitize URL
 */
export function sanitizeUrl(url: string): string {
  try {
    const urlObj = new URL(url);
    
    // Only allow http and https protocols
    if (!['http:', 'https:'].includes(urlObj.protocol)) {
      return '';
    }
    
    return urlObj.toString();
  } catch {
    return '';
  }
}

/**
 * Rate limiting token generator
 */
export function generateRateLimitToken(ip: string, userAgent?: string): string {
  const tokenBase = `${ip}-${userAgent || 'unknown'}`;
  return btoa(tokenBase).replace(/[^a-zA-Z0-9]/g, '').substring(0, 32);
}

/**
 * SQL injection prevention for database queries
 */
export function escapeSQLString(input: string): string {
  return input.replace(/[\0\x08\x09\x1a\n\r"'\\\%]/g, (char) => {
    switch (char) {
      case '\0':
        return '\\0';
      case '\x08':
        return '\\b';
      case '\x09':
        return '\\t';
      case '\x1a':
        return '\\z';
      case '\n':
        return '\\n';
      case '\r':
        return '\\r';
      case '"':
      case "'":
      case '\\':
      case '%':
        return '\\' + char;
      default:
        return char;
    }
  });
}

/**
 * Check for common spam indicators
 */
export function isLikelySpam(data: {
  name?: string;
  email?: string;
  details?: string;
  phone?: string;
}): boolean {
  const spamIndicators = [
    // Common spam phrases
    /viagra|cialis|loan|casino|poker|betting|seo.service|cheap.price/i,
    // Suspicious patterns
    /http[s]?:\/\//i, // URLs in name or details
    /\b[A-Z]{10,}\b/, // All caps words
    /(.)\1{4,}/, // Repeated characters
  ];

  const textToCheck = [
    data.name || '',
    data.details || '',
    data.email || ''
  ].join(' ');

  return spamIndicators.some(pattern => pattern.test(textToCheck));
}

/**
 * Security headers for API responses
 */
export const securityHeaders = {
  'X-Content-Type-Options': 'nosniff',
  'X-Frame-Options': 'DENY',
  'X-XSS-Protection': '1; mode=block',
  'Referrer-Policy': 'strict-origin-when-cross-origin',
  'Permissions-Policy': 'camera=(), microphone=(), geolocation=()',
};

/**
 * CORS configuration
 */
export function getCORSHeaders(origin?: string) {
  const allowedOrigins = [
    process.env.NEXT_PUBLIC_SITE_URL,
    'https://montanafinishcarpenter.com',
    'https://www.montanafinishcarpenter.com',
  ].filter(Boolean);

  const isAllowed = origin && allowedOrigins.includes(origin);

  return {
    'Access-Control-Allow-Origin': isAllowed ? origin : 'null',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    'Access-Control-Max-Age': '86400',
  };
}