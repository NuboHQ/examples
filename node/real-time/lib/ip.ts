import { IncomingMessage } from 'http';

export const getIpFromRequest = (req: IncomingMessage) => {
  console.log('--');
  console.log(req.headers);
  console.log('--');
  const xForwardedFor = req.headers['x-forwarded-for'];

  if (xForwardedFor && typeof xForwardedFor === 'string') {
    try {
      const [ip] = xForwardedFor.split(',');

      if (ip) {
        return (ip as string) || null;
      }
    } catch (error) {}
  }

  return (req.headers['x-real-ip'] as string) || null;
};
