

const hierarchy = {
 
  "srikar@eternalrobotics.com": {
    level: 0,
    reportees: ["krishna@eternalrobotics.com"]
  },

  "krishna@eternalrobotics.com": {
    level: 1,
    reportees: ["supriya@eternalrobotics.com"]
  },

  "supriya@eternalrobotics.com": {
    level: 2,
    reportees: ["sujith@eternalrobotics.com", "s.kishore@eternalrobotics.com"]
  },

  "sujith@eternalrobotics.com": { level: 3, reportees: [] },
  "s.kishore@eternalrobotics.com": { level: 3, reportees: [] }
};



function getUser(email) {
  return hierarchy[email];
}

function getDirectReportees(email) {
  return hierarchy[email]?.reportees || [];
}

function getAllBelow(email) {
  let result = [];

  function dfs(e) {
    const reps = getDirectReportees(e);
    reps.forEach(r => {
      result.push(r);
      dfs(r);
    });
  }

  dfs(email);
  return result;
}

module.exports = {
  hierarchy,
  getUser,
  getDirectReportees,
  getAllBelow
};
