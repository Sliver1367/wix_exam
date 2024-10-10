function findPeaks(mountain) {
    const peaks = [];

    for (let i = 1; i < mountain.length - 1; i++) {
        if (mountain[i] > mountain[i-1] && mountain[i] > mountain[i+1]){
            peaks.push(i);
        }
    }
    return peaks;
}

let mountain = [1, 4, 3, 8, 5];
console.log(findPeaks(mountain));
mountain = [15, 3, 5, 9, 2, 1];
console.log(findPeaks(mountain));
mountain = [3, 7, 1, 1, 5, 1];
console.log(findPeaks(mountain));
mountain = [15, 3, 7, 9, 4, 1];
console.log(findPeaks(mountain));

