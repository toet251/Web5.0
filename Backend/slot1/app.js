const fu = require('./FileUtils.js');

fu.readfile(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    data.forEach((value) => {
      console.log(value);
    });
    calculate(data);
  }
}
);

calculate = (lines) => {
    let outputLines = [];
    for (let i = 0; i < lines.length; i++) {
        if (lines[i] == '') break;
        let ch = lines[i].split(' ')[0];
        let x = Number(lines[i].split(' ')[1]);
        let checkExisted = false;
        for (let j = 0; j < outputLines.length; j++) {
            if (ch == outputLines[j][0]) {
                outputLines[j][1] += x;
                checkExisted = true;
                break;
            }
        }
        if (!checkExisted) {
            outputLines.push([ch, x])
        }
    }

    let output = '';
    for (let i = 0; i< outputLines.length; i++) {
      output = output.concat(outputLines[i][0], " ", outputLines[i][1], "\n");
    }
    writeFile(process.argv[3], output);
}
