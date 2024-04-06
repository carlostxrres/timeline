
const MAX_REPS = 500

const TIME_UNITS = [
    "year",
    "month",
    "day",
    "hour",
    "minute",
    "second",
    "millisecond"
]

const OPTIONS_BY_UNIT = {
    year: { year: "numeric" },
    month: { month: "long" },
    day: { day: "numeric" },
    hour: { hour: "numeric" },
    minute: { minute: "numeric" },
    second: { second: "numeric" },
    millisecond: { millisecond: "numeric" }
}

const COUNTRY = "en-US"

const entries = [
    {
        date: 1625000000000,
        name: "Hello"
    },
    {
        date: 1650000000000,
        name: ""
    }
]



// create base html
const onlyDates = entries.map(entry => entry.date)

const firstMilestone = Math.min(...onlyDates)
const lastMilestone = Math.max(...onlyDates)

const timeSpan = lastMilestone - firstMilestone
const unit = timeSpan < 5000000000 ? "day" : timeSpan < 75000000000 ? "month" : "year" // to do: también tener en cuenta el tamaño del contenedor

const milestones = getMilestones(firstMilestone, lastMilestone, unit)
const getStartMilestonePercentage = generateGetPercentage(milestones)
const startPercentages = milestones.map(getStartMilestonePercentage)
const widthPercentages = startPercentages.map((leftPercentage, index) => {
    const nextLeftPercentage = startPercentages[index + 1]
    return nextLeftPercentage ? nextLeftPercentage - leftPercentage : 0
})

const dtfOption = OPTIONS_BY_UNIT[unit]
const greaterUnitDtfOption = getGreaterUnitDtfOption(unit)

document.querySelector("t-skeleton").innerHTML = milestones.map((milestone, index) => {
    if (index + 1 === milestones.length) return ""
    
    const name = getDateFeature(milestone, dtfOption)
    const greaterUnitName = greaterUnitDtfOption ? getDateFeature(milestone, greaterUnitDtfOption) : null

    return ""
        + `<t-bone`
        + ` data-t-unit="${unit}"`
        + ` data-t-name="${name}"`
        + (greaterUnitName ? ` data-t-greater-name="${greaterUnitName}"` : "")
        + ` style="`
        + /**/`left: ${startPercentages[index]}%;`
        + /**/`width: ${widthPercentages[index]}%;`
        + `"`
        + `>${name}</t-bone>`
}).join("")

// Now, add the points


// In the future, add the possibility of "ranges"



//// old way:
// add markers
entries.forEach(entry => {

    const { date, name } = entry

    const { monthName, monthNum, yearNum, dayNum } = getDateFeatures(date)

    // Get percentage within the month
    const isDecember = monthNum > 11
    const yearNextMonth = isDecember ? yearNum + 1 : yearNum
    const monthNextMonth = isDecember ? 1 : monthNum + 1

    const monthMin = new Date(`${yearNum}-${monthNum}-01`).getTime()
    const monthMax = new Date(`${yearNextMonth}-${monthNextMonth}-01`).getTime() - 1
    const monthDif = monthMax - monthMin
    const monthPer = ((date - monthMin) / monthDif) * 100

    // console.log(monthPer, year, month)
    const $month = document.querySelector(`tl-month[data-year="${yearNum}"][data-month="${monthName}"]`)
    const $marker = document.createElement('tl-marker')
    $marker.style.left = `${monthPer}%`
    $marker.dataset.day = dayNum // we can also add hour, minutes, etc
    $marker.textContent = name
    $month.appendChild($marker)
})

function getMilestone(date, unit, getNext = true) {
    const parsedDate = new Date(date)
    // to do: handle incorrect date
    const allParams = [
        parsedDate.getFullYear(),
        parsedDate.getMonth(),
        parsedDate.getDate(),
        parsedDate.getHours(),
        parsedDate.getMinutes(),
        parsedDate.getSeconds(),
        parsedDate.getMilliseconds()
    ]
    const necessaryParams = allParams.slice(0, TIME_UNITS.indexOf(unit) + 1)

    if (getNext) {
        necessaryParams[necessaryParams.length - 1] += 1
    }

    if (unit === "year") {
        necessaryParams.push(0)
    }

    return new Date(...necessaryParams).getTime()
}

function getMilestones(firstMilestone, lastMilestone, unit) {
    let rep = 0
    let currentMilestone = getMilestone(firstMilestone, unit, false)
    const monthMilestones = [currentMilestone]
    while (currentMilestone <= lastMilestone && rep++ < MAX_REPS) {
        currentMilestone = getMilestone(currentMilestone, unit)
        monthMilestones.push(currentMilestone)
    }
    return monthMilestones
}

// function getAsPercentage(min, max, curr) {
//     return ((curr - min) / (max - min)) * 100
// }

function generateGetPercentage(numbers) {
    const min = Math.min(...numbers)
    const max = Math.max(...numbers)
    return curr => ((curr - min) / (max - min)) * 100
}

function getDateFeatures(date) {
    const monthName = new Intl
        .DateTimeFormat(COUNTRY, { month: "long" })
        .format(date)

    const monthNum = parseInt(new Intl
        .DateTimeFormat(COUNTRY, { month: "numeric" })
        .format(date))

    const yearNum = parseInt(new Intl
        .DateTimeFormat(COUNTRY, { year: "numeric" })
        .format(date))

    const dayNum = parseInt(new Intl
        .DateTimeFormat(COUNTRY, { day: "numeric" })
        .format(date))

    return { monthName, monthNum, yearNum, dayNum }
}

function getDateFeature(date, options) {
    return new Intl
        .DateTimeFormat(COUNTRY, options)
        .format(date)
}

function getGreaterUnitDtfOption(unit) {
    const greaterUnitIndex = TIME_UNITS.indexOf(unit) - 1
    if (greaterUnitIndex < 0) return null

    const greaterUnit = TIME_UNITS[greaterUnitIndex]
    return OPTIONS_BY_UNIT[greaterUnit]
}


// function getMonthMilestones(min, max) {
//     const getFirstOfMonthString = date => {
//         const parsedDate = new Date(date)
//         const month = parsedDate.getMonth() + 1
//         const paddedMonth = addZeroPad(month)
//         const year = parsedDate.getFullYear()
//         return `${paddedMonth}/01/${year}`
//     }

//     const getNextFirstOfMonthString = prevMonthString => {
//         const [month, day, year] = prevMonthString.split("/").map(string => parseInt(string))
//         return month < 12 ? [addZeroPad(month + 1), "01", year].join("/") : ["01", "01", year + 1].join("/")
//     }

//     const stringToNum = date => new Date(date).getTime()

//     const monthMilestones = []
//     let currentFirstOfMonthString = getFirstOfMonthString(min)
//     let currentFirstOfMonthNum = stringToNum(currentFirstOfMonthString)
//     monthMilestones.push(currentFirstOfMonthNum)
//     while (currentFirstOfMonthNum < max) {
//         currentFirstOfMonthString = getNextFirstOfMonthString(currentFirstOfMonthString)
//         currentFirstOfMonthNum = stringToNum(currentFirstOfMonthString)
//         monthMilestones.push(currentFirstOfMonthNum)
//     }
//     return monthMilestones
// }