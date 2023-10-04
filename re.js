const general = (n) => {
  let ustoz = 100_000;
  let sotuv = 30_000;
  let marketing = 30_000;
  let arenda = (n - ustoz - sotuv - marketing) * 0.5;
  let qolgani = Number((((arenda / 3) * 100) / arenda).toFixed(1));
  return (students = (k) => {
    k = parseInt(k / arenda);
    return k;
  });
};
console.log(general(600_000)(2_440_000));
