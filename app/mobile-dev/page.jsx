import React from "react";
import ServicePageTemplate from "@/components/ServicePage/ServicePageTemplate";
import { getServicePageContent } from "@/lib/servicePagesContent";

export default async function MobileDevPage() {
  const content = await getServicePageContent("mobile-dev");
  return <ServicePageTemplate content={content} />;
}
