const args = process.argv.slice(2);

const year = args[0] || new Date().getFullYear()
const thisMonth = new Date().getMonth() + 1
const month = args[1] || parseInt(thisMonth)
const todayDay = new Date().getDate();

if (month < 1 || month > 12) {
    console.error('ERROR! Month should be a number between 1 and 12')
    process.exit()
}

if (year < 0) {
    console.error('ERROR! Year should be a number bigger than 0')
    process.exit()
}

calendar(year, month);

function calendar(year, month) {
    console.log(`Year: ${year}`)
    console.log(`Month: ${getMonthName(parseInt(month))}`)
    console.log(`Mon Tue Wed Thu Fri Sat Sun`)
    const daysInMonth = getdaysInMonth(year, month);
    for (let day = 1; day <= daysInMonth; day++) {
        if (day < 10) {
            process.stdout.write(`0`)
        }
        if (day == todayDay && month == thisMonth) {
            process.stdout.write(`-${day}- ` )
            continue;
        }
        process.stdout.write(`${day}  `)
        if (day % 7 == 0) {
            process.stdout.write('\n')
        }
    }
    process.stdout.write('\n')
}

function getMonthName(month) {
    switch(month) {
        case 1: return 'Jan';
        case 2: return 'Feb';
        case 3: return 'Mar';
        case 4: return 'Apr';
        case 5: return 'May';
        case 6: return 'Jun';
        case 7: return 'Jul';
        case 8: return 'Aug';
        case 9: return 'Sep';
        case 10: return 'Oct';
        case 11: return 'Nov';
        case 12: return 'Dec';
        default: break;
    }
}

function getdaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}