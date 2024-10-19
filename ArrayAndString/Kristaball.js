var input = {
  id: "SE1",
  data: 10,
  left: {
    id: "SE2",
    data: 12,
    left: {
      id: "SE4",
      data: 4,
      right: { id: "SE8", data: 9, left: { id: "SE15", data: 20 } },
    },
    right: {
      id: "SE5",
      data: 17,
      left: {
        id: "SE9",
        data: 10,
        left: { id: "SE16", data: 8, right: { id: "SE17", data: 18 } },
      },
      right: { id: "SE10", data: 11 },
    },
  },
  right: {
    id: "SE3",
    data: 7,
    left: {
      id: "SE6",
      data: 6,
      left: { id: "SE11", data: 18 },
      right: { id: "SE12", data: 2 },
    },
    right: {
      id: "SE7",
      data: 3,
      left: { id: "SE13", data: 13 },
      right: { id: "SE14", data: 15 },
    },
  },
};

function lineWithHighestSales(data, bonus) {
  if (!data) {
    return { total: 0, path: [] };
  }

  const { id, data: value, left, right } = data;

  const leftPath = lineWithHighestSales(left, bonus);
  const rightPath = lineWithHighestSales(right, bonus);

  const currentPath = [{ id, data: value }];
  const currentTotal = value;

  const bestPath = leftPath.total > rightPath.total ? leftPath : rightPath;

  bestPath.path.unshift(...currentPath);
  bestPath.total += currentTotal;

  return bestPath;
}

function calculateBonus(path, bonus) {
  const totalSales = path.reduce((sum, node) => sum + node.data, 0);
  return path.map((node) => ({
    id: node.id,
    bonus: Math.floor((node.data / totalSales) * bonus),
  }));
}

const bonus = 3000000;
const line = lineWithHighestSales(input, bonus);

const lineWithBonuses = calculateBonus(line.path, bonus);

console.log("Result :", JSON.stringify(lineWithBonuses));

var expectedLine = [
  { id: "SE1", bonus: 550000 },
  { id: "SE2", bonus: 560000 },
  { id: "SE5", bonus: 660000 },
  { id: "SE9", bonus: 400000 },
  { id: "SE16", bonus: 290000 },
  { id: "SE17", bonus: 540000 },
];

// console.log("Expected Result :"+JSON.stringify(expectedLine));
