"use client";
import Map, { Feature } from "@/components/map/map";
import { useEffect, useState } from "react";

export default function WorldPage() {
  const [countries, setCountries] = useState<{ features: Feature[] }>({
    features: [],
  });
useEffect(() => {
      // load data (chinh lai path dung voi public/ hoac API cua ban)
      fetch("/data/vn.json")
        .then((res) => res.json())
        .then(setCountries);
    }, []);
  return (
    <main className="w-full h-screen">
      <Map countries={countries} />
    </main>
  );
}
