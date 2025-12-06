function calculatePercentage(newValue, oldValue) {
  return Math.round(((newValue - oldValue) / oldValue) * 100);
}

export default calculatePercentage;
