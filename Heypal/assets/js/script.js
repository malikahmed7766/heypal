$(document).ready(() => {
    console.log("Crafting Innovative Web Solutions Digital Experiences - Code Crafter");
    $(".search-toggle").click(()=> { 
        $(".search").toggleClass("active");
    });

    $("#open-sidebar").click(()=> { 
        $(".side-col").addClass("active");
    });

    $("#close-sidebar").click(()=> { 
        $(".side-col").removeClass("active");
    });
});