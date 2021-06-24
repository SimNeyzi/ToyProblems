// complexity O(nlgn) time and O(n) space

function mergeRanges(meetings) {

  // Create a deep clone of meetings to keep the original meetings array
  const copyMeetings = JSON.parse(JSON.stringify(meetings))

  // Sort copyMeetings O(nlogn)
  const sortedMeetings = copyMeetings.sort((a, b) => {
    return a.startTime - b.startTime
  })

  // Initialize mergedMettings
  const mergedMeetings = [sortedMeetings[0]]

  // Compare meeting startTimes and merge accordingly
  for (let i = 0; i < sortedMeetings.length; i++) {
    const currentMeeting = sortedMeetings[i]
    const lastMergedMeeting = mergedMeetings[mergedMeetings.length - 1]

    if (currentMeeting.startTime <= lastMergedMeeting.endTime) {
      lastMergedMeeting.endTime = Math.max(lastMergedMeeting.endTime, currentMeeting.endTime)
    } else {
      mergedMeetings.push(currentMeeting);
    }
  }

  return mergedMeetings

}