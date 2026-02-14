export const stepsDefaults = {
  enabled: true,
  header: {
    enabled: true,
    label: "Этапы работы",
    title:
      "Прозрачный процесс, который позволяет запускать цифровые продукты без рисков и с контролируемым результатом.",
    description:
      "Мы работаем с компаниями из разных сфер: e-commerce, финансы, образование, сервисные бизнесы и стартапы. Разрабатываем сайты, веб-приложения и цифровые сервисы для роста и автоматизации.",
  },
  backgroundImages: [
    "/steps/1.png",
    "/steps/2.png",
    "/steps/3.png",
    "/steps/4.png",
  ],
  items: [
    {
      id: "step-1",
      number: "1",
      tag: "α",
      title: "Анализ и постановка задачи",
      description:
        "Изучаем ваш бизнес, цели проекта и целевую аудиторию. Формируем требования, определяем функциональность продукта и ключевые метрики эффективности (конверсия, лиды, заявки, удержание).",
    },
    {
      id: "step-2",
      number: "2",
      tag: "β",
      title: " Проектирование и UX",
      description:
        "Создаём структуру сайта или сервиса, пользовательские сценарии и прототипы. Продумываем логику интерфейса, чтобы пользователям было легко достигать нужных действий.",
    },
    {
      id: "step-3",
      number: "3",
      tag: "γ",
      title: "Разработка и интеграция",
      description:
        "Проверяем корректность работы, скорость загрузки, адаптивность и безопасность. Оптимизируем перед релизом.",
    },
    {
      id: "step-4",
      number: "4",
      tag: "δ",
      title: "Тестирование и запуск",
      description:
        "Разрабатываем UI-дизайн с учётом бренда, ниши и бизнес-задач. Фокусируемся на понятности, визуальной иерархии и конверсии.",
    },
    {
      id: "step-5",
      number: "5",
      tag: "ε",
      title: "Дизайн и визуальная концепция",
      description:
        "Реализуем продукт на современных технологиях. Подключаем CMS, CRM, платёжные системы, аналитику и другие сервисы.",
    },
    {
      id: "step-6",
      number: "6",
      tag: "ϛ",
      title: "Разработка и интеграция",
      description:
        "После запуска продолжаем работать с продуктом: улучшаем функциональность, внедряем новые возможности, анализируем данные и оптимизируем показатели.",
    },
  ],
};

export async function getStepsContent() {
  try {
    if (!process.env.STEPS_API_URL) {
      return stepsDefaults;
    }

    const response = await fetch(`${process.env.STEPS_API_URL}/steps`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return stepsDefaults;
    }

    const data = await response.json();

    return {
      enabled: data?.enabled ?? true,
      header: {
        enabled: data?.header?.enabled ?? stepsDefaults.header.enabled,
        label: data?.header?.label ?? stepsDefaults.header.label,
        title: data?.header?.title ?? stepsDefaults.header.title,
        description:
          data?.header?.description ?? stepsDefaults.header.description,
      },
      backgroundImages:
        Array.isArray(data?.backgroundImages) && data.backgroundImages.length > 0
          ? data.backgroundImages
          : stepsDefaults.backgroundImages,
      items:
        Array.isArray(data?.items) && data.items.length > 0
          ? data.items.map((item, index) => ({
              id: item?.id ?? `step-${index + 1}`,
              number: item?.number ?? stepsDefaults.items[index % stepsDefaults.items.length].number,
              tag: item?.tag ?? stepsDefaults.items[index % stepsDefaults.items.length].tag,
              title: item?.title ?? stepsDefaults.items[index % stepsDefaults.items.length].title,
              description:
                item?.description ??
                stepsDefaults.items[index % stepsDefaults.items.length].description,
            }))
          : stepsDefaults.items,
    };
  } catch {
    return stepsDefaults;
  }
}
