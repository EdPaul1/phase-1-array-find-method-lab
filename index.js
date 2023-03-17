// code your solution here
function superbowlWin(record) {
  const winningRecord = record.find(event => event.result === "W");
  if (winningRecord) {
    return winningRecord.year;
  } else {
    return undefined;
  }
}
