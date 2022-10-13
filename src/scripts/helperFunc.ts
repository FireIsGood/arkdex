export function filterObjectsBySubValue(object: any, subValue: string, desiredValue: string) {
  interface Output {
    [key: string]: Object
  }

  let output: Output = {};
  Object.keys(object).filter((key) => object[key][subValue] === desiredValue).forEach((item) => {
    output[item] = object[item]
  })
  return output
}

let list = {
  wow: {
    name: "wow!",
    number: 1
  },
  sus: {
    name: "suspicious"
  },
  hah: {
    name: "wow!"
  }
}

let res = filterObjectsBySubValue(list, "name", "wow!")
res
