const platforms: Record<string, RegExp> = {
  iOS: /iPhone|iPad|iPod/i,
  Android: /Android/i,
};

export const detectOS = () => {
  for (const [platform, regex] of Object.entries(platforms)) {
    if (regex.test(navigator.userAgent)) {
      return platform;
    }
  }
  return 'Other';
};
