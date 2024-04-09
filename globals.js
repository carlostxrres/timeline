const MAX_SECURITY_REPS = 500

const TIME_UNITS = [
  "year",
  "month",
  "day",
  "hour",
  "minute",
  "second",
  "millisecond",
]

// to do: make this more elegant
const OPTIONS_BY_UNIT = {
  year: { year: "numeric" },
  month: { month: "long" },
  day: { day: "numeric" },
  hour: { hour: "numeric" },
  minute: { minute: "numeric" },
  second: { second: "numeric" },
  millisecond: { millisecond: "numeric" },
}

const LABEL_OPTIONS_BY_UNIT = [
  ["year", "numeric"],
  ["month", "short"],
  ["day", "numeric"],
  ["hour", "numeric"],
  ["minute", "numeric"],
  ["second", "numeric"],
  ["millisecond", "numeric"],
]
