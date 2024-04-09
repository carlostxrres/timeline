const limitDates = getLimitDates(EVENTS)
const unit = getUnit(limitDates)
const milestoneData = getMilestoneData(unit, limitDates)

createSkeleton(unit, milestoneData)
createPointLabels(milestoneData)

function createSkeleton(unit, milestoneData) {
  const dtfOption = OPTIONS_BY_UNIT[unit]
  const greaterUnit = moveToUnit(unit, -1)
  const greaterUnitDtfOption = OPTIONS_BY_UNIT[greaterUnit]

  const skeleton = getSkeletonNode()
  skeleton.innerHTML = milestoneData
    .map((milestone, index) => {
      if (index + 1 === milestoneData.length) return ""

      const name = getDateFeature(milestone.date, dtfOption)
      const greaterUnitName = greaterUnitDtfOption
        ? getDateFeature(milestone.date, greaterUnitDtfOption)
        : null

      const greaterUnitAttribute = greaterUnitName
        ? ` data-t-greater-name="${greaterUnitName}"`
        : ""

      return (
        `<t-bone` +
        ` data-t-unit="${unit}"` +
        ` data-t-name="${name}"` +
        greaterUnitAttribute +
        ` style="` +
        /**/ `left: ${milestone.startPercentage}%;` +
        /**/ `width: ${milestone.widthPercentage}%;` +
        `"` +
        `>${name}</t-bone>`
      )
    })
    .join("")
}

function createPointLabels(milestoneData) {
  // To do: show also a readable date in the label
  const skeleton = getSkeletonNode()
  skeleton.innerHTML += EVENTS.map((event) => {
    const limitMilestones = getLimitDates(milestoneData)
    const startPercentage =
      ((event.date - limitMilestones.first) /
        (limitMilestones.last - limitMilestones.first)) *
      100

    const markerDateOptions = getMarkerDateOptions(unit)
    const displayName = event.name || ""
    const displayDate = new Date(event.date).toLocaleDateString(
      COUNTRY,
      markerDateOptions
    )
    return (
      `<t-marker` +
      ` data-t-time="${event.date}"` +
      ` style="left: ${startPercentage}%;"` +
      `>` +
      /**/ `<div class="event-date">${displayDate}</div>` +
      /**/ `<div class="event-name">${displayName}</div>` +
      `</t-marker>`
    )
  }).join("")
}

// Then: add ranges functionality
