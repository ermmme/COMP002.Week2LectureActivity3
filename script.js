myGrade = 100
if (myGrade >= 90) {
    console.log("A")
} else if (myGrade >= 80 && myGrade <= 89) {
    console.log("B")
} else if (myGrade >= 70 && myGrade <= 79) {
    console.log("C")
} else if (myGrade >= 60 && myGrade <= 69) {
    console.log("D")
} else {
    console.log("F")
}

switch (true) {
    case (myGrade >= 90):
        console.log("A")
        break
    case (myGrade >= 80 && myGrade <= 89):
        console.log("B")
        break
    case (myGrade >= 70 && myGrade <= 79):
        console.log("C")
        break
    case (myGrade >= 60 && myGrade <= 69):
        console.log("D")
        break
    default:
        console.log("F")
}

for (i = 1; i <= 100; i++) {
    if (i % 2 == 0) {
        console.log(i)
    } else {
        console.log("!");
    }
}
