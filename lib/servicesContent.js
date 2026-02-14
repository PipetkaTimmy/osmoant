export const servicesDefaults = {
  enabled: true,
  header: {
    enabled: true,
    label: "услуги",
    title: "Цифровые решения для роста и масштабирования",
  },
  items: [
    {
      id: "sales-sites",
      title: "Сайты для продаж",
      description:
        "Для компаний, которым нужен поток заявок, а не просто красивый сайт.",
      price: "от 300 000  ₸",
      image: "/services/1.png",
      href: "/sales-sites",
    },
    {
      id: "corporate",
      title: "Корпоративные сайты и сервисы",
      description:
        "Для компаний, где сайт — часть бизнес-процесса, а не витрина.",
      price: "от 600 000 ₸",
      image: "/services/2.png",
      href: "/corporate-sites",
    },
    {
      id: "mobile",
      title: "Мобильная разработка",
      description:
        "Для продуктов, которые должны масштабироваться и зарабатывать.",
      price: "от 3 500 000 ₸",
      image: "/services/3.png",
      href: "/mobile-dev",
    },
  ],
};

export async function getServicesContent() {
  try {
    if (!process.env.SERVICES_API_URL) {
      return servicesDefaults;
    }

    const response = await fetch(`${process.env.SERVICES_API_URL}/services`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return servicesDefaults;
    }

    const data = await response.json();

    const itemsFallback = servicesDefaults.items;

    return {
      enabled: data?.enabled ?? true,
      header: {
        enabled: data?.header?.enabled ?? servicesDefaults.header.enabled,
        label: data?.header?.label ?? servicesDefaults.header.label,
        title: data?.header?.title ?? servicesDefaults.header.title,
        description:
          data?.header?.description ?? servicesDefaults.header.description,
      },
      items:
        Array.isArray(data?.items) && data.items.length > 0
          ? data.items.map((item, index) => ({
              id: item?.id ?? `service-${index}`,
              title: item?.title ?? itemsFallback[index % itemsFallback.length].title,
              description:
                item?.description ?? itemsFallback[index % itemsFallback.length].description,
              price: item?.price ?? itemsFallback[index % itemsFallback.length].price,
              image: item?.image ?? itemsFallback[index % itemsFallback.length].image,
              href: item?.href ?? itemsFallback[index % itemsFallback.length].href,
            }))
          : servicesDefaults.items,
    };
  } catch {
    return servicesDefaults;
  }
}
