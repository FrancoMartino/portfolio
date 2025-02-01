export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-gray-900">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={
            "absolute rounded-full animate-[spin_45s_linear_infinite] pointer-events-none blur-3xl " +
            [
              "bg-green-300",
              "bg-green-300",
              "bg-green-300",
              "bg-gray-400",
              "bg-gray-400",
            ][i] +
            " " +
            [
              "opacity-5",
              "opacity-[.03]",
              "opacity-5",
              "opacity-[.03]",
              "opacity-5",
            ][i]
          }
          style={{
            top: ["22%", "12%", "72%", "10%", "50%"][i],
            left: ["75%", "20%", "58%", "46%", "83%"][i],
            animationDuration: ["30s", "18s", "22s", "28s", "24s"][i],
            animationDelay: ["-5s", "-13s", "-10s", "-7s", "-2s"][i],
            transformOrigin: [
              "-15vw 22vh",
              "-10vw 12vh",
              "-20vw -10vh",
              "-10vw -18vh",
              "20vw 10vh",
            ][i],
            width: ["45vmin", "50vmin", "40vmin", "55vmin", "50vmin"][i],
            height: ["45vmin", "50vmin", "40vmin", "55vmin", "50vmin"][i],
          }}
        ></span>
      ))}
    </div>
  );
}
