// SimpleSlider.jsx
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SimpleSlider() {
  const settings = {
    dots: true, // Показывать точки навигации
    infinite: true, // Бесконечный цикл
    speed: 500, // Скорость анимации
    slidesToShow: 2, // Количество отображаемых слайдов
    slidesToScroll: 1, // Количество прокручиваемых слайдов
    // Дополнительные настройки: autoplay, responsive, prevArrow, nextArrow и т.д.
  };

  return (
    <div style={{ width: "80%", margin: "0 auto" }}>
      {" "}
      {/* Пример контейнера */}
      <Slider {...settings}>
        <div>
          <h3>Слайд 1</h3>
        </div>
        <div>
          <h3>Слайд 2</h3>
        </div>
        <div>
          <h3>Слайд 3</h3>
        </div>
        <div>
          <h3>Слайд 4</h3>
        </div>
      </Slider>
    </div>
  );
}

//export default SimpleSlider;

// Carousel.jsx



function Carousel({ data, settings, CardComponent }) {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Установка по умолчанию: 4 карточки
    slidesToScroll: 1,
    responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ]
  };

  const sliderSettings = { ...defaultSettings, ...settings };

  return (
    <Slider {...sliderSettings}>
      {/* Мы ожидаем, что data - это массив объектов, а CardComponent - компонент карточки */}
      {data.map((item) => (
        // Каждый дочерний элемент Slider становится слайдом
        <div key={item.id}>
          {/* Рендерим переданный компонент, используя данные из item */}
          <CardComponent 
            name={item.name}
            position={item.position}
            image={item.image}
            // Если бы были соцсети, передали бы и их: 
            // socials={item.socials}
          />
        </div>
      ))}
    </Slider>
  );
}

export {Carousel, SimpleSlider};
