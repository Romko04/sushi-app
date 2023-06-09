import { PayloadAction, createSlice } from '@reduxjs/toolkit'
export type languageType = {
  [key:string]: string
}
export interface initialStateType {
    languages: {
        en:languageType
        ua:languageType
    }
    language: 'ua'|'en'
}
const initialState: initialStateType = {
  languages:{
    en:{
        "home": "Main",
        "menu": "Menu",
        "aboutUs": "About us",
        "shipping": "Shipping",
        "Allergens": "Allergens",
        "philadelphia": "Philadelphia",
        "sets": "Sets",
        "drinks": "Drinks",
        "salats": "Salats",
        "sauce": "Sauce",
        "futumaki": "Futumaki",
        "basket": "Basket",
        "london": "London",
        "kyiev": "Kyiev",
        "design": "Вesign Andriy Suhov",
        "dev": "Developer Roman Kurpel",
        "sort": "Sort by",
        "addInBasketBtn": "Add in basket",
        "price": "Price",
        "asc": "Alphabet",
        "rating": "Rating",
        "inBasket": "In Basket",
        "CitySelection": "Select your city",
        "bannerTextBig1": "Spring super set Spring-Katari",
        "bannerTextSmall1": "Feel the taste of freshness, forget about the dull winter",
        "bannerTextBig2": "Summer delicious set Umagi Naki",
        "bannerTextSmall2": "Cheap and tasty",
        "banner__content--title": "The tastiest sushi in ",
        "banner__content--text": "Maximum flavor, minimum rice, with Sushi Dream",
        "banner__content-btn": "Go to the menu",
        "recommendations__content-title": "Not sure what sushi to choose?",
        "recommendations__content-text": "Try our popular sets and immerse yourself in the world of authentic Japanese cuisine",
        "recommendations__swiper-btn": "Shop now",
        "menu__title": "Discover new flavors",
        "menu__subtitle": "Created by us with love and care",
        "aboutUs__title": "Sushi Dream is",
        "aboutUs__text": "More than just sushi delivery. We strive to provide you with true pleasure from the freshness and taste of Japanese cuisine.",
        "aboutUs__content-img__wrapper-title": "Our mission is to offer a product at a fair price, giving it care and attention.",
        "aboutUs__order-content_title": "We have completed over 17,000 orders and trusted by more than 9,000 satisfied clients.",
        "shipping__title": "Where do we deliver?",
        "shipping__subtitle": "We deliver throughout the CITY and nearby areas so you can enjoy delicious food without limitations",
        "shipping__conditions-title": "Delivery conditions",
        "shipping__conditions-content__text1": "Within 5 km from our location - free, 5+ km - 25.90 UAH",
        "shipping__conditions-content__worktime-title1": "Working hours:",
        "shipping__conditions-content__text2": "Mon-Thu 12:00 to 00:00; Fri-Sun 12:00 to 1:00",
        "shipping__conditions-content__worktime-text1": "Minimum order: 200 UAH",
        "shipping__conditions-content__worktime-title2": "Delivery time:",
        "shipping__conditions-content__worktime-text2": "Delivery: 60-90 minutes; Pickup: 40-60 minutes",
        "shipping__btn": "Detailed information",
        "basket__login-title": "Are you have an account?",
        "basket__login-text": "Please log in to speed up the registration process",
        "basket__login-btn": "Login",
        "basket__order-top-title": "Your order",
        "basket__order-top-count1": "In the shopping cart, there are  ",
        "basket__order-top-count2": " items",
        "data__title": "Your Information",
        "data--label1": "Your Name",
        "data--label2": "Phone Number",
        "data--label3": "Your Comment",
        "data__form-textarea--comments": "Your Comment",
        "shipping__type-left": "Delivery",
        "shipping__type-right": "Pickup",
        "data--label4": "Address",
        "shipping__input1": "Enter your address",
        "data--label5": "Entrance",
        "shipping__input2": "Enter the entrance number",
        "data--label6": "Apartment",
        "shipping__input3": "Enter the apartment number",
        "data--label7": "Floor",
        "shipping__input4": "Enter your floor number",
        "sidebar__title": "Cost",
        "sidebar__check-item__price1": "Price",
        "sidebar__check-item__price2": "Delivery",
        "sidebar__check-result-text1": "Total",
        "sidebar__check-btn": "Make an order",
        "aboutUs__title-page":"Our history",
        "aboutUs__text-page":"Welcome to Sushi Dream! We are a team of sushi enthusiasts who dream of providing you with the most delicious sushi and unforgettable culinary experiences. Our story begins on the streets of two great cities — London and Kyiv .London has always been a cultural and culinary hub, where different tastes and traditions converge. It was here, on Cherry Blossom Street, known for its elegance, that our founder, Hiroshi Tanaka, decided to start his sushi business. His deep passion for gastronomy and his mastery in preparing fish dishes became the foundation for creating Sushi Dream. Thanks to Hiroshi and his unparalleled sushi creations, Cherry Blossom Street quickly became a destination where people from all over the city flocked to indulge in these incredible flavors.At the same time, on Khreshchatyk Street in Kyiv, a young and vibrant culinary scene was gaining momentum. Captivated by this movement, our head chef, Alexander Ivanov, decided to create his own sushi restaurant. With his unique recipes and bold flavor combinations, Alexander quickly gained popularity among fans of Japanese cuisine. The restaurant on Khreshchatyk Street became a cultural hotspot where food lovers gathered.Over time, Hiroshi and Alexander realized that both cities were teeming with sushi lovers who sought authentic flavors and unforgettable experiences. Their paths crossed at an international culinary exhibition, where they saw a shared dream — to create a sushi restaurant chain that would blend Eastern culinary traditions with modern trends.And so, Sushi Dream was born! Our goal is to surprise you with unparalleled flavors and original ingredient combinations. Our chefs skillfully combine the freshness of natural ingredients with the art of creating true culinary masterpieces that will astonish and captivate you.We invite you to join our family and embark on a journey with us into the world of extraordinary sushi experiences.",
        "numbers":"Select Number",
        "cities":"Select sity",
        "languages": "Select language",
        "fillAllFields": "Please fill in all fields",
        "orderSubmitted": "Thank you for your order, expect a call from a manager",
        "noProductSelected": "You haven't selected any product"
    },
    ua:{
        "home": "Головна",
        "menu": "Меню",
        "aboutUs": "Про нас",
        "shipping": "Доставка",
        "Allergens": "Алергени",
        "philadelphia": "Філадельфія",
        "addInBasketBtn": "Добавити в корзину",
        "sets": "Сети",
        "drinks": "Напої",
        "salats": "Футумаки",
        "sauce": "Футумаки",
        "futumaki": "Футумаки",
        "basket": "Корзина",
        "london": "Лондон",
        "kyiev": "Київ",
        "design": "Дизайн Андрій Сухов",
        "dev": "Розробка Роман Курпель",
        "sort": "Сортувати за",
        "price": "Ціною",
        "asc": "Алфавітом",
        "rating": "Рейтийнгом",
        "CitySelection": "Виберіть Ваше Місто",
        "bannerTextBig1": "Весняний супер-сет Spring-Katari",
        "bannerTextSmall1": "Відчуй смак свіжості, забудь про унилу зиму",
        "bannerTextBig2": "Літній смачний сет Умаги Наки",
        "bannerTextSmall2": "Дешево і смачно",
        "banner__content--title": "Найсмачніші суші в місті ",
        "banner__content--text": "Максимум смаку мінімум риса разом с Sushi Dream",
        "banner__content-btn": "Перейти в меню",
        "recommendations__content-title": "Не знаєте, які суші вибрати? ",
        "recommendations__content-text": "Попробуйте наші популярні сети і пориньте в світ справжньої японської кухні",
        "recommendations__swiper-btn": "В магазин",
        "menu__title": "Вікрийте для себе нові смаки",
        "menu__subtitle": "Створені нами з любов'ю і турботою",
        "inBasket": "В корзину",
        "aboutUs__title": "Sushi Dream — це",
        "aboutUs__order-content_title": "Ми виконали більше 17 000 заказов і нам довіряють більше 9 000 задоволених клієнтів",
        "aboutUs__text": "Більше, ніж просто доставка сушів. Ми прагнемо до того, щоб ви получили справжнє задоволення від свіжості і смаку японської кухні.",
        "aboutUs__content-img__wrapper-title": "Наша місія — представити продукт по чесній ціні, приділяти йому турботу і увагу. ",
        "shipping__title": "Куди ми доставляємо?",
        "shipping__subtitle": "Ми доставляєм по всьому МІСТО і ближайшим районам, щоб ви могли насолоджуватись смачною їжою без обмежень",
        "shipping__conditions-title": "Умови доставки",
        "shipping__conditions-content__text1": "До 5 км від нашого локала — безкоштовно, 5+ км — 25,90 грн",
        "shipping__conditions-content__worktime-title1": "Час работи:",
        "shipping__conditions-content__text2": "Пн-Чт 12:00 до 00:00; Пт-Вс 12:00 до 1:00",
        "shipping__conditions-content__worktime-text1": "Мінімальне замовлення: 200грн",
        "shipping__conditions-content__worktime-title2": "Час доставки:",
        "shipping__conditions-content__worktime-text2": "Доставка: 60 - 90 хвилин; Самовивіз: 40 - 60 минут",
        "shipping__btn": "Датальна інформація",
        "basket__login-title": "У вас є обліковий запис?",
        "basket__login-text": "Ввійдіть, щоб прискорити процес оформлення",
        "basket__login-btn": "Увійти",
        "basket__order-top-title": "Ваше замовлення",
        "basket__order-top-count1": "У кошику є ",
        "basket__order-top-count2": " товарів",
        "data__title": "Ваші дані",
        "data--label1": "Ваше ім'я",
        "data__form-input1": "Ваше ім'я",
        "data--label2": "Номер телефона",
        "data__form-input": "Номер телефона",
        "data--label3": "Ваш коментар",
        "data__form-textarea--comments": "Ваш коментар",
        "shipping__type-left": "Доставка",
        "shipping__type-right": "Самовивіз",
        "data--label4": "Адрес",
        "shipping__input1": "Введіть ваш адрес",
        "data--label5": "Під'їзд",
        "shipping__input2": "Введіть номер під'їзда",
        "data--label6": "Квартира",
        "shipping__input3": "Введіть номер квартири",
        "data--label7": "Поверх",
        "shipping__input4": "Введіть ваш поверх",
        "sidebar__title": "Вартість",
        "sidebar__check-item__price1": "Ціна",
        "sidebar__check-item__price2": "Доставка",
        "sidebar__check-result-text1": "Всього",
        "sidebar__check-btn": "Зробити замовлення",
        "aboutUs__title-page":"Наша історія",
        "aboutUs__text-page":"Ласкаво просимо до Sushi Dream! Ми — команда ентузіастів суші, які мріють надати вам найсмачніші суші та незабутні кулінарні враження. Наша історія починається у вулицях двох великих міст — Лондона та Києва.Лондон завжди був культурним та кулінарним центром, де зустрічаються різні смаки та традиції. Саме тут, на вулиці Чері-Блоссом, яка завжди славилась своєю вишуканістю, наш засновник, Хіроюки Танака, вирішив розпочати свій суші-бізнес. Його велика пристрасть до гастрономії та майстерність у приготуванні рибних страв стали основою для створення Sushi Dream. Завдяки Хіроюкі та його неперевершеним суші, вулиця Чері-Блоссом невдовзі стала місцем, куди люди з усього міста з'їжджалися, щоб насолоджуватися цими неймовірними смаками.У той же час, на вулиці Хрещатик у Києві, молода та бурхлива гастрономічна сцена міста набирала обертів. Захоплений цим рухом, наш головний шеф-кухар, Олександр Іванов, вирішив створити свій власний суші-ресторан. За допомогою своїх унікальних рецептів та сміливого поєднання смаків, Олександр швидко здобув популярність серед шанувальників японської кухні. Ресторан на вулиці Хрещатик став справжнім місцем культових зустрічей гурманів.З часом, Хіроюкі та Олександр відчули, що обидва міста переповнені любителями суші, які шукають аутентичний смак та незабутні враження. Їхні шляхи перетнулися на міжнародній виставці кулінарії, де вони побачили спільну мрію — створити мережу ресторанів суші, яка б поєднувала традиції східної кухні з сучасними трендами.Так з'явився Sushi Dream! Наша мета — здивувати вас неперевершеними смаками та оригінальними комбінаціями інгредієнтів. Наші шеф-кухарі майстерно поєднують свіжість натуральних продуктів та уміння створювати справжні шедеври, які вас здивують і захоплять.",
        "numbers":"Виберіть номер",
        "cities":"Виберіть місто",
        "languages": "Виберіть мову",
        "fillAllFields": "Заповніть будь ласка всі поля",
        "orderSubmitted": "Дякуємо за замовлення, очікуйте дзвінка від менеджера",
        "noProductSelected": "Ви не вибрали товар"
    }
  },
  language: 'ua',
}
export const languagesSlice = createSlice({
  name: "languages",
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<"ua"|"en">) => {
        state.language = action.payload
      },
  }
})

export const { setLanguage } = languagesSlice.actions

export default languagesSlice.reducer