const levels = [
  {
    id: 1,
    rows: 3,
    cols: 3,
    pairs: [1, 2, 3, 4],
    centerCard: 0,
    previewTime: 2500,
    type: "number",
  },
  {
    id: 2,
    rows: 3,
    cols: 4,
    pairs: [1, 2, 3, 4, 5, 6],
    centerCard: null,
    previewTime: 2300,
    type: "number",
  },
  {
    id: 3,
    rows: 4,
    cols: 4,
    pairs: [1, 2, 3, 4, 5, 6, 7, 8],
    centerCard: null,
    previewTime: 2100,
    type: "number",
  },
  {
    id: 4,
    rows: 4,
    cols: 4,
    pairs: [1, 2, 3, 4, 5, 6, 7, 8],
    centerCard: null,
    previewTime: 1900,
    type: "number",
  },
  {
    id: 5,
    rows: 4,
    cols: 5,
    pairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    centerCard: null,
    previewTime: 1800,
    type: "number",
  },
  {
    id: 6,
    rows: 5,
    cols: 4,
    pairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    centerCard: null,
    previewTime: 1700,
    type: "number",
  },
  {
    id: 7,
    rows: 5,
    cols: 5,
    pairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    centerCard: 0,
    previewTime: 1600,
    type: "number",
  },
  {
    id: 8,
    rows: 5,
    cols: 5,
    pairs: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    centerCard: 0,
    previewTime: 1500,
    type: "number",
  },
  {
    id: 9,
    rows: 5,
    cols: 6,
    pairs: Array.from({ length: 15 }, (_, i) => i + 1),
    centerCard: null,
    previewTime: 1400,
    type: "number",
  },
  {
    id: 10,
    rows: 6,
    cols: 5,
    pairs: Array.from({ length: 15 }, (_, i) => i + 1),
    centerCard: null,
    previewTime: 1300,
    type: "number",
  },
];

// Levels 11–15
for (let i = 11; i <= 15; i++) {
  levels.push({
    id: i,
    rows: 6,
    cols: 6,
    pairs: Array.from({ length: 18 }, (_, index) => index + 1),
    centerCard: null,
    previewTime: Math.max(800, 1200 - (i - 11) * 100),
    type: "number",
  });
}

const icons = [
  "🐶","🐱","🐼","🦊","🐸","🐵",
  "🍎","🍓","🍉","🍇","🍒","🥝",
  "⭐","🌙","☀️","🌈","🎈","🚗",
];

// Levels 16–25
for (let i = 16; i <= 25; i++) {
  levels.push({
    id: i,
    rows: 6,
    cols: 6,
    pairs: icons,
    centerCard: null,
    previewTime: Math.max(500, 900 - (i - 16) * 40),
    type: "icon",
  });
}

export default levels;