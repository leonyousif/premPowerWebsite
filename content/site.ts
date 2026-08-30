/** Edit business information here. All unverified details remain explicit placeholders. */
export const site = {
  name: 'Premier Power',
  description:
    'CCTV installation and security camera solutions for homes and businesses. Explore residential CCTV, commercial security, remote viewing and ongoing system care.',
  phone: '[Phone number]',
  email: '[Email address]',
  location: '[Your city & surrounding suburbs]',
  address: '[Business address]',
  hours: '[Business hours]',
  licence: '[Security licence number]',
  electricalLicence: '[Electrical licence number]',
  abn: '[ABN]',
  services: [
    {
      slug: 'home-cctv',
      title: 'Home CCTV',
      shortTitle: 'Home CCTV',
      description:
        'Feel closer to home, wherever you are. Discreet camera systems designed around your property and your everyday life.',
      icon: 'home',
      features: [
        'Entryway and driveway coverage',
        'Indoor and outdoor camera options',
        'Easy-to-use recording and playback',
        'Remote viewing on compatible devices',
      ],
    },
    {
      slug: 'commercial-cctv',
      title: 'Commercial CCTV',
      shortTitle: 'Business CCTV',
      description:
        'Keep an eye on what you’ve built. Practical security solutions for offices, retail spaces, warehouses and shared properties.',
      icon: 'building',
      features: [
        'Coverage planning for your premises',
        'Multi-camera recording solutions',
        'Appropriate user access permissions',
        'Options for future system expansion',
      ],
    },
    {
      slug: 'upgrades-and-support',
      title: 'Upgrades & support',
      shortTitle: 'Upgrades & support',
      description:
        'Get more from your security. Bring an older system up to date, improve coverage, or keep everything working as it should.',
      icon: 'settings',
      features: [
        'Existing system assessments',
        'Camera and recorder upgrades',
        'Recording and connection checks',
        'Maintenance and user guidance',
      ],
    },
  ],
} as const;

export const navigation = [
  { label: 'Services', href: '/#services' },
  { label: 'Why Premier Power', href: '/#why-us' },
  { label: 'Our process', href: '/#process' },
  { label: 'FAQs', href: '/#faqs' },
] as const;
