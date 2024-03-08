
function toggleSearch() {
    var searchIcon = document.getElementById("search-icon");
    var searchContainer = document.getElementById("search-container");

    var searchInput = searchContainer.querySelector("input[type='text']");
    if (searchInput) {
        searchContainer.removeChild(searchInput);
        searchIcon.style.display = "inline-block"; 
    } else {
       
        searchInput = document.createElement("input");
        searchInput.type = "text";
        searchInput.placeholder = "Search...";
        searchInput.classList.add("search-input");
        searchContainer.appendChild(searchInput);
        searchIcon.style.display = "none"; 

   
        searchInput.focus();

  
        document.addEventListener("click", closeSearch);
    }
}

function closeSearch(event) {
    var searchContainer = document.getElementById("search-container");
    var searchIcon = document.getElementById("search-icon");

    
    if (!searchContainer.contains(event.target)) {
        var searchInput = searchContainer.querySelector("input[type='text']");
        if (searchInput) {
            
            searchContainer.removeChild(searchInput);
            searchIcon.style.display = "inline-block"; 

           
            document.removeEventListener("click", closeSearch);
        }
    }
}

document.addEventListener("click", function(event) {
    if (event.target.id === "search-icon") {
        toggleSearch();
    }
});