import CardProps from "../interfaces/CardProps";

export default function Card({
  img,
  altText,
  headline,
  subhead,
  description,
}: CardProps) {
  let fullName;

  if (headline) {
    fullName = headline.split("-");
  }

  return (
    <div className="h-[600px] mx-[1vw] rounded-xl border-white border-2 flex items-center justify-center text-center 2xl:w-[14.6vw] lg:w-[23vw] sm:w-[48vw] w-[83vw]">
      <div className="w-full h-[85%] flex flex-col items-center">
        {img ? (
          <img
            className="rounded-t-xl 2xl:w-3/5 lg:w-3/4 w-4/6"
            src={img}
            alt={altText}
          />
        ) : (
          <></>
        )}
        <div className={`px-4 py-5 ${description ? "w-11/12" : "w-max"}`}>
          {headline && (
            <h3
              className={`text-2xl font-bold ${
                subhead || description ? "mb-2" : ""
              }`}
            >
              <span>{fullName?.[0]}</span> <br />
              <span>{fullName?.[1]}</span>
            </h3>
          )}
          <h4 className={`font-semibold ${description ? "mb-4" : ""}`}>
            {subhead}
          </h4>
          <p className="text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}
