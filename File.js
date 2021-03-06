const firstArray = [1, 4, 9, 12, 20];
const secondArray = [8, 5, 9, 12, 20];

const thirdArray = [];
firstArray.forEach((firstValue) => {
    let flag = true;
    secondArray.forEach((secondValue) => {
        if (firstValue === secondValue) {
            flag = false;
        }
});
    if (flag) {
        thirdArray.push(firstValue);
    }
});

secondArray.forEach((secondValue) => {
    let flag = true;
    firstArray.forEach((firstValue) => {
        if (firstValue === secondValue) {
            flag = false;
        }
    });
    if (flag) {
        thirdArray.push(secondValue);
    }
});
