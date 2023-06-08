const routeMatchExactOption = (route, key, value) => {
  return route.matched.some(m => {
    if (process.client) {
      // Client
      return Object.values(m.components).some(
        component => component.options && component.options[key] === value
      )
    } else {
      // SSR
      return Object.values(m.components).some(component =>
        Object.values(component._Ctor).some(
          ctor => ctor.options && ctor.options[key] === value
        )
      )
    }
  })
};


export default {
  routeMatchExactOption,
};
