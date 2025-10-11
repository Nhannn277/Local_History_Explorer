"use client";
import Map, { Feature } from "@/components/map/map";
import Sidebar from "@/components/sidebar/sidebar";
import { useEffect, useState } from "react";

export default function WorldPage() {
  const [countries, setCountries] = useState<{ features: Feature[] }>({
    features: [],
  });
  const [selectedProvince, setSelectedProvince] = useState<Feature | null>(
    null
  );
  useEffect(() => {
    // load data (chinh lai path dung voi public/ hoac API cua ban)
    fetch("/data/vn.json")
      .then(res => res.json())
      .then(setCountries);
  }, []);
  return (
    <main className="w-full h-screen relative flex">
      <div className={`flex-1 transition-all duration-300 ease-in-out`}>
        <Map
          countries={countries}
          selectedProvince={selectedProvince}
          setSelectedProvince={setSelectedProvince}
        />
      </div>
      {selectedProvince && (
        <Sidebar
          feature={selectedProvince}
          onClose={() => setSelectedProvince(null)}
        />
      )}
    </main>
  );
}
