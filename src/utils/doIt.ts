const doIt = <T>(fn: (value: T) => void) => (value: T) => {
  fn(value);
  return value;
};

export default doIt;
