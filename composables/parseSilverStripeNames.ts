export const parseSilverStripeNames = (inputString: string): any  => {
  const parts = inputString.split('\\');
  
  return parts[parts.length - 1];
}