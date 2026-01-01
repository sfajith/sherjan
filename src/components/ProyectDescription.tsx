function ProyectDescription({ problem, solution, results }) {
  return (
    <>
      <p
        className={`mt-4 xl:mt-0 text-[22px] font-[400] tracking-[0.02em] text-[#374151] dark:text-[#B0B9BF] text-center lg:text-left font-inter-tight `}
      >
        <b>Problema: </b>
        {problem}
      </p>
      <p
        className={`mt-4 xl:mt-0 text-[22px] font-[400] tracking-[0.02em] text-[#374151] dark:text-[#B0B9BF] text-center lg:text-left font-inter-tight `}
      >
        <b>Solución: </b>
        {solution}
      </p>
      <p
        className={`mt-4 xl:mt-0 text-[22px] font-[400] tracking-[0.02em] text-[#374151] dark:text-[#B0B9BF] text-center lg:text-left font-inter-tight `}
      >
        <b>Resultados reales: </b>
        {results}
      </p>
    </>
  );
}

export default ProyectDescription;
