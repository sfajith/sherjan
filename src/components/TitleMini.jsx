function TitleMini({ text, position }) {
  return (
    <h3
      className={`text-4xl font-semibold font-inter-tight w-full ${position} text-[#374151] dark:text-[#B0B9BF]`}
    >
      {text}
    </h3>
  );
}

export default TitleMini;
