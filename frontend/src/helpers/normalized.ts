// utils/geojsonUtils.ts

// Đảm bảo vòng polygon đóng (điểm đầu = điểm cuối)
export function closeRing(ring: number[][]): number[][] {
  const [fx, fy] = ring[0];
  const [lx, ly] = ring[ring.length - 1];
  if (fx !== lx || fy !== ly) ring.push([fx, fy]);
  return ring;
}

// Tính diện tích có dấu (Shoelace formula)
// >0 => CCW (ngược chiều kim đồng hồ), <0 => CW (thuận chiều)
export function signedArea(ring: number[][]): number {
  let a = 0;
  for (let i = 0; i < ring.length - 1; i++) {
    const [x1, y1] = ring[i];
    const [x2, y2] = ring[i + 1];
    a += x1 * y2 - x2 * y1;
  }
  return a / 2;
}

// Chuẩn hóa hướng vòng (outer CCW, inner CW)
export function fixPolygonRings(coords: number[][][]): number[][][] {
  coords = coords.map(closeRing);

  // Outer ring
  if (coords.length > 0 && signedArea(coords[0]) < 0) {
    coords[0] = [...coords[0]].reverse();
  }

  // Inner rings (holes)
  for (let i = 1; i < coords.length; i++) {
    if (signedArea(coords[i]) > 0) coords[i] = [...coords[i]].reverse();
  }

  return coords;
}

// Chuẩn hóa toàn bộ GeoJSON
export function normalizeOrientation(geojson: any): any {
  return {
    ...geojson,
    features: geojson.features.map((f: any) => {
      if (!f?.geometry) return f;

      if (f.geometry.type === "Polygon") {
        return {
          ...f,
          geometry: {
            type: "Polygon",
            coordinates: fixPolygonRings(f.geometry.coordinates),
          },
        };
      }

      if (f.geometry.type === "MultiPolygon") {
        return {
          ...f,
          geometry: {
            type: "MultiPolygon",
            coordinates: f.geometry.coordinates.map((poly: any) =>
              fixPolygonRings(poly)
            ),
          },
        };
      }

      return f;
    }),
  };
}
