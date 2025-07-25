# Montana Carpenter Website - Deployment Guide

This guide provides comprehensive instructions for deploying the Montana Finish Carpenter website to production.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Setup](#environment-setup)
- [Platform-Specific Deployment](#platform-specific-deployment)
- [DNS Configuration](#dns-configuration)
- [SSL Certificate Setup](#ssl-certificate-setup)
- [Post-Deployment Configuration](#post-deployment-configuration)
- [Verification Checklist](#verification-checklist)
- [Troubleshooting](#troubleshooting)

## Prerequisites

### System Requirements
- Node.js 18.17 or later
- npm 9.0 or later
- Git

### Required Accounts
- [ ] Domain registrar account (for DNS management)
- [ ] Hosting platform account (Vercel/Netlify/AWS/etc.)
- [ ] Email service account (Resend/SendGrid)
- [ ] Google Analytics account
- [ ] Google Search Console account
- [ ] Error tracking service (Sentry - optional)

## Environment Setup

### 1. Clone Repository
```bash
git clone <your-repository-url>
cd montana-carpenter
npm install
```

### 2. Environment Variables

Copy the example environment file and configure:
```bash
cp .env.local.example .env.production
```

Fill in all required environment variables in `.env.production`:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=https://montanafinishcarpenter.com

# Google Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
NEXT_PUBLIC_GA_TRACKING_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code

# Email Service (Resend recommended)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
CONTACT_EMAIL_TO=info@montanafinishcarpenter.com
CONTACT_EMAIL_FROM=noreply@montanafinishcarpenter.com

# Security
API_SECRET_KEY=your_strong_secret_key_here
FORM_HONEYPOT_FIELD_NAME=website_url

# Error Tracking (Optional)
SENTRY_DSN=your_sentry_dsn_here
```

### 3. Obtain Required API Keys

#### Google Maps API Key
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Maps JavaScript API
4. Create API key and restrict to your domain
5. Add to environment variables

#### Google Analytics
1. Create account at [Google Analytics](https://analytics.google.com/)
2. Set up GA4 property for your domain
3. Get tracking ID (starts with G-)
4. Add to environment variables

#### Resend Email Service
1. Sign up at [Resend](https://resend.com/)
2. Verify your domain
3. Generate API key
4. Add to environment variables

## Platform-Specific Deployment

### Option A: Vercel (Recommended)

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Deploy
```bash
# Build and test locally first
npm run build
npm run start

# Deploy to Vercel
vercel

# Set production environment variables
vercel env add NEXT_PUBLIC_SITE_URL
vercel env add RESEND_API_KEY
# ... add all other environment variables
```

#### 3. Configure Custom Domain
```bash
vercel domains add montanafinishcarpenter.com
vercel domains add www.montanafinishcarpenter.com
```

### Option B: Netlify

#### 1. Build Configuration
Create `netlify.toml`:
```toml
[build]
  publish = ".next"
  command = "npm run build"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[context.production.environment]
  NODE_ENV = "production"
```

#### 2. Deploy via Git
1. Connect repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `.next`
4. Add environment variables in Netlify dashboard

### Option C: Traditional Hosting (cPanel/WHM)

#### 1. Build for Production
```bash
npm run build
npm run export  # If using static export
```

#### 2. Upload Files
- Upload `.next` folder contents to public_html
- Upload `public` folder contents to public_html
- Ensure Node.js is available on server

#### 3. Configure .htaccess (Apache)
```apache
RewriteEngine on
RewriteCond %{SERVER_PORT} 80
RewriteRule ^(.*)$ https://montanafinishcarpenter.com/$1 [R,L]

# Force HTTPS
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]
```

## DNS Configuration

### Required DNS Records

#### A Records
```
@ (root domain) -> Your server IP
www -> Your server IP
```

#### CNAME Records (if using CDN)
```
www -> montanafinishcarpenter.com
```

#### MX Records (for email)
```
@ -> mail.montanafinishcarpenter.com (Priority: 10)
```

#### TXT Records
```
@ -> "v=spf1 include:_spf.google.com ~all"
_dmarc -> "v=DMARC1; p=none; rua=mailto:dmarc@montanafinishcarpenter.com"
```

### TTL Settings
- Set TTL to 300 (5 minutes) during initial setup
- Increase to 3600 (1 hour) after everything works
- Use 86400 (24 hours) for stable records

## SSL Certificate Setup

### Automatic SSL (Recommended)
Most platforms (Vercel, Netlify) provide automatic SSL certificates.

### Manual SSL Certificate
If using traditional hosting:

1. **Let's Encrypt (Free)**
```bash
certbot --apache -d montanafinishcarpenter.com -d www.montanafinishcarpenter.com
```

2. **Commercial Certificate**
- Purchase from SSL provider
- Generate CSR on server
- Install provided certificate files

### SSL Configuration
Ensure your server redirects HTTP to HTTPS:
```nginx
server {
    listen 80;
    server_name montanafinishcarpenter.com www.montanafinishcarpenter.com;
    return 301 https://montanafinishcarpenter.com$request_uri;
}
```

## Post-Deployment Configuration

### 1. Verify Email Functionality
```bash
# Test contact form submission
curl -X POST https://montanafinishcarpenter.com/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "details": "Test message"
  }'
```

### 2. Configure Google Search Console
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property for your domain
3. Verify ownership using HTML tag method
4. Submit sitemap: `https://montanafinishcarpenter.com/sitemap.xml`

### 3. Configure Google Analytics
1. Verify tracking code is working
2. Set up conversion goals
3. Configure enhanced ecommerce (if applicable)

### 4. Configure Monitoring
1. Set up uptime monitoring
2. Configure error tracking (Sentry)
3. Set up performance monitoring

### 5. Social Media Integration
- Update business listings with new website URL
- Update social media profiles
- Test social sharing meta tags

## Verification Checklist

After deployment, verify the following:

### Technical Verification
- [ ] Website loads at primary domain
- [ ] www redirects to non-www (or vice versa)
- [ ] HTTP redirects to HTTPS
- [ ] All pages load without errors
- [ ] Contact form submits successfully
- [ ] Email notifications work
- [ ] Auto-reply emails work
- [ ] Mobile responsive design works
- [ ] Images load properly
- [ ] Navigation works on all pages

### SEO Verification
- [ ] Sitemap accessible at /sitemap.xml
- [ ] Robots.txt accessible at /robots.txt
- [ ] Meta tags present on all pages
- [ ] Schema markup validates
- [ ] Google Analytics tracking works
- [ ] Google Search Console verification complete
- [ ] Page loading speed acceptable (< 3 seconds)

### Security Verification
- [ ] SSL certificate valid and trusted
- [ ] Security headers present
- [ ] No mixed content warnings
- [ ] Forms protected against spam
- [ ] API endpoints secured

### Business Verification
- [ ] Contact information accurate
- [ ] Business hours correct
- [ ] Service area information updated
- [ ] Portfolio images display properly
- [ ] Pricing information current
- [ ] Call-to-action buttons work

## Troubleshooting

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next
npm run build

# Check for TypeScript errors
npm run type-check

# Check for linting errors
npm run lint
```

#### Environment Variable Issues
```bash
# Verify environment variables are set
echo $NEXT_PUBLIC_SITE_URL
echo $RESEND_API_KEY

# Check in application
console.log(process.env.NEXT_PUBLIC_SITE_URL)
```

#### Email Not Working
1. Verify API keys are correct
2. Check spam folders
3. Verify domain authentication with email provider
4. Check server logs for errors

#### SSL Certificate Issues
```bash
# Check certificate validity
openssl s_client -connect montanafinishcarpenter.com:443

# Check certificate expiration
echo | openssl s_client -connect montanafinishcarpenter.com:443 2>/dev/null | openssl x509 -noout -dates
```

#### Performance Issues
1. Check Lighthouse score
2. Verify image optimization
3. Check bundle size with analyzer
4. Monitor Core Web Vitals

### Getting Help

- **Technical Issues**: Check error logs and contact hosting provider
- **Email Issues**: Contact email service provider support
- **DNS Issues**: Contact domain registrar support
- **SSL Issues**: Check certificate provider documentation

### Rollback Plan

If deployment fails:
1. Revert to previous version in hosting platform
2. Check error logs for specific issues
3. Fix issues in development environment
4. Test thoroughly before redeploying

### Monitoring and Maintenance

- Monitor uptime and performance daily
- Check error logs weekly
- Update dependencies monthly
- Review analytics monthly
- Backup configuration files regularly

## Support Contacts

- **Hosting Provider**: [Your hosting provider support]
- **Domain Registrar**: [Your domain registrar support]
- **Email Service**: [Resend support: https://resend.com/support]
- **CDN Provider**: [Your CDN provider support if applicable]

---

**Last Updated**: [Current Date]
**Version**: 1.0
**Maintainer**: [Your Name/Team]