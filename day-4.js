const _ = require("lodash");
const allRecords = require("./input/day-4");

const entries = _.sortBy(getEntriesAsArrayOfObjects(allRecords), [
  "date",
  "time"
]);
const entriesWithGuardIds = applyGuardIdsToAllEntries(entries);
console.log(entriesWithGuardIds);

// TODO: Figure out who has the most minutes asleep

function getEntriesAsArrayOfObjects(array) {
  return array.reduce((accumulator, entry) => {
    accumulator.push({
      date: entry.substring(1, 11),
      time: entry.substring(12, 17),
      hour: parseInt(entry.substring(12, 14)),
      minute: parseInt(entry.substring(15, 17)),
      activity: entry.substring(19)
    });
    return accumulator;
  }, []);
}

function applyGuardIdsToAllEntries(array) {
  let guardId = null;
  return array.map(entry => {
    let guardHash = entry.activity.indexOf("#");
    if (guardHash !== -1) {
      guardId = entry.activity.substring(guardHash).split(" ")[0];
    }
    return {
      ...entry,
      guardId
    };
  });
}
