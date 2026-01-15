export function getRandomFloat(): number {
  if (typeof window === "undefined") return Math.random();
  if (!window.crypto?.getRandomValues) return Math.random();
  const u32 = new Uint32Array(1);
  window.crypto.getRandomValues(u32);
  return u32[0] / 0xffffffff;
}


