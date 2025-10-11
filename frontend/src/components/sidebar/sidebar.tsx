"use client";

import { Feature } from "../map/map";
import { AnimatedTimeline } from "../timeline/timeline";

export default function Sidebar({
  feature,
  onClose,
}: {
  feature: Feature;
  onClose: () => void;
}) {
  const isVisible = feature !== null;
  return (
    <div
      className={`absolute right-0 top-0 h-screen bg-white shadow-2xl p-4 flex flex-col transition-transform duration-300 ${
        isVisible ? "w-1/2" : "w-0"
      }`}
    >
      <button
        className="mb-4 text-sm px-3 py-1 rounded bg-gray-200 hover:bg-gray-300"
        onClick={onClose}
      >
        Đóng
      </button>

      <div className="overflow-y-auto">{isVisible && <AnimatedTimeline />}</div>
    </div>
  );
}
