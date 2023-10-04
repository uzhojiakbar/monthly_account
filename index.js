const toliqNarx = document.getElementById("toliqNarx");
const teacher = document.getElementById("teacher");
const sotuv = document.getElementById("sotuv");
const marketing = document.getElementById("marketing");
const arenda = document.getElementById("arenda");
const investor = document.getElementById("investor");
const asoschi = document.getElementById("asoschi");
const hayriya = document.getElementById("hayriya");

full = 0;
limit = 12000000;
function calc() {
  if (full) {
    if (full / 3 < limit) {
      teacher.innerText = full / 3;
      qolgan_pul -= full / 3;
    } else {
      teacher.innerText = limit;
      qolgan_pul -= limit;
    }

    if (full / 10 < limit) {
      sotuv.innerText = full / 10;
      qolgan_pul -= full / 10;
    } else {
      sotuv.innerText = limit;
      qolgan_pul -= limit;
    }
    marketing.innerText = full / 10;
    qolgan_pul -= full / 10;

    arenda.innerText = qolgan_pul / 2;

    qolgan_pul -= qolgan_pul / 2;

    // 33.4
    hayriya.innerText = (qolgan_pul / 100) * 33.4;
    qolgan_pul -= (qolgan_pul / 100) * 33.3;

    // 33.3
    investor.innerText = qolgan_pul / 2;
    qolgan_pul -= qolgan_pul / 2;

    // 33.3
    asoschi.innerText = qolgan_pul;
    qolgan_pul = 0;
    full = 0;
  }
}

toliqNarx.addEventListener("change", (e) => {
  full = e.target.value;
  qolgan_pul = full;
});

btn.addEventListener("click", () => {
  calc();
});
