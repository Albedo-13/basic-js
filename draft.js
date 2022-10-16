// Draft to test custom test cases

function renameFiles(names) {
    const uniqueNames = [];
    for (let i = 0; i < names.length; i++) {
        if (!uniqueNames.includes(names[i])) {
            uniqueNames.push(names[i]);
        } else {
            let postfixNumber = 1;
            let newName = names[i];
            while (uniqueNames.includes(newName)) {
                newName = `${names[i]}(${postfixNumber})`;
                ++postfixNumber;
            }
            uniqueNames.push(newName);
        }

    }

    return uniqueNames;
}

// ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));