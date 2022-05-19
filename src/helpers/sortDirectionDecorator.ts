const sortDirectionDecorator =
  <T>(fn: (...a: Array<T>) => number) =>
  (direction: 'asc' | 'desc' = 'asc') => {
    let returnValue: number;
    return (...args: Array<T>) => {
      if (direction === 'asc') {
        returnValue = fn(...args);
      } else {
        returnValue = -fn(...args);
      }
      return returnValue;
    };
  };

export { sortDirectionDecorator };
