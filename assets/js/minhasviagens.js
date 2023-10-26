const stars = document.querySelectorAll(".stars i");
countstar = document.querySelector(".count_star")

stars.forEach((star, index1) => {
    star.addEventListener("mouseover", () => {
        stars.forEach((star, index2) => {
            index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")

            let count = document.querySelectorAll(".stars .active")
            countstar.textContent = count.length +".0"

        });
    });
});

