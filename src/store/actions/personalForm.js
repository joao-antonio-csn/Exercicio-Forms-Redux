export const PERSONAL_ACTION = 'PERSONAL';

export const personalAction = (personalData) => ({
  type: PERSONAL_ACTION,
  payload: personalData,
});
