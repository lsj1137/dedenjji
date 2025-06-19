function getRandomHexColor(): string {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return `#${randomColor.padStart(6, '0')}`;
}

export function mixCards(total: number, win: number, cards?: DrawItem[]): DrawItem[] {
  const arr: number[] = Array.from(new Array(total), (_, i) => i);
  arr.sort(() => Math.random() - 0.5);
  return Array.from(cards || new Array(total), (_, i) => {
    return {
      x: Math.random(),
      y: Math.random(),
      color: getRandomHexColor(),
      num: cards ? cards[i].num : arr[i],
      angle: Math.random() * 360,
      isWinner: cards ? cards[i].isWinner : arr[i] >= total - win,
    };
  });
}
