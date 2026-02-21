import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import { getServicePageContent } from "@/lib/servicePagesContent";

export default async function CorporateSitesPage() {
  const content = await getServicePageContent("corporate-sites");
  return <ServicePageTemplate content={content} />;
}
