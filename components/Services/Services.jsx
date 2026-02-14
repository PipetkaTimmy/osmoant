import React from "react";
import ServiceCard from "@/components/Services/SeviceCard";
import { getServicesContent } from "@/lib/servicesContent";

const Services = async () => {
  const { items, enabled, header } = await getServicesContent();

  if (!enabled) {
    return null;
  }

  return (
    <section className="services">
      {header?.enabled !== false && (
        <div className="container">

          <div className="block__header">
            <span className="block__label">[ {header?.label} ]</span>
            <h2 className="block__title">{header?.title}</h2>
          </div>

          <div className="services__grid">
            <div className="service__plugleft"></div>
            {items.map((item) => (
              <ServiceCard key={item.id} {...item} />
            ))}
            <div className="service__plugright"></div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
