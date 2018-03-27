var cat = document.getElementById('cat');

cat.addEventListener("mouseover", function() {
    /* CHANGE THE HOVER IMAGE HERE */
    cat.setAttribute("src", "https://images.pexels.com/photos/35807/rose-red-rose-romantic-rose-bloom.jpg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb");
});

cat.addEventListener("mouseout", function() {
    /* CHANGE THE HOVER IMAGE HERE TOO */
    cat.setAttribute("src", "./img/rose-blue.jpeg");
});