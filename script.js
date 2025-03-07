const swiper1 = new Swiper('.mySwiper-categorias', {
  loop: true,

  pagination: {
    el: '.btn-pagination-1',
    clickable: true,
  },

  navigation: {
    nextEl: '.btn-next-1',
    prevEl: '.btn-prev-1',
  },

  spaceBetween: 10,  // Ajuste o valor do espaçamento entre os slides
  scrollbar: {
    el: '.swiper-scrollbar',
  },
  slidesPerView: 5,

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 5, // Menor espaço em telas menores
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 15,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 25,
    }
  }

  });

 
 
  function enviarWhatsAppIcone() {
    const telefone = "5511995505140";
    const url = `https://wa.me/${telefone}?`;
    window.open(url, "_blank");
}

function enviarWhatsAppSuporte() {
  const telefone = "5511995505140";
  const url = `https://wa.me/${telefone}?text=Olá, estou com duvidas, gostaria de um suporte para me auxiliar!`;
  window.open(url, "_blank");
}

function buscar() {
  let input = document.getElementById("exampleDataList").value;
  if (input) {
      // Aqui você pode redirecionar para uma página de busca, exemplo:
      window.location.href = "Pesquisar.html?query=" + encodeURIComponent(input);
  } else {
      alert("Digite algo para buscar.");
  }
}