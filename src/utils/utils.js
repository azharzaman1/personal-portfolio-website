export function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const breakArrayIntoPyramid = (expertise) => {
  // breaking stuff
  let tempExpertise = [...expertise];
  const result = [];
  for (var i = 1; i < tempExpertise.length; i++) {
    let temporary = tempExpertise.slice(0, i);
    tempExpertise = tempExpertise.slice(temporary.length);

    result.push(temporary);

    if (i < tempExpertise.length) {
    } else {
      result.push(tempExpertise);
    }
  }

  return result;
};
