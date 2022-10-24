//@ts-check
/**
 * Computes the time taken to execute a promise.
 * The result is printed to the console and returned when the promise is resolved.
 *
 * @example
 * // prints to console.
 * timeIt()
 * @param {Promise<any>} promise
 * @returns {Promise<number>}
 */

const timeIt = (promise) =>
  new Promise((resolve) => {
    const startTime = Date.now();
    Promise.resolve(promise).finally(() => {
      const endTime = Date.now();
      const timeTaken = endTime - startTime;
      const timeTakenInSeconds = timeTaken / 1000;
      console.log(`Finished in: ${timeTakenInSeconds} seconds;`);
      resolve(timeTaken);
    });
  });
