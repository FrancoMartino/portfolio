export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden -z-10 bg-gray-900">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={
            "absolute rounded-full animate-[spin_45s_linear_infinite] " +
            [
              "bg-green-300",
              "bg-green-300",
              "bg-green-300",
              "bg-gray-400",
              "bg-gray-400",
            ][i] +
            " opacity-5 blur-3xl"
          }
          style={{
            top: ["27%", "17%", "77%", "4%", "58%"][i],
            left: ["81%", "23%", "60%", "48%", "84%"][i],
            animationDuration: ["38s", "14s", "18s", "26s", "29s"][i],
            animationDelay: ["-3s", "-17s", "-13s", "-12s", "-6s"][i],
            transformOrigin: [
              "-13vw 18vh",
              "-8vw 15vh",
              "-18vw -14vh",
              "-12vw -22vh",
              "19vw 13vh",
            ][i],
            width: ["40vmin", "55vmin", "35vmin", "60vmin", "45vmin"][i],
            height: ["40vmin", "55vmin", "35vmin", "60vmin", "45vmin"][i],
          }}
        ></span>
      ))}
    </div>
  );
}
