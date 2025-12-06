import MainCatalogCard from "../../../public/data/MainCatalogCard.json";

function getProjectData(projectSlug) {
  return MainCatalogCard.find((project) => project.slug === projectSlug);
}

export const seoData = {
  home: {
    title: "Строительство домов под ключ Кемерово | Архитек",
    description:
      "Загородные дома под ключ в Кемерово. Проектирование, строительство и отделка домов и коттеджей по выгодным ценам. Большой выбор готовых проектов.",
    keywords:
      "строительство загородных домов, дома под ключ, проекты загородных домов, Архитек42",
    og_title: "Строительство домов в Кемерово под ключ - Архитек",
    og_description:
      "Строительная компания Архитек. Проектирование, дизайн, строительство надежных и комфортных домов. Все виды работ под ключ. Опыт более 20 лет в строительстве. строительство домов под ключ, загородные дома кемерово, дом под ключ., строительство коттеджей, проекты домов кемерово, строительство домов цена",
    canonical: "https://arhitek42.ru/",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },
  projects: {
    default: {
      title: "Каталог проектов строительства домов и коттеджей - Архитек",
      description:
        "Загородные дома под ключ в Кемерово. Проектирование, строительство и отделка домов и коттеджей по выгодным ценам. Большой выбор готовых проектов.",
      keywords:
        "строительство загородных домов, дома под ключ, проекты загородных домов, Архитек42",
      og_title: " Каталог проектов строительства домов и коттеджей - Архитек",
      og_description:
        "Строительная компания Архитек. Проектирование, дизайн, строительство надежных и комфортных домов. Все виды работ под ключ. Опыт более 20 лет в строительстве. строительство домов под ключ, загородные дома кемерово, дом под ключ., строительство коттеджей, проекты домов кемерово, строительство домов цена",
      canonical: "https://arhitek42.ru/",
      og_locale: "ru_RU",
      og_img_width: "1200",
      og_img_height: "630",
      og_img_url: "/favicon/og-banner.png",
      og_img_alt: "Архитек - проектирование и строительство домов под ключ",
      og_type: "website",
      og_url: "https://arhitek42.ru/",
      og_site_name: "Архитек",
      article_publisher: "https://www.facebook.com/arhitek142",
      article_modified_time: "2024-05-22T18:51:13+00:00",
      twitter_card: "summary_large_image",
      twitter_site: "@arhitek42",
      viewport: "width=device-width, initial-scale=1",
      SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
      theme_color: "#f5f5f5",
    },
    getProject: function (projectSlug) {
      const project = getProjectData(projectSlug);

      if (!project) return this.default;

      return {
        ...this.default,
        title: `${project.title} - цена под ключ в Кемерово`,
        description: `${project.desc}`,
        keywords: `${project.keywords}`,
        og_title: `${project.title} - цена под ключ в Кемерово`,
        og_description: this.default.og_description,
        canonical: `https://arhitek42.ru/catalog/${project.slug}`,
      };
    },
  },
  designing: {
    title: "Каталог проектов домов под ключ в Кемерово",
    description:
      "Готовые проекты домов для строительства под ключ в Кемерово и области. Цены, фото, планировки. Выберите свой дом!",
    keywords:
      "проекты домов под ключ, строительство домов, какой дом построить, дома под ключ Кемерово, каркасные дома под ключ",
    og_title: "Каталог проектов домов под ключ в Кемерово",
    og_description:
      "Готовые проекты домов для строительства под ключ в Кемерово и области. Цены, фото, планировки. Выберите свой дом!",
    canonical: "https://arhitek42.ru/catalog-proektov",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/catalog-proektov",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },
  construction: {
    title: "Стоимость строительства дома под ключ в Кемерово",
    description:
      "Расчет стоимости строительства дома под ключ в Кемерово. Цены на материалы, работы, ипотека. Бесплатная консультация!",
    keywords:
      "дом под ключ цена, сколько стоит построить дом, строительство домов под ключ цена, строительство домов Кемерово, модульные дома под ключ",
    og_title: "Стоимость строительства дома под ключ в Кемерово",
    og_description:
      "Расчет стоимости строительства дома под ключ в Кемерово. Цены на материалы, работы, ипотека. Бесплатная консультация!",
    canonical: "https://arhitek42.ru/stoimost-stroitelstva",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/stoimost-stroitelstva",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },
  contacts: {
    title: "Контакты строительной компании в Кемерово",
    description:
      "Свяжитесь с нами для строительства дома под ключ в Кемерово. Адрес, телефон, онлайн-заявка. Работаем по всей области!",
    keywords:
      "строительство домов Кемерово, дом под ключ Кемерово, построить дом в Кемерово, строительство домов Новокузнецк",
    og_title: "Контакты строительной компании в Кемерово",
    og_description:
      "Свяжитесь с нами для строительства дома под ключ в Кемерово. Адрес, телефон, онлайн-заявка. Работаем по всей области!",
    canonical: "https://arhitek42.ru/contacts",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/contacts",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },
  pricelist: {
    title: "Прайс-лист на строительство домов под ключ в Кемерово – 2025",
    description:
      "Актуальные цены на строительство домов под ключ в Кемерово. Сметы, стоимость материалов и работ. Скачайте полный прайс-лист!",
    keywords:
      "прайс-лист строительства домов, стоимость дома под ключ, цена постройки дома, строительство домов Кемерово 2025, сколько стоит дом под ключ",
    og_title: "Прайс-лист на строительство домов под ключ в Кемерово – 2025",
    og_description:
      "Актуальные цены на строительство домов под ключ в Кемерово. Сметы, стоимость материалов и работ. Скачайте полный прайс-лист!",
    canonical: "https://arhitek42.ru/price-list",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/price-list",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },
  blog: {
    title: "Блог компании Архитек42",
    description:
      "Полезные статьи и новости о дизайне и разработке интерьеров, а также о строительстве домов. Статьи от профессионалов.",
    keywords:
      "прайс-лист строительства домов, стоимость дома под ключ, цена постройки дома, строительство домов Кемерово 2025, сколько стоит дом под ключ, блог, дизайн, архитектура строительство",
    og_title: "Блог компании Архитек42",
    og_description:
      "Полезные статьи и новости о дизайне и разработке интерьеров, а также о строительстве домов. Статьи от профессионалов.",
    canonical: "https://arhitek42.ru/blog",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/blog",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },
  design: {
    title: "Дизайн интерьера Архитек42",
    description:
      "Дизайн и разработка интерьеров, примеры работ. Дизайн от профессионалов.",
    keywords:
      "прайс-лист строительства домов, стоимость дома под ключ, цена постройки дома, строительство домов Кемерово 2025, сколько стоит дом под ключ, блог, дизайн, архитектура строительство",
    og_title: "Дизайн интерьера Архитек42",
    og_description:
      "Дизайн и разработка интерьеров, примеры работ. Дизайн от профессионалов.",
    canonical: "https://arhitek42.ru/blog",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/blog",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },

  galery: {
    title:
      "Галерея проектов домов в Кемерово | Строительство домов под ключ | Архитек42",
    description:
      "Каталог готовых проектов домов в Кемерово. Фото реализованных работ, цены и планировки. Строительство качественных домов под ключ в Кемеровской области.",
    keywords:
      "проекты домов Кемерово, строительство домов под ключ, готовые дома Кемерово, коттеджи Кемеровская область, цены на строительство домов",
    og_title: "Дизайн интерьера Архитек42",
    og_description:
      "Каталог готовых проектов домов в Кемерово. Фото реализованных работ, цены и планировки. Строительство качественных домов под ключ в Кемеровской области.",
    canonical: "https://arhitek42.ru/galery",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/galery",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },

  ipoteka: {
    title:
      "Сельская ипотека под 3% в Кемерово | Строительство домов под ключ | Архитек42",
    description:
      "Сельская ипотека в Кемерово и области под 3% годовых. Постройте дом с господдержкой до 6 млн рублей. Одобрение за 1 день. Для работников АПК, учителей, врачей и участников СВО. Действует до 30 сентября 2025 года.",
    keywords:
      "проекты домов Кемерово, строительство домов под ключ, готовые дома Кемерово, коттеджи Кемеровская область, цены на строительство домов",
    og_title:
      "Сельская ипотека под 3% в Кемерово | Строительство домов под ключ | Архитек42",
    og_description:
      "Сельская ипотека в Кемерово и области под 3% годовых. Постройте дом с господдержкой до 6 млн рублей. Одобрение за 1 день. Для работников АПК, учителей, врачей и участников СВО. Действует до 30 сентября 2025 года.",
    canonical: "https://arhitek42.ru/selskaya-ipoteka",
    og_locale: "ru_RU",
    og_img_width: "1200",
    og_img_height: "630",
    og_img_url: "/favicon/og-banner.png",
    og_img_alt: "Архитек - проектирование и строительство домов под ключ",
    og_type: "website",
    og_url: "https://arhitek42.ru/selskaya-ipoteka",
    og_site_name: "Архитек",
    article_publisher: "https://www.facebook.com/arhitek142",
    article_modified_time: "2024-05-22T18:51:13+00:00",
    twitter_card: "summary_large_image",
    twitter_site: "@arhitek42",
    viewport: "width=device-width, initial-scale=1",
    SKYPE_TOOLBAR: "SKYPE_TOOLBAR_PARSER_COMPATIBLE",
    theme_color: "#f5f5f5",
  },
};
