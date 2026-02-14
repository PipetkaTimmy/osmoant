export const footerDefaults = {
  enabled: true,
  videoText:
    "Мы создаем цифровые инструменты, которые увеличивают продажи, автоматизируют процессы и помогают компаниям расти.",
  email: "hello@osmo.studio",
  phone: "+7 (777) 777-77-77",
  copyright: "© OSMO, 2026. Все права защищены.",
};

export async function getFooterContent() {
  try {
    if (!process.env.FOOTER_API_URL) {
      return footerDefaults;
    }

    const response = await fetch(`${process.env.FOOTER_API_URL}/footer`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      return footerDefaults;
    }

    const data = await response.json();

    return {
      enabled: data?.enabled ?? true,
      brand: data?.brand ?? footerDefaults.brand,
      videoText: data?.videoText ?? footerDefaults.videoText,
      email: data?.email ?? footerDefaults.email,
      phone: data?.phone ?? footerDefaults.phone,
      copyright: data?.copyright ?? footerDefaults.copyright,
    };
  } catch {
    return footerDefaults;
  }
}
