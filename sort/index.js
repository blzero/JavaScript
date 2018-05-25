/**
 * @author [bizhenyu]
 * @email 
 * @create date 2018-05-25 10:27:19
 * @modify date 2018-05-25 10:27:19
 * @desc [description]
 */

let sortData = [];

/**
 * @param {Number} n 
 */
let createData = function (n) {
    n = n ? n : 20;
    let timeFlag = 'generate data';
    console.time(timeFlag);
    for (let i = 0; i < n; i++) {
        let num = Math.random() * 1000;
        num = Math.floor(num);
        sortData.push(num);
    }
    console.timeEnd(timeFlag);
    console.log(sortData);
}



let defaultSort = function (data) {
    let timeFlag = 'default sort';
    console.time(timeFlag);
    data.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }

        return 0;
    });
    console.timeEnd(timeFlag);
    console.log(data);
}

/**
 * O(N²)
 * @param {Array} data 
 */
let bubbleSort = function (data) {
    let timeFlag = 'bubble sort';
    let length = data.length;

    console.time(timeFlag);
    for (let i = 0; i < length - 1; i++) {
        for (let j = 0; j < length - i; j++) {
            if (data[j] > data[j + 1]) {
                let t = data[j];
                data[j] = data[j + 1];
                data[j + 1] = t;
            }
        }
    }
    console.timeEnd(timeFlag);
    console.log(data);
}
/**
 *  O(N²)，它的平均时间复杂度为 O (NlogN)。
 * @param {Array} data 
 */
let quickSort = function (data) {

    let timeFlag = 'quick sort';
    let qsort = function (left, rigth) {
        if (left > rigth) {
            return;
        }
        let base = data[left];
        let i = left,
            j = rigth;
        while (i != j) {
            // 先从右往左找 小于base的数
            while (data[j] >= base && i < j) {
                j--;
            }
            // 从左往右找 大于base的数
            while (data[i] <= base && i < j) {
                i++;
            }

            if (i < j) {
                let t = data[i];
                data[i] = data[j];
                data[j] = t;
            }
        }

        // 将基数归位
        data[left] = data[i];
        data[i] = base;
        // console.log(data);
        qsort(left,i-1);
        qsort(i+1,rigth);
    }
    console.time(timeFlag);
    qsort(0,data.length-1);
    console.timeEnd(timeFlag);
    console.log(data);

}



createData();

// defaultSort(sortData);
// bubbleSort(sortData);
quickSort(sortData);