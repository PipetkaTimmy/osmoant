export const teamDefaults = {
  enabled: true,
  header: {
    enabled: true,
    label: "Команда",
    title:
      "Мы — небольшая команда с большим опытом в создании сайтов и мобильных приложений.",
    description:
      "Берём лучшие практики из международного опыта и адаптируем их под реальные задачи бизнеса.",
  },
  items: [
    {
      id: "team-1",
      role: "UI/UX Designer",
      name: "Продуктовые интерфейсы, поведенческая конверсия, UX-аналитика",
      image: "/team/1.png",
    },
    {
      id: "team-2",
      role: "Front-end Developer",
      name: "Высокопроизводительные интерфейсы, интерактив, motion-анимации",
      image: "/team/2.png",
    },
    {
      id: "team-3",
      role: "Back-end Developer",
      name: "Архитектура, данные, защищённые системы",
      image: "/team/3.png",
    },
    {
      id: "team-4",
      role: "Product / CEO",
      name: "Стратегия продукта, рост, экосистемы",
      image: "/team/4.png",
    },
    {
      id: "team-5",
      role: "UI/UX Designer",
      name: "Дамир Карашолаков",
      image: "/team/5.png",
    },
  ],
};

export async function getTeamContent() {
  try {
    if (!process.env.TEAM_API_URL) {
      return teamDefaults;
    }

    const response = await fetch(`${process.env.TEAM_API_URL}/team`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return teamDefaults;
    }

    const data = await response.json();

    return {
      enabled: data?.enabled ?? true,
      header: {
        enabled: data?.header?.enabled ?? teamDefaults.header.enabled,
        label: data?.header?.label ?? teamDefaults.header.label,
        title: data?.header?.title ?? teamDefaults.header.title,
        description: data?.header?.description ?? teamDefaults.header.description,
      },
      items:
        Array.isArray(data?.items) && data.items.length > 0
          ? data.items.map((item, index) => ({
              id: item?.id ?? `team-${index + 1}`,
              role: item?.role ?? teamDefaults.items[index % teamDefaults.items.length].role,
              name: item?.name ?? teamDefaults.items[index % teamDefaults.items.length].name,
              image: item?.image ?? teamDefaults.items[index % teamDefaults.items.length].image,
            }))
          : teamDefaults.items,
    };
  } catch {
    return teamDefaults;
  }
}
