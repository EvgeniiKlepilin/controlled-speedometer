const animationDuration = 800;

function initializeValues(average, min, max) {
    const averageValue = document.getElementById("averageValue");
    const minValue = document.getElementById("minValue");
    const maxValue = document.getElementById("maxValue");

    averageValue.innerHTML = average;
    minValue.innerHTML = min;
    maxValue.innerHTML = max;
}

function valueToDegrees(target, min, max) {
    return (target - min) * 180 / (max - min);
}

function startSpeedometer() {
    const needle = document.getElementById("needle");
    needle.style.transform = 'rotate(180deg)';
    setTimeout(() => needle.style.transform = 'rotate(0deg)', animationDuration + 200);
}

function moveNeedle(angle) {
  const needle = document.getElementById("needle");
  needle.style.transform = `rotate(${angle}deg)`;
}

function resetNeedle() {
  const needle = document.getElementById("needle");
  needle.style.transform = null;
}

function getEstimate() {
    let givenRate = parseInt(document.getElementById("givenRate").value);
    const expectedRate = parseInt(document.getElementById("expectedRate").value);
    const standardDeviation = parseInt(document.getElementById("standardDeviation").value);

    const min = expectedRate - standardDeviation; 
    const max = expectedRate + standardDeviation;

    if (givenRate < min) {
        givenRate = min;
    } else if (givenRate > max) {
        givenRate = max;
    }

    const targetDegrees = valueToDegrees(givenRate, min, max);

    initializeValues(expectedRate, min, max);
    moveNeedle(targetDegrees);
}

// function setupSlider() {
//     const slider = document.getElementById("slider");
//     slider.oninput = function () {
//         moveNeedle(this.value);
//     }
// }
