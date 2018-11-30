export function combine(params: { [key: string]: any }, parameters: { [key: string]: any }) {
  Object.keys(parameters).forEach((parameter: string) => {
    params[`filter[${parameter}]`] = parameters[parameter];
  });

  return params;
}
