const max_sub_array_of_size_k = function (k, arr) {
  let maxSum = 0;
  let windowSum = 0;
  let windowStart = 0;

  for (let windowEnd = 0; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd];

    if (windowEnd >= k - 1) {
      if (maxSum <= windowSum) maxSum = windowSum;

      windowSum -= arr[windowStart]; // subtract the element going out
      windowStart += 1; // slide the window ahead
    }
  }

  return maxSum;
};
