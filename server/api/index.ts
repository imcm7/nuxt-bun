export default defineEventHandler((event) => {
	Bun.password.verify('1', '1');
	// console.log(Bun);
  return 1;
})
