export const Craft = () => {    
    return (
      <ul class="container craft__gallery">
        <li class="craft__item">
          <img
            src="./images/1/img1.jpg"
            alt="рабочее место разработчика ПО 1"
            width="370"
          />
          <div class="craft__bg-title">
            <p class="craft__img-title">Десктопные приложения</p>
          </div>
        </li>
        <li class="craft__item">
          <img
            src="./images/1/img2.jpg"
            alt="рабочее место разработчика ПО 2"
            width="370"
          />
          <div class="craft__bg-title">
            <p class="craft__img-title">Мобильные приложения</p>
          </div>
        </li>
        <li class="craft__item">
          <img
            src="./images/1/img3.jpg"
            alt="рабочее место разработчика ПО 3"
            width="370"
          />
          <div class="craft__bg-title">
            <p class="craft__img-title">Дизайнерские решения</p>
          </div>
        </li>
      </ul>
    );
};