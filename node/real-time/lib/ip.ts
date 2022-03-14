import { IncomingMessage } from 'http';
import requestIp from 'request-ip';

export const getIpFromRequest = (req: IncomingMessage) => {
  const clientIp = requestIp.getClientIp(req);

  console.log({ clientIp });
  return clientIp;
  // const xForwardedFor = req.headers['x-forwarded-for'];

  // if (xForwardedFor && typeof xForwardedFor === 'string') {
  //   try {
  //     const [ip] = xForwardedFor.split(',');

  //     if (ip) {
  //       return (ip as string) || null;
  //     }
  //   } catch (error) {}
  // }

  // return (req.headers['x-real-ip'] as string) || null;
};
