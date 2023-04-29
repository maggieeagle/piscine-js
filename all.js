function all(object) {
    if (Object.entries(object).length == 0) return {}
    const keys = Object.keys(object);
    const values = Object.values(object);
  
    return Promise.all(values).then((resolvedValues) => {
      const resolvedObject = {};
      for (let i = 0; i < keys.length; i++) {
        resolvedObject[keys[i]] = resolvedValues[i];
      }
      return resolvedObject;
    });
  }
  