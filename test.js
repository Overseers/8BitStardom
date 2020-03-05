function funcToRun() {
    Array(5000000).fill(undefined).map((e, index) => index + 1);
    console.log('finished')
}

setInterval(funcToRun, 1)