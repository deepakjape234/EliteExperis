export type PointData = {
  idx: number;
  position: [number, number, number];
  color: string;
};

export const pointsInner: PointData[] = Array.from({ length: 30 }, (_, i) => ({
  idx: i,
  position: [
    Math.cos((i / 30) * 2 * Math.PI) * 2,
    Math.sin((i / 30) * 2 * Math.PI) * 2,
    0,
  ],
  color: 'cyan',
}));

export const pointsOuter: PointData[] = Array.from({ length: 40 }, (_, i) => ({
  idx: i + 30,
  position: [
    Math.cos((i / 40) * 2 * Math.PI) * 4,
    Math.sin((i / 40) * 2 * Math.PI) * 4,
    0,
  ],
  color: 'lime',
}));
