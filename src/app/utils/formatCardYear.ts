const formatCardYear = (year: string): string => {
    // Verifica se o ano tem mais de dois dígitos
    if (year.length > 2) {
       // Retorna os dois últimos dígitos do ano
       return year.slice(-2);
    }
    // Se o ano tiver dois dígitos ou menos, retorna o ano como está
    return year;
   }

   
export default formatCardYear