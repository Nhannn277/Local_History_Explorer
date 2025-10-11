"use client";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";
import { scaleOrdinal } from "d3-scale";
import { schemeSet3 } from "d3-scale-chromatic";
import type { Geometry } from "geojson";
import Sidebar from "../sidebar/sidebar";

// define types for country features
export type Feature = {
  type: string;
  properties: {
    source?: string;
    id?: string;
    name?: string;
  };
  geometry: Geometry;
};

// just load Globe component dynamically (in client side) to avoid SSR issues
const Globe = dynamic(() => import("react-globe.gl"), { ssr: false });

export default function Map({
  countries,
  selectedProvince,
  setSelectedProvince,
}: {
  countries: { features: Feature[] };
  selectedProvince: Feature | null;
  setSelectedProvince: (feature: Feature | null) => void;
}) {
  // to highlight the province on hover
  const [hoverD, setHoverD] = useState<Feature | null>(null);

  const globeRef = useRef<any>(null);

  const colorScale = useMemo(() => {
    const ids = countries.features.map(d => d.properties.id || "other");
    console.log("Unique IDs found:", [...new Set(ids)]);
    return scaleOrdinal(schemeSet3).domain(ids);
  }, [countries.features]);

  return (
    // load globe component
    <>
      <Globe
        ref={globeRef}
        globeImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/earth-night.jpg"
        backgroundImageUrl="//cdn.jsdelivr.net/npm/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0.2} // increase to improve hover precision: may impact performance
        polygonsData={countries.features} // province polygons: Geojson feature data
        onGlobeReady={() => {
          globeRef.current?.pointOfView(
            { lat: 16, lng: 108, altitude: 0.4 },
            3000
          );
        }}
        polygonAltitude={(d: Feature) => (d === hoverD ? 0.12 : 0.04)} // zoom filter on hover
        polygonCapColor={(d: Feature) =>
          d.properties.id === hoverD?.properties.id
            ? "#f00"
            : colorScale(d.properties.id || "other")
        }
        polygonSideColor={() => "#08f4fc"} // side color
        polygonStrokeColor={() => "#111"} // border color
        onPolygonHover={setHoverD}
        onPolygonClick={setSelectedProvince}
        polygonsTransitionDuration={300}
        polygonLabel={(d: Feature) => `${d.properties.name}`}
      />
    </>
  );
}
