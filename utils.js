function getOptimalUnit(firstDate, lastDate) {
  // to do: also consider the size of the container
  const timeSpan = lastDate - firstDate
  return timeSpan < 5000000000
    ? "day"
    : timeSpan < 75000000000
    ? "month"
    : "year"
}

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
    parsedDate.getMilliseconds(),
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

function getMilestones(firstDate, lastDate, unit) {
  // to do: when reaching the max reps, not only stop the loop but also
  // warn user (like "too many milestones, select a greater unit")
  // to do: do not add the last milestone
  let rep = 0
  let currentMilestone = getMilestone(firstDate, unit, false)
  const monthMilestones = [currentMilestone]
  while (currentMilestone <= lastDate && rep++ < MAX_SECURITY_REPS) {
    currentMilestone = getMilestone(currentMilestone, unit)
    monthMilestones.push(currentMilestone)
  }
  return monthMilestones
}

function generateGetPercentage(numbers) {
  const min = Math.min(...numbers)
  const max = Math.max(...numbers)
  return (curr) => ((curr - min) / (max - min)) * 100
}

function getDateFeature(date, options) {
  return new Intl.DateTimeFormat(COUNTRY, options).format(date)
}

function getGreaterUnitDtfOption(unit) {
  const greaterUnitIndex = TIME_UNITS.indexOf(unit) - 1
  if (greaterUnitIndex < 0) return null

  const greaterUnit = TIME_UNITS[greaterUnitIndex]
  return OPTIONS_BY_UNIT[greaterUnit]
}

function getSkeletonNode() {
  // This will be changed to something real
  return document.querySelector("t-skeleton")
}

function getLimitDates(entries) {
  const onlyDates = entries.map((entry) => entry.date)
  return {
    first: Math.min(...onlyDates),
    last: Math.max(...onlyDates),
  }
}

function getUnit(limitDates) {
  return USER_UNIT === "auto"
    ? getOptimalUnit(limitDates.first, limitDates.last)
    : USER_UNIT
}

function getMilestoneData(unit, limitDates) {
  const milestones = getMilestones(limitDates.first, limitDates.last, unit)
  const getStartMilestonePercentage = generateGetPercentage(milestones)
  const milestoneStartPercentages = milestones.map(getStartMilestonePercentage)
  const milestoneWidthPercentages = milestoneStartPercentages.map(
    (leftPercentage, index) => {
      const nextLeftPercentage = milestoneStartPercentages[index + 1]
      return nextLeftPercentage ? nextLeftPercentage - leftPercentage : 0
    }
  )
  return milestones.reduce((acc, milestoneDate, index) => {
    // to do: instead, create it like this from the beginning
    acc.push({
      date: milestoneDate,
      startPercentage: milestoneStartPercentages[index],
      widthPercentage: milestoneWidthPercentages[index],
    })
    return acc
  }, [])
}
