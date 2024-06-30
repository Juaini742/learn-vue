let productCounter = 0
export default defineEventHandler(async () => {
  await new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(productCounter++);
    }, 2000);
  });
  return {
    productCounter
  }
});
