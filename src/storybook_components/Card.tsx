import CardProps from "../interfaces/CardProps";

export default function Card({
  img,
  altText,
  headline,
  subhead,
  description,
}: CardProps) {
  return (
    <div
      className={`h-[620px] mx-5 rounded-xl bg-surface-highest border-white border-2 flex flex-col items-center justify-center text-center ${
        description ? "w-96" : "w-max max-w-sm"
      }`}
    >
      {img ? (
        <img className="rounded-t-xl w-full" src={img} alt={altText} />
      ) : (
        <></>
      )}
      <div className={`px-4 py-5 ${description ? "w-11/12" : "w-max"}`}>
        <h2
          className={`text-2xl font-bold ${
            subhead || description ? "mb-2" : ""
          }`}
        >
          {headline}
        </h2>
        <h3 className={`text-base font-semibold ${description ? "mb-4" : ""}`}>
          {subhead}
        </h3>
        <p className="text-sm">{description}</p>
      </div>
    </div>
  );
}
