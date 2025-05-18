export const connect = async (): Promise<void> => {
  try {
    console.log('connect successfully!');
  } catch (error: unknown) {
    console.error('connect failure!', error);
  }
};
