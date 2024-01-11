import CardProps from "../interfaces/CardProps";

export default function Card({
  img,
  altText,
  headline,
  subhead,
  description,
}: CardProps) {
  return (
    <div className="h-[600px] mx-[1vw] rounded-xl border-white border-2 flex items-center justify-center text-center lg:w-[23vw] sm:w-[48vw] w-[83vw]">
      <div className="w-full h-[85%] flex flex-col items-center">
        {img ? (
          <img
            className="rounded-t-xl lg:w-3/4 w-4/6"
            src={img}
            alt={altText}
          />
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
          <h3
            className={`text-base font-semibold ${description ? "mb-4" : ""}`}
          >
            {subhead}
          </h3>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
