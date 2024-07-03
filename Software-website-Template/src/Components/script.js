$().ready(function () {
  $(".slick-carousel").slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 2,
    infinite: false,
  });
});

$().ready(function () {
  $(".slick-carousel2").slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 5,
    infinite: false,
  });
});

$(document).ready(function () {
  $(".slick-carousel3").slick({
    arrows: true,
    centerPadding: "20px",
    dots: true,
    slidesToShow: 3,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small laptops
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600, // Mobile devices
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
    ],
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelectorAll("#tabList a");
  const tabContents = document.querySelectorAll(".tab-pane");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all tabs
      tabs.forEach((t) =>
        t.classList.remove("active", "text-white", "bg-[#2F765D]")
      );
      tabs.forEach((t) =>
        t.classList.add(
          "hover:text-gray-900",
          "bg-gray-50",
          "hover:bg-gray-300"
        )
      );

      // Hide all tab contents
      tabContents.forEach((content) => (content.style.display = "none"));

      // Add active class to the clicked tab
      this.classList.add("active", "text-white", "bg-[#2F765D]");
      this.classList.remove(
        "hover:text-gray-900",
        "bg-gray-50",
        "hover:bg-gray-300"
      );

      // Show the corresponding tab content
      const target = this.id.replace("Tab", "Content");
      document.getElementById(target).style.display = "block";
    });
  });
});
