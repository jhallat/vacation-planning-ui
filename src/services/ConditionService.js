import {PUBLIC_API_URL} from '$env/static/public';
export const getConditions = async () => {
  const conditions = await fetch(`${PUBLIC_API_URL}/api/v1/conditions`).then(res => {
    if (!res.ok) {
      throw new Error("Failed to fetch conditions");
    }
    return res.json();
  }).then(({data}) => {
    return data.conditions
  }).catch(err => {
    throw err;
  });
  return conditions;
}

export const createCondition = async (condition) => {
  const newCondition = await fetch(`${PUBLIC_API_URL}/api/v1/conditions`, {
    method: 'POST',
    body: JSON.stringify(condition),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to create condition');
    }
    return res.json();
  }).then(({data}) => {
    return data.condition;
  }).catch(err => {
    throw err;
  });
  return newCondition;
}
