
//quicksort
function pivot(arr, start, end) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;

    }
    var greaterCount = start;
    var first = arr[start];
    for (var i = start + 1; i <= end; i++) {
        if (first >= arr[i]) {
            greaterCount++;
            swap(arr, i, greaterCount);
        }
    }
    swap(arr, start, greaterCount);
    //console.log(arr);
    return greaterCount;
}

//console.log(pivot([12, 1, 3, 13, 16, 10, 21]));

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (arr.length <= 1) {
        return arr;
    }

    if (start < end) {
        var pivotPoint = pivot(arr, start, end);
        quickSort(arr, start, pivotPoint - 1);
        quickSort(arr, pivotPoint + 1, end);
    };
    return arr;
}

console.log(quickSort([12, 1, 3, 13, 16, 10, 21]));

function dount(num) {
    if (num) {
        if (num < 0) {
            const posNum = num + (2 * num)
        }
        return num.toString().length;
    }
}

// console.log(donut(1934))

