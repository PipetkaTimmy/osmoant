import React from "react";
import { getTeamContent } from "@/lib/teamContent";
import TeamContent from "@/components/Team/TeamContent";

const Team = async () => {
  const { enabled, header, items } = await getTeamContent();

  if (!enabled) {
    return null;
  }

  return (
    <section className="team">
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
        <TeamContent items={items} />
      </div>
    </section>
  );
};

export default Team;
