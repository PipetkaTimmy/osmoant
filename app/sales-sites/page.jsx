import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import { getServicePageContent } from "@/lib/servicePagesContent";

export default async function SalesSitesPage() {
  const content = await getServicePageContent("sales-sites");
  return <ServicePageTemplate content={content} />;
}
