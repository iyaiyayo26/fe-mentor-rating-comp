//ambil tombol angka, parent tombol angka, submit btn, pop-up, rating-comp, div parent tulisan:
const btns = document.querySelector("#btns");
const btn = document.querySelectorAll("#btn");
const submitBtn = document.getElementById("submitBtn");
const popUp = document.getElementById("pop-up");
const ratingComp = document.getElementById("rating-comp");
const tulisanParent = document.getElementById("tulisan-parent");

//pecah tombol-tombol angka (krn dia bentuknya nodelist):
[...btn].forEach((btnAngka) => {
  //kasih event kalau btnAngka diklik:
  btnAngka.addEventListener("click", function () {
    const angka = btnAngka.innerText;

    //kasih event kalau submitBtn di klik:
    submitBtn.addEventListener("click", function () {
      //kasih style displaynya none:
      ratingComp.style.display = "none";

      //munculin component popup:
      popUp.style.display = "block";
      //buat element baru trus di append ke dalem div parent:
      tulisanParent.innerHTML = `<p class="font-Overpass text-center text-base text-[#fb7413]">you selected ${angka} out of 5</p>`;

      console.log(tulisanParent);
    });
  });
});
