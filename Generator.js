function* test() {
  let a = 2;
  yield 3;
  yield 4;
}
const sss = test();

console.log(sss.next());
