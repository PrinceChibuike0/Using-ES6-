





class DescriptiveStatistics {
    constructor(data) {
      this.data = data;
    }
  
    // Measures of Central Tendency
  
    // Mean
    calculateMean() {
      const sum = this.data.reduce((acc, val) => acc + val, 0);
      return sum / this.data.length;
    }
  
    // Median
    calculateMedian() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
      return sortedData.length % 2 === 0
        ? (sortedData[mid - 1] + sortedData[mid]) / 2
        : sortedData[mid];
    }
  
    // Mode
    calculateMode() {
      const frequencyMap = {};
      this.data.forEach((value) => {
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
      });
  
      let mode;
      let maxFrequency = 0;
  
      for (const value in frequencyMap) {
        if (frequencyMap[value] > maxFrequency) {
          mode = value;
          maxFrequency = frequencyMap[value];
        }
      }
  
      return parseInt(mode);
    }
  
    // Measures of Dispersion
  
    // Range
    calculateRange() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      return sortedData[sortedData.length - 1] - sortedData[0];
    }
  
    // Variance
    calculateVariance() {
      const mean = this.calculateMean();
      const squaredDifferences = this.data.map((value) => (value - mean) ** 2);
      const sumSquaredDiff = squaredDifferences.reduce((acc, val) => acc + val, 0);
      return sumSquaredDiff / this.data.length;
    }
  
    // Standard Deviation
    calculateStandardDeviation() {
      return Math.sqrt(this.calculateVariance());
    }
  
    // Interquartile Range (IQR)
    calculateIQR() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
      const lowerHalf = mid % 2 === 0 ? sortedData.slice(0, mid) : sortedData.slice(0, mid + 1);
      const upperHalf = sortedData.slice(mid);
  
      return this.calculateMedian(upperHalf) - this.calculateMedian(lowerHalf);
    }
  
    // Quartiles
    calculateQuartiles() {
      const sortedData = this.data.slice().sort((a, b) => a - b);
      const mid = Math.floor(sortedData.length / 2);
      const lowerHalf = mid % 2 === 0 ? sortedData.slice(0, mid) : sortedData.slice(0, mid + 1);
      const upperHalf = sortedData.slice(mid);
  
      return {
        Q1: this.calculateMedian(lowerHalf),
        Q2: this.calculateMedian(),
        Q3: this.calculateMedian(upperHalf),
      };
    }
  }
  
  // Example usage
  const data = [4, 7, 1, 9, 2, 5, 6, 8, 3, 7];
  const stats = new DescriptiveStatistics(data);
  
  console.log('Mean:', stats.calculateMean());
  console.log('Median:', stats.calculateMedian());
  console.log('Mode:', stats.calculateMode());
  console.log('Range:', stats.calculateRange());
  console.log('Variance:', stats.calculateVariance());
  console.log('Standard Deviation:', stats.calculateStandardDeviation());
  console.log('IQR:', stats.calculateIQR());
  console.log('Quartiles:', stats.calculateQuartiles());
  