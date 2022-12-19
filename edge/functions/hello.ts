export const path = '/';

export const handler = () => {
  return {
    message: `Hello from Nubo Edge Function in ${process.env.NUBO_REGION}`,
  };
};
