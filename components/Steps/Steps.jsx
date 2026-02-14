import React from "react";
import { getStepsContent } from "@/lib/stepsContent";
import StepsContent from "@/components/Steps/StepsContent";

const Steps = async () => {
  const { enabled, header, items, backgroundImages } = await getStepsContent();

  if (!enabled) {
    return null;
  }

  return (
    <section className="steps">
      <div className="container">
        {header?.enabled !== false && (
          <div className="block__header">
            <span className="block__label">[ {header?.label} ]</span>
            <h2 className="block__title">{header?.title}</h2>
            {header?.description ? (
              <p className="block__subtitle">{header.description}</p>
            ) : null}
          </div>
        )}
        <StepsContent items={items} backgroundImages={backgroundImages} />
      </div>
    </section>
  );
};

export default Steps;
