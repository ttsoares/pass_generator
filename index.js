const features = [
  { type: "minuscules", actv: false }, //0
  { type: "maiuscules", actv: true }, //1
  { type: "numbers", actv: true }, //2
  { type: "symbols", actv: false }, //3
];

const array_features_nums = features
  .map((elm, index) => {
    if (elm.actv) {
      return index;
    } else return null;
  })
  .filter((elm) => elm != null);

//const array_indexes = array_features_nums.filter((elm) => elm != null);

console.table(array_features_nums);
