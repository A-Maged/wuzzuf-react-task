const breakpoints: { [key: string]: number } = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

export const minq: any = Object.keys(breakpoints).reduce((acc: any, bp) => {
  acc[bp] = `@media (min-width: ${breakpoints[bp]}px)`;

  return acc;
}, {});

export const maxq: any = Object.keys(breakpoints).reduce((acc: any, bp) => {
  acc[bp] = `@media (max-width: ${breakpoints[bp]}px)`;

  return acc;
}, {});

// Usage: mq['sm']
