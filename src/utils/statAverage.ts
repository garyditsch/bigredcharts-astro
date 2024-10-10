// utils/statAverage.ts

export interface SchoolAverage {
  school: string;
  averageStat: number;
  isTop33Percent: boolean;
}

function calculateSchoolAverages(data: any[]): SchoolAverage[] {
  // Calculate total stats per school
  const schoolTotals: { [key: string]: number[] } = {};

  data.forEach((item) => {
    if (!schoolTotals[item.school]) {
      schoolTotals[item.school] = [];
    }
    schoolTotals[item.school].push(item.stat);
  });

  // Calculate average stats per school
  const averages: SchoolAverage[] = Object.keys(schoolTotals).map((school) => {
    const stats = schoolTotals[school];
    const averageStat =
      stats.reduce((total, num) => total + num, 0) / stats.length;
    return { school, averageStat, isTop33Percent: false }; // We'll update isTop33Percent next
  });

  // Sort schools by averageStat in descending order
  averages.sort((a, b) => b.averageStat - a.averageStat);

  // Determine the index that separates the top 33%
  const top33PercentIndex = Math.ceil(averages.length / 3);

  // Update isTop33Percent property
  averages.forEach((item, index) => {
    item.isTop33Percent = index < top33PercentIndex;
  });

  return averages;
}

export default calculateSchoolAverages;
