export const heroDefaults = {
  title: "Digital product studio",
  description:
    "разработка Сайтов и мобильных приложений для бизнеса, которые приносят клиентов и продажи",
  enabled: true,
};

export async function getHeroContent() {
  try {
    if (!process.env.HERO_API_URL) {
      return heroDefaults;
    }

    const response = await fetch(`${process.env.HERO_API_URL}/hero`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return heroDefaults;
    }

    const data = await response.json();

    return {
      title: data?.title ?? heroDefaults.title,
      description: data?.description ?? heroDefaults.description,
      enabled: data?.enabled ?? true,
    };
  } catch {
    return heroDefaults;
  }
}
