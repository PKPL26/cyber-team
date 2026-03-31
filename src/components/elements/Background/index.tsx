const GridBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <div
        className="
          absolute inset-0
          bg-white dark:bg-black
          bg-[linear-gradient(to_right,#00000010_1px,transparent_1px),linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          bg-size-[40px_40px]
          mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
        "
      />
    </div>
  );
};

const DotBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <div
        className="
          absolute inset-0
          bg-white dark:bg-black
          bg-[radial-gradient(#00000020_1px,transparent_1px)]
          dark:bg-[radial-gradient(#ffffff20_1px,transparent_1px)]
          bg-size-[20px_20px]
          mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
        "
      />
    </div>
  );
};

const DiamondGridBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <div
        className="
          absolute inset-0
          bg-white dark:bg-black
          bg-[repeating-linear-gradient(45deg,#00000010_0px,#00000010_1px,transparent_1px,transparent_40px),repeating-linear-gradient(-45deg,#00000010_0px,#00000010_1px,transparent_1px,transparent_40px)]
          dark:bg-[repeating-linear-gradient(45deg,#ffffff10_0px,#ffffff10_1px,transparent_1px,transparent_40px),repeating-linear-gradient(-45deg,#ffffff10_0px,#ffffff10_1px,transparent_1px,transparent_40px)]
          mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
        "
      />
    </div>
  );
};

const ScanlineBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <div
        className="
          absolute inset-0
          bg-white dark:bg-black
          bg-[linear-gradient(to_bottom,#00000010_1px,transparent_1px)]
          dark:bg-[linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)]
          bg-size-[100%_8px]
          mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
        "
      />
    </div>
  );
};

const RadialRingsBackground = () => {
  return (
    <div className="fixed inset-0 -z-50">
      <div
        className="
          absolute inset-0
          bg-white dark:bg-black
          bg-[repeating-radial-gradient(circle_at_center,#00000010_0,#00000010_1px,transparent_1px,transparent_40px)]
          dark:bg-[repeating-radial-gradient(circle_at_center,#ffffff10_0,#ffffff10_1px,transparent_1px,transparent_40px)]
          mask-[radial-gradient(ellipse_at_center,black_40%,transparent_100%)]
          [-webkit-mask-image:radial-gradient(ellipse_at_center,black_60%,transparent_100%)]
        "
      />
    </div>
  );
};

export default function Background({ type = "grid" }: { type?: string }) {
  switch (type) {
    case "dot":
      return <DotBackground />;
    case "diamond":
      return <DiamondGridBackground />;
    case "scanline":
      return <ScanlineBackground />;
    case "radial":
      return <RadialRingsBackground />;
    case "grid":
    default:
      return <GridBackground />;
  }
}
