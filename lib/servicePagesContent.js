const pagesDefaults = {
  "sales-sites": {
    enabled: true,
    hero: {
      enabled: true,
      label: "digital product studio",
      title: "Создаем сайты, которые привлекают клиентов, повышают конверсию и работают как инструмент продаж.",
      image: "/hero/hero.webm",
      mediaType: "video",
      cta: "Обсудить проект",
    },
    audience: {
      enabled: true,
      label: "Кому подходит",
      title:
        "Для бизнесов, которым нужен не просто сайт, а рабочий инструмент роста. Для стартапов, малого и развивающегося бизнеса.",
      image: "/services/1.png",
    },
    solutions: {
      enabled: true,
      header: {
        enabled: true,
        label: "Виды решений",
        title: "Мы создаем сайты и приложения, которые помогают бизнесу расти.",
      },
      items: [
        {
          id: "landing",
          title: "Лендинг",
          description: "Продающий одностраничный сайт для оффера и рекламы.",
          price: "от 300 000 ₸",
          image: "/services/1.png",
          href: "/sales-sites",
        },
        {
          id: "ecommerce",
          title: "Интернет-магазин",
          description: "Каталог, корзина, оплата и аналитика под продажи.",
          price: "от 1 200 000 ₸",
          image: "/services/2.png",
          href: "/sales-sites",
        },
        {
          id: "marketplace",
          title: "E-commerce каталог",
          description: "Система витрин и карточек товара с фильтрами.",
          price: "от 800 000 ₸",
          image: "/services/3.png",
          href: "/sales-sites",
        },
      ],
    },
    faq: {
      enabled: true,
      label: "Часто задаваемые вопросы",
      title:
        "Мы собрали ответы на ключевые вопросы, которые возникают перед запуском проекта.",
      items: [
        {
          id: "q1",
          question: "Сколько времени занимает разработка?",
          answer:
            "Сроки зависят от задачи: лендинг 2-4 недели, сложные проекты 1-3 месяца.",
        },
        {
          id: "q2",
          question: "Что входит в стоимость проекта?",
          answer:
            "Аналитика, дизайн, разработка, тестирование и базовая техподдержка после запуска.",
        },
      ],
    },
  },
  "corporate-sites": {
    enabled: true,
    hero: {
      enabled: true,
      label: "digital product studio",
      title: "Корпоративные сайты и сервисы, которые масштабируются вместе с бизнесом.",
      image: "/hero/hero.webm",
      mediaType: "video",
      cta: "Обсудить проект",
    },
    audience: {
      enabled: true,
      label: "Кому подходит",
      title:
        "Для компаний, которым нужен не просто сайт, а цифровая система управления процессами и клиентами.",
      image: "/services/2.png",
    },
    solutions: {
      enabled: true,
      header: {
        enabled: true,
        label: "Виды решений",
        title: "Мы создаем сайты и приложения, которые помогают бизнесу расти.",
      },
      items: [
        {
          id: "corp-site",
          title: "Корпоративный сайт",
          description: "Презентация бренда, услуги, кейсы, заявки.",
          price: "от 600 000 ₸",
          image: "/services/1.png",
          href: "/corporate-sites",
        },
        {
          id: "portal",
          title: "Порталы",
          description: "Личный кабинет, права доступа и внутренние сервисы.",
          price: "от 1 500 000 ₸",
          image: "/services/2.png",
          href: "/corporate-sites",
        },
        {
          id: "crm",
          title: "CRM и кабинеты",
          description: "Система управления клиентами и задачами.",
          price: "от 900 000 ₸",
          image: "/services/3.png",
          href: "/corporate-sites",
        },
      ],
    },
    faq: {
      enabled: true,
      label: "Часто задаваемые вопросы",
      title:
        "Мы собрали ответы на ключевые вопросы, которые возникают перед запуском проекта.",
      items: [
        {
          id: "q1",
          question: "Можно ли интегрировать CRM и 1С?",
          answer: "Да, интеграции планируем на этапе архитектуры и подключаем через API.",
        },
        {
          id: "q2",
          question: "Есть ли сопровождение после запуска?",
          answer: "Да, берем на поддержку, обновления и развитие продукта.",
        },
      ],
    },
  },
  "mobile-dev": {
    enabled: true,
    hero: {
      enabled: true,
      label: "digital product studio",
      title: "Мобильные приложения для роста, автоматизации и масштабирования.",
      image: "/hero/hero.webm",
      mediaType: "video",
      cta: "Обсудить проект",
    },
    audience: {
      enabled: true,
      label: "Кому подходит",
      title:
        "Для компаний, которым нужно не просто приложение, а инструмент роста. Подходит стартапам и командам автоматизации.",
      image: "/services/3.png",
    },
    solutions: {
      enabled: true,
      header: {
        enabled: true,
        label: "Виды решений",
        title: "Мы создаем сайты и приложения, которые помогают бизнесу расти.",
      },
      items: [
        {
          id: "mvp",
          title: "Приложение для MVP",
          description: "Быстрый запуск гипотез и первых пользователей.",
          price: "от 1 500 000 ₸",
          image: "/services/1.png",
          href: "/mobile-dev",
        },
        {
          id: "b2b",
          title: "Критические сервисы",
          description: "Сложная логика и стабильная работа под нагрузкой.",
          price: "от 4 000 000 ₸",
          image: "/services/2.png",
          href: "/mobile-dev",
        },
        {
          id: "startup",
          title: "Стартап-продукты",
          description: "Продукт под масштабирование и монетизацию.",
          price: "от 3 500 000 ₸",
          image: "/services/3.png",
          href: "/mobile-dev",
        },
      ],
    },
    faq: {
      enabled: true,
      label: "Часто задаваемые вопросы",
      title:
        "Мы собрали ответы на ключевые вопросы, которые возникают перед запуском проекта.",
      items: [
        {
          id: "q1",
          question: "Делаете ли вы iOS и Android одновременно?",
          answer: "Да, проектируем архитектуру под обе платформы сразу.",
        },
        {
          id: "q2",
          question: "Помогаете ли с публикацией в сторах?",
          answer: "Да, готовим сборки, метаданные и сопровождаем публикацию.",
        },
      ],
    },
  },
};

const fallbackSlug = "sales-sites";

const mergePageData = (fallback, data) => ({
  enabled: data?.enabled ?? fallback.enabled,
  hero: {
    ...fallback.hero,
    ...(data?.hero ?? {}),
  },
  audience: {
    ...fallback.audience,
    ...(data?.audience ?? {}),
  },
  solutions: {
    ...fallback.solutions,
    ...(data?.solutions ?? {}),
    header: {
      ...fallback.solutions.header,
      ...(data?.solutions?.header ?? {}),
    },
    items:
      Array.isArray(data?.solutions?.items) && data.solutions.items.length > 0
        ? data.solutions.items.map((item, index) => ({
            ...fallback.solutions.items[index % fallback.solutions.items.length],
            ...item,
            id: item?.id ?? `solution-${index + 1}`,
          }))
        : fallback.solutions.items,
  },
  faq: {
    ...fallback.faq,
    ...(data?.faq ?? {}),
    items:
      Array.isArray(data?.faq?.items) && data.faq.items.length > 0
        ? data.faq.items.map((item, index) => ({
            ...fallback.faq.items[index % fallback.faq.items.length],
            ...item,
            id: item?.id ?? `faq-${index + 1}`,
          }))
        : fallback.faq.items,
  },
});

export const getServicePageDefaults = (slug) =>
  pagesDefaults[slug] ?? pagesDefaults[fallbackSlug];

export async function getServicePageContent(slug) {
  const fallback = getServicePageDefaults(slug);

  try {
    if (!process.env.SERVICE_PAGES_API_URL) {
      return fallback;
    }

    const response = await fetch(
      `${process.env.SERVICE_PAGES_API_URL}/service-pages/${slug}`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) {
      return fallback;
    }

    const data = await response.json();
    return mergePageData(fallback, data);
  } catch {
    return fallback;
  }
}
