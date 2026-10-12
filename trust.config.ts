import { defineConfig } from './src/config/schema';
import { questionnaireMeta } from './src/questionnaires';

const VERIFIED = 'October 2026';

export default defineConfig({
  company: {
    name: 'VetFo',
    legalName: 'VetFo, LLC',
    logo: '/logo.png',
    favicon: '/favicon.png',
    website: 'https://vetfo.us',
    securityEmail: 'security@vetfo.us',
    privacyEmail: 'security@vetfo.us',
  },

  theme: {
    mode: 'dark',
    colors: {
      primary: '#FFD700',
      surface: '#000000',
    },
    fonts: {
      heading: 'IBM Plex Mono',
      body: 'IBM Plex Sans',
    },
  },

  // VetFo holds no third-party security certifications or audit reports today,
  // so none are listed. Add entries here when that changes.
  frameworks: [],

  controls: [
    {
      domain: 'Data Protection',
      icon: 'shield',
      items: [
        {
          title: 'Field-Level Encryption',
          description:
            'Sensitive stored credentials, such as API keys and OAuth tokens for connected veterinary systems, are encrypted at the field level with AES-256-GCM. The encryption key can be rotated without re-encrypting existing data.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Sensitive Data Kept Out of Logs',
          description:
            'Phone numbers are masked in logs and error reports, and the text of incoming messages is never logged. Push notification payloads are not logged, since they can contain pet names or clinic-written text.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Error Monitoring Without Personal Data',
          description:
            'Error reports exclude cookies and request bodies, and a scrubber runs before anything is sent. Server error responses to users are generic; the detailed error stays in our internal logs.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
      ],
    },
    {
      domain: 'Privacy & Data Rights',
      icon: 'eye',
      items: [
        {
          title: 'Data Export and Account Deletion',
          description:
            'Users can export their data and delete their account, which removes their data. Exceptions: a veterinary clinic with VetFo Pro access may keep a read-only copy of the record it could see when access ends, and support voicemails are kept until an admin deletes them. Both are described in our Privacy Policy and Terms.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Independent Communication Preferences',
          description:
            'Marketing messages, SMS, and AI data sharing are each opt-in and can be changed separately. SMS STOP and HELP requests are honored. Marketing unsubscribe links work with one click.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Cookie Consent',
          description: 'The VetFo app shows a cookie consent banner.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Owner Control of Shared Records',
          description:
            "Pet owners decide who can see a pet's record. Access given to a clinic, groomer, or kennel can be removed at any time. Shared links can expire, and a link can only add entries, never change or delete existing ones. Anything added through a link is labeled as unverified.",
          status: 'implemented',
          lastVerified: VERIFIED,
        },
      ],
    },
    {
      domain: 'Access Control',
      icon: 'lock',
      items: [
        {
          title: 'Managed Sign-In',
          description:
            'Sign-in uses OpenID Connect with PKCE through Kinde, with a signed, expiring state value and a nonce checked on every callback. VetFo does not store passwords.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Multi-Factor Authentication',
          description:
            'Users can turn on MFA by text message or email. Wrong codes are limited, and repeated failures lock the account for a period. Admin accounts must have MFA to use admin tools.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Record-Level Authorization',
          description:
            "Every request that touches a pet's data is checked against that pet's owners, shares, and professional grants. A request for a pet the user cannot access gets the same answer as one for a pet that does not exist.",
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Role-Scoped Professional Access',
          description:
            'Veterinary clinics, groomers, and kennels see only what their role needs. Cost and billing figures, uploaded documents, expenses, and AI insights are never included. Business staff can change only entries their own business added.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Accepted Invitations',
          description:
            'Joining a family plan or receiving a transferred pet requires the recipient to accept an invitation sent to their account email. Invitations expire after 14 days.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Audit Logging',
          description:
            'Administrator actions, support calls, and professional access to records are recorded in an audit log, with phone numbers masked.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
      ],
    },
    {
      domain: 'Application Security',
      icon: 'code',
      items: [
        {
          title: 'Webhook Signature Verification',
          description:
            'Incoming webhooks from Stripe, Twilio, and Resend are verified by signature before any data in them is used.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Server-Side Request Forgery Protection',
          description:
            'Requests the server makes to addresses supplied by users, such as a clinic software connection, are checked at connection time against private, loopback, and cloud-metadata address ranges, and every redirect is checked again.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Abuse and Rate Limiting',
          description:
            'Sharing by text or email, share-code and invite redemption, public links, and record requests are limited per account, per recipient, and per IP address.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Upload Validation',
          description:
            'Files received from clinics are identified by their contents rather than their filename, restricted to documents and images, size limited, and de-duplicated.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'Versioned Database Migrations',
          description:
            'Database changes ship as reviewed, versioned migration files that are applied automatically and never edited after release.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
      ],
    },
    {
      domain: 'Vendor Management',
      icon: 'link',
      items: [
        {
          title: 'Published Subprocessor List',
          description:
            'The third parties that process customer data on our behalf are listed on this page, with what each is used for.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
        {
          title: 'AI Data Sharing Is Opt-In',
          description:
            'AI features, such as scanning vet records and generating health summaries, use Google Gemini. Users control AI data sharing with a separate setting.',
          status: 'implemented',
          lastVerified: VERIFIED,
        },
      ],
    },
  ],

  // Verify each location against the vendor's current region settings before publishing.
  subprocessors: [
    {
      name: 'Railway',
      purpose: 'Application hosting and databases',
      location: 'United States',
      dpaUrl: null,
    },
    {
      name: 'Kinde',
      purpose: 'User sign-in and identity',
      location: 'Region set per Kinde tenant',
      dpaUrl: null,
    },
    {
      name: 'Stripe',
      purpose: 'Subscription billing and payment processing',
      location: 'United States',
      dpaUrl: 'https://stripe.com/legal/dpa',
    },
    {
      name: 'RevenueCat',
      purpose: 'In-app purchases on iOS and Android',
      location: 'United States',
      dpaUrl: null,
    },
    {
      name: 'Google (Gemini, Maps, Places)',
      purpose:
        'AI features such as record scanning and health summaries, plus maps and nearby vet search',
      location: 'United States',
      dpaUrl: 'https://cloud.google.com/terms/data-processing-addendum',
    },
    {
      name: 'Twilio',
      purpose: 'SMS notifications and support phone calls',
      location: 'United States',
      dpaUrl: 'https://www.twilio.com/en-us/legal/data-protection-addendum',
    },
    {
      name: 'Resend',
      purpose: 'Email delivery, including receiving replies to records requests',
      location: 'United States',
      dpaUrl: 'https://resend.com/legal/dpa',
    },
    {
      name: 'OneSignal',
      purpose: 'Push notifications',
      location: 'United States',
      dpaUrl: null,
    },
    {
      name: 'Sentry',
      purpose: 'Error monitoring, with cookies and request bodies excluded',
      location: 'United States',
      dpaUrl: 'https://sentry.io/legal/dpa/',
    },
    {
      name: 'Cloudflare R2',
      purpose: 'Storage for uploaded pet documents and support voicemails',
      location: 'Global',
      dpaUrl: 'https://www.cloudflare.com/cloudflare-customer-dpa/',
    },
  ],

  documents: {
    privacyPolicy: 'https://vetfo.us/privacy',
    termsOfService: 'https://vetfo.us/terms',
  },

  contact: {
    heading: 'Have security questions?',
    description:
      'Email us a question, a security questionnaire, or a vulnerability report and we will respond.',
    cta: {
      label: 'Contact Security Team',
      href: 'mailto:security@vetfo.us',
    },
    questionnaireUrl: null,
    prefilledQuestionnaireUrl: null,
  },

  seo: {
    title: 'VetFo Trust Center',
    description:
      "How VetFo protects pet owners' and veterinary professionals' data: security controls, privacy practices, and subprocessors.",
    ogImage: '/og-image.jpg',
  },

  lastReviewed: VERIFIED,
  subprocessorsLastUpdated: VERIFIED,
  questionnaires: questionnaireMeta,

  changelog: [
    {
      date: '2026-10-12',
      title: 'Trust Center launched',
      description: 'First public version of the VetFo Trust Center',
    },
  ],
});
