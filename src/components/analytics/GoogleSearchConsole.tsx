import { Metadata } from 'next';

interface GoogleSearchConsoleProps {
  verificationCode: string;
}

export function GoogleSearchConsole({ verificationCode }: GoogleSearchConsoleProps) {
  if (!verificationCode || process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <meta name="google-site-verification" content={verificationCode} />
  );
}

// Generate metadata for Google Search Console verification
export function generateGoogleSearchConsoleMetadata(verificationCode?: string): Partial<Metadata> {
  if (!verificationCode || process.env.NODE_ENV !== 'production') {
    return {};
  }

  return {
    verification: {
      google: verificationCode,
    },
    other: {
      'google-site-verification': verificationCode,
    },
  };
}