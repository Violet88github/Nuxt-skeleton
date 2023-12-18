export const parseSilverStripeNames = (inputString: string): string  => {
    const slashes = 2;
    const parts = inputString.split('\\');
  
    if (parts.length >= slashes) {
      const lastTwoSlashes = parts.slice(-slashes).join('\\');
  
      const lastPart = parts[parts.length - 1];
      return lastPart;
    }
  
    return '';
}