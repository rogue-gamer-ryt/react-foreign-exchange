export const getDate = value => {
  var yesterday = new Date(value);
  yesterday.setDate(yesterday.getDate() - 1);
  var ddOld = String(yesterday.getDate()).padStart(2, "0");
  var mmOld = String(yesterday.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyyOld = yesterday.getFullYear();
  yesterday = yyyyOld + "-" + mmOld + "-" + ddOld;
  return yesterday;
};
