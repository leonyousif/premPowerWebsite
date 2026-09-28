'use client';

if (typeof window !== 'undefined') {
  const g = window as unknown as { process?: { env?: Record<string, string> } };
  if (!g.process) {
    g.process = { env: {} };
  } else if (!g.process.env) {
    g.process.env = {};
  }
}

export function ClientInit() {
  return null;
}
