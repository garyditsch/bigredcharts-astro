const calculateSchoolAverages = (data) => {
    const schoolStats = {};
  
    // Aggregate stats for each school
    data.forEach(item => {
      if (!schoolStats[item.school]) {
        schoolStats[item.school] = {
          totalStat: 0,
          count: 0
        };
      }
      schoolStats[item.school].totalStat += item.stat;
      schoolStats[item.school].count += 1;
    });
  
    // Calculate averages
    const averages = Object.entries(schoolStats).map(([school, stats]) => ({
      school,
      averageStat: stats.totalStat / stats.count
    }));
  
    // Sort by average stat in descending order
    averages.sort((a, b) => b.averageStat - a.averageStat);
  
    return averages;
  }

  export default calculateSchoolAverages;