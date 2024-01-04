
const MAP_HEADINGS = [
  "Tube and rail maps", 
  "Bus maps", 
  "Cycle map", 
  "River maps", 
  "Congestion Charge maps", 
  "Ultra Low Emission Zone maps", 
  "Low Emission Zone maps", 
  "Red routes map",
  "Oyster Ticket Stop map", "TfL Go", 
  "Visitor and tourist maps", 
  "Audio maps", 
  "Open up a free Footways map",
]

export const getRandomInt = (min, max) => {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const getMapHeadings = MAP_HEADINGS[getRandomInt(0, 11)]