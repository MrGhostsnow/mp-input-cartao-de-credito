const formatCardName = (value: string): string => {
   
    const words = value.split(' ');
 // Verifica se o número de palavras é menor ou igual a 3
 if (words.length > 3) {
    // Se houver mais de 3 palavras, retorna apenas as primeiras 3
    return words.slice(0, 3).join(' ');
 }
 // Se houver 3 ou menos palavras, retorna o valor original
 return value;
   };

export default formatCardName

