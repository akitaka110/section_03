// constで定義したオブジェクトはプロパティの変更が可能
const val4 = {
  name: "aki",
  age: 26
};
val4.name = "aki110";
val4.address = "Japan";
console.log(val4);

// constで定義した配列はプロパティの変更が可能
const val5 = ["dog", "cat"];
val5[0] = "bird";
val5.push("monkey");
console.log(val5);
