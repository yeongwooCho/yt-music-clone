import {type ClassValue, clsx} from "clsx"
import {twMerge} from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// await sleep(1000): 1초 기다리기
export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))


export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomElementFromArray(arr: unknown[]) {
  const len = arr?.length;
  return arr[getRandomInt(0, len - 1)];
}

export function chunkArray(arr: unknown[], chunkSize: number) {
  // const resultArray = [ [],[],[],[]]
  const resultArray = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    resultArray.push(chunk);
  }
  return resultArray;
}

export function genreateRandomHex() {
  return "#" + ((Math.random() * 0xffffff) << 0).toString(16).padStart(6, "0");
}
