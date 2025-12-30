import { useState } from "react";
import Image from "next/image";

function Experience({
  image,
  title,
  date,
  location,
  mainText,
  supplementaryText,
  links,
  additionalLinks,
}) {
  const [showMore, setShowMore] = useState(false);

  const toggleShowMore = () => setShowMore(!showMore);

  function parseMainText(mainText, links) {
    return mainText.map((text, index) => {
      if (text.startsWith("[") && text.endsWith("]")) {
        const linkText = text.slice(1, -1);
        const link = links.find((l) => l.text === linkText);
        if (link) {
          return (
            <a
              key={index}
              className="text-blue-600 dark:text-blue-400 hover:underline font-medium"
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.text}
            </a>
          );
        }
      }
      return <span key={index}>{text}</span>;
    });
  }

  return (
    <div className="p-5 transition-all duration-300">
      {/* Header with Image & Title */}
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt={title}
          width={56} // Equivalent to w-14 (14 * 4px)
          height={56} // Equivalent to h-14
          priority
        />
        <div>
          <h3 className="font-bold text-lg">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">
            {location} ({date})
          </p>
        </div>
      </div>

      {/* Main Text */}
      <p className="text-gray-800 my-4">{parseMainText(mainText, links)}</p>

      {/* Read More Section */}
      <div className="relative">
        <div
          className={`overflow-hidden transition-all duration-500 ${
            showMore ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-disc ml-6 text-gray-700 ">
            {supplementaryText.map((text, index) => (
              <li key={index} className="my-1">
                {text}
              </li>
            ))}
          </ul>

          {/* Additional Links */}
          {additionalLinks && (
            <div className="mt-3 ml-6">
              <span className="font-semibold">See Additional Links:</span>
              {additionalLinks.map((item) => (
                <a
                  key={item.href}
                  className="block text-blue-600  hover:underline mt-1"
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.text}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Read More Button */}
        {supplementaryText[0] && (
          <button
            className="w-full text-center font-semibold text-melrose100 hover:text-melrose transition-all"
            onClick={toggleShowMore}
          >
            {showMore ? "Read Less" : "Read More"}
          </button>
        )}
      </div>
    </div>
  );
}

export default Experience;
