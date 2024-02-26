import {PUBLIC_API_URL} from '$env/static/public';
export const getThingsToPack = async () => {
  const thingsToPack = await fetch(`${PUBLIC_API_URL}/api/v1/things-to-pack`).then(res => {
    if (!res.ok) {
      throw new Error("Failed to fetch things to pack");
    }
    return res.json();
  }).then(({data}) => {
    console.log(data);
    return data.thingsToPack;
  }).catch(err => {
    throw err;
  });
  return thingsToPack;
}

export const createThingToPack = async (thingToPack) => {
  console.log(thingToPack);
  const newThingToPack = await fetch(`${PUBLIC_API_URL}/api/v1/things-to-pack`, {
    method: 'POST',
    body: JSON.stringify(thingToPack),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to create thing to pack');
    }
    return res.json();
  }).then(({data}) => {
    return data.thingsToPack;
  }).catch(err => {
    throw err;
  });
  return newThingToPack;
}

export const updateThingToPack = async (thingToPackId, thingToPack) => {
  const updatedThingToPack = await fetch(`${PUBLIC_API_URL}/api/v1/things-to-pack/${thingToPackId}`, {
    method: 'PUT',
    body: JSON.stringify(thingToPack),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(res => {
    if (!res.ok) {
      throw new Error('Failed to update thing to pack');
    }
    return thingToPack;
  }).catch(err => {
    throw err;
  });
  return updatedThingToPack;
}
