/** Sample marketing copy. Confirm services and promises before public launch. */
export const reasons = [
  {
    icon: 'scan',
    title: 'Planned for your property',
    description:
      'Careful camera placement. Useful coverage. A solution that makes sense for your space.',
  },
  {
    icon: 'sparkles',
    title: 'A clean, considered finish',
    description:
      'Discreet cabling and thoughtful installation, with respect for your home or workplace.',
  },
  {
    icon: 'smartphone',
    title: 'Simple to use, every day',
    description:
      'Clear guidance on recording, playback and remote viewing with compatible systems.',
  },
  {
    icon: 'handshake',
    title: 'People you can talk to',
    description:
      'Straightforward advice before installation and a helpful point of contact afterwards.',
  },
] as const;

export const processSteps = [
  {
    title: 'Let’s talk',
    description:
      'Tell us about your property, your priorities and what you’d like to protect.',
  },
  {
    title: 'Make a plan',
    description:
      'We assess the space and outline a suitable system, scope and quote.',
  },
  {
    title: 'Get connected',
    description:
      'Your cameras, cabling and recording system are installed and configured.',
  },
  {
    title: 'Feel at home',
    description:
      'We walk you through the controls and explain how to get support.',
  },
] as const;

export const faqs = [
  {
    question: 'What type of CCTV system do I need?',
    answer:
      'That depends on your layout, lighting, coverage priorities and budget. A property assessment helps identify suitable camera locations, recording options and whether an existing system can be reused. This preview shows example services; the final offering will be confirmed before launch.',
  },
  {
    question: 'Can I view my cameras on my phone?',
    answer:
      'Many compatible systems support live viewing and playback through a mobile app. Remote access usually requires an internet connection and appropriate security settings. Available features depend on the cameras, recorder and app selected.',
  },
  {
    question: 'How much does a CCTV installation cost?',
    answer:
      'Pricing depends on the number and type of cameras, cable access, recording requirements and installation complexity. Add your verified pricing or quoting policy here. No prices shown on this preview are a binding offer.',
  },
  {
    question: 'Can you upgrade my existing cameras?',
    answer:
      'An assessment can help identify what can be retained and what may need replacing. Camera resolution, recorder compatibility, storage, cabling and network connections all affect the options. Confirm the supported systems with the business before booking.',
  },
  {
    question: 'Does CCTV need an internet connection?',
    answer:
      'Some systems can record locally without internet. Remote viewing, cloud storage and certain notifications generally require a connection. The exact behaviour depends on your equipment and configuration.',
  },
  {
    question: 'Which areas do you service?',
    answer:
      'Our service area is currently a placeholder: [Your city & surrounding suburbs]. Replace this with confirmed suburbs and regions before publishing the live business website.',
  },
] as const;
