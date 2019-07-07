
export interface RandomIntegerAPI {
  getRandomInt(min: number, max: number): Promise<number>
}

export const randomAPI = (): RandomIntegerAPI => ({
  async getRandomInt(min, max) {
    const result = await fetch(
      `https://www.random.org/integers/?num=1&min=${min}&max=${max}&col=1&base=10&format=plain&rnd=new`
    );
    if (result.ok) {
      const text = await result.text();
      return Number(text);
    }
    return Promise.reject(result);
  }
});
