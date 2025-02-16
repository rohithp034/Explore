document.addEventListener("DOMContentLoaded", function() {
    const searchInput = document.getElementById("search");
    const searchResults = document.getElementById("search-results");

    const restaurants = [
        { name: "Restaurant 1", cuisine: "Italian, Pizza", link: "restaurant1.html" },
        { name: "Restaurant 2", cuisine: "Indian, Biryani", link: "restaurant2.html" },
        { name: "Restaurant 3", cuisine: "Chinese, Noodles", link: "restaurant3.html" },
        { name: "Restaurant 4", cuisine: "Japanese, Sushi", link: "restaurant4.html" },
        { name: "Restaurant 5", cuisine: "Korean, Bulgogi", link: "restaurant5.html" },
        { name: "Restaurant 6", cuisine: "Egyptian Breakfast", link: "restaurant6.html" }
    ];

    searchInput.addEventListener("input", function() {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = "";
        
        if (query.trim() === "") {
            searchResults.style.display = "none";
            return;
        }

        const filteredRestaurants = restaurants.filter(r => 
            r.name.toLowerCase().includes(query) || r.cuisine.toLowerCase().includes(query)
        );

        if (filteredRestaurants.length === 0) {
            searchResults.style.display = "none";
            return;
        }

        filteredRestaurants.forEach(restaurant => {
            const resultItem = document.createElement("div");
            resultItem.textContent = restaurant.name + " - " + restaurant.cuisine;
            resultItem.addEventListener("click", function() {
                window.location.href = restaurant.link;
            });

            searchResults.appendChild(resultItem);
        });

        searchResults.style.display = "block";
    });

    document.addEventListener("click", function(event) {
        if (!searchInput.contains(event.target) && !searchResults.contains(event.target)) {
            searchResults.style.display = "none";
        }
    });
});

