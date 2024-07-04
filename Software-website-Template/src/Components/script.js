// header drawer
const drawerButton = document.getElementById("drawerButton");
const drawer = document.getElementById("drawer");
const closeDrawerButton = document.getElementById("closeDrawerButton");

drawerButton.addEventListener("click", () => {
  drawer.classList.toggle("drawer-hidden");
  drawer.classList.toggle("drawer-visible");
});

closeDrawerButton.addEventListener("click", () => {
  drawer.classList.add("drawer-hidden");
  drawer.classList.remove("drawer-visible");
});

// Company
$().ready(function () {
  $(".slick-carousel").slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 2,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024, // Tablets and small laptops
        settings: {
          slidesToShow: 1,
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

$().ready(function () {
  $(".slick-carousel2").slick({
    arrows: true,
    centerPadding: "0px",
    dots: true,
    slidesToShow: 5,
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

// tabs Selection

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

var swiper = new Swiper(".teamswiper", {
  slidesPerView: 1,
  spaceBetween: 32,
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  grabCursor: true,
  loop: true,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});

// blog section
