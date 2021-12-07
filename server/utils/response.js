const getSuccessJson = (data) => {
  return {
    code: 200,
    data: { ...data, now: new Date() },
  };
};
module.exports = getSuccessJson;
