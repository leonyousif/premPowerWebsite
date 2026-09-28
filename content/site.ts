/** Edit business information here. All unverified details remain explicit placeholders. */
export const site = {
  name: 'Premier Power',
  description:
    'Residential and commercial electrical work, CCTV installation, and electrical maintenance for homes and businesses. Explore installation, upgrades, fault finding, ongoing care, and security solutions.',
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
      slug: 'residential-electrician',
      title: 'Residential Electrical',
      shortTitle: 'Residential',
      icon: 'residential',
      eyebrow: 'POWER FOR EVERYDAY LIFE',
      description:
        'Practical electrical work for homes, renovations and new spaces—planned around how you live.',
      intro:
        'From an extra power point to a full renovation, residential electrical work should feel straightforward. We help plan safe, useful solutions for lighting, power, appliances and the systems that keep a home running.',
      detailsHeading: 'Your home, thoughtfully connected.',
      detailsCopy:
        'We consider room layout, future needs, access and the finish you want before recommending a scope. The final service list, equipment and compliance requirements will be confirmed for each property.',
      features: [
        'Lighting design, upgrades and installation',
        'Power points, switches and dedicated circuits',
        'Switchboard and safety switch upgrades',
        'Renovation and new-build electrical work',
        'Ceiling fans, appliances and EV charger options',
        'Smoke alarm and electrical safety checks',
      ],
      highlights: [
        {
          title: 'Lighting & power',
          description:
            'Plan useful lighting, additional outlets and dedicated circuits around the way each room is used.',
        },
        {
          title: 'Renovations & rewiring',
          description:
            'Coordinate electrical work with builders, designers and homeowners from rough-in to final fit-off.',
        },
        {
          title: 'Switchboards & safety',
          description:
            'Assess older boards, protective devices and changing household power needs before recommending upgrades.',
        },
      ],
    },
    {
      slug: 'commercial-electrician',
      title: 'Commercial Electrical',
      shortTitle: 'Commercial',
      icon: 'commercial',
      eyebrow: 'POWER THAT KEEPS BUSINESS MOVING',
      description:
        'Dependable electrical solutions for offices, retail, strata, hospitality and commercial spaces.',
      intro:
        'Commercial spaces need electrical work that supports people, equipment and daily operations. We plan installations and upgrades around your premises, trading hours, project program and future growth.',
      detailsHeading: 'Built around your operations.',
      detailsCopy:
        'A clear scope and practical staging help reduce disruption. Every project can be shaped around the property type, site access and the documentation your business or building manager requires.',
      features: [
        'Office, retail and hospitality fit-outs',
        'Commercial lighting and power distribution',
        'Switchboards, circuits and equipment connections',
        'Data, communications and security cabling options',
        'Exit and emergency lighting options',
        'Testing, upgrades and project coordination',
      ],
      highlights: [
        {
          title: 'Fit-outs & refurbishments',
          description:
            'Coordinate lighting, power and communications for new tenancies, changing layouts and refreshed spaces.',
        },
        {
          title: 'Lighting & distribution',
          description:
            'Plan efficient lighting, circuits and power distribution around the equipment and activity on site.',
        },
        {
          title: 'Strata & shared spaces',
          description:
            'Support common areas and managed properties with clear scopes, access planning and useful records.',
        },
      ],
    },
    {
      slug: 'cctv-security',
      title: 'CCTV & Security',
      shortTitle: 'CCTV & Security',
      icon: 'cctv',
      eyebrow: 'A CLEARER VIEW OF WHAT MATTERS',
      description:
        'Considered camera systems for homes and businesses, including placement, recording and remote access.',
      intro:
        'Useful CCTV starts with the view each camera needs to capture. We consider entry points, lighting, blind spots, cabling and how you want to review footage before shaping a suitable system.',
      detailsHeading: 'Security that makes sense.',
      detailsCopy:
        'Camera choice is only part of the solution. Recorder capacity, secure network configuration, user access and simple handover all contribute to a system you can rely on and understand.',
      features: [
        'Residential and commercial CCTV design',
        'Indoor and outdoor camera installation',
        'Camera positioning and coverage planning',
        'Recorder, storage and monitor setup',
        'Remote viewing on compatible devices',
        'Existing system upgrades and health checks',
      ],
      highlights: [
        {
          title: 'Coverage planning',
          description:
            'Position cameras around useful sightlines, entry points and priority areas while considering privacy.',
        },
        {
          title: 'Recording & playback',
          description:
            'Configure compatible recorders and storage around the footage quality and retention you need.',
        },
        {
          title: 'Remote viewing',
          description:
            'Set up supported mobile or desktop viewing with appropriate passwords and user access controls.',
        },
      ],
    },
    {
      slug: 'electrical-maintenance',
      title: 'Electrical Maintenance',
      shortTitle: 'Maintenance',
      icon: 'maintenance',
      eyebrow: 'KEEPING POWER RELIABLE',
      description:
        'Responsive fault finding, repairs and planned maintenance to keep properties safe and operating.',
      intro:
        'Electrical faults and wear can interrupt a home, workplace or managed property. We investigate the cause, explain the options and help plan repairs or ongoing maintenance around your priorities.',
      detailsHeading: 'Fix today. Plan for tomorrow.',
      detailsCopy:
        'Maintenance can be reactive, scheduled or part of a broader upgrade plan. The right approach depends on the installation, fault symptoms, equipment and access available on site.',
      features: [
        'Electrical fault finding and repairs',
        'Lighting, power and circuit troubleshooting',
        'Preventative maintenance programs',
        'Switchboard and safety device checks',
        'Commercial and strata maintenance support',
        'Testing, reporting and upgrade recommendations',
      ],
      highlights: [
        {
          title: 'Fault finding & repairs',
          description:
            'Trace electrical symptoms methodically and explain repair options before additional work begins.',
        },
        {
          title: 'Planned maintenance',
          description:
            'Schedule recurring checks around the property, equipment and operating needs of your site.',
        },
        {
          title: 'Asset & safety checks',
          description:
            'Review key electrical assets and protective devices, with reporting shaped to the agreed scope.',
        },
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
