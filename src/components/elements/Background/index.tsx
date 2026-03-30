export default function Background() {
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
}
